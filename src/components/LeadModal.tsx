import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
});

type LeadForm = z.infer<typeof schema>;

const formatPhoneBR = (value: string) => {
  const digits = value.replace(/\D/g, "");
  const ddd = digits.slice(0, 2);
  const prefix = digits.slice(2, 7); // 5 dígitos para celular
  const suffix = digits.slice(7, 11);
  let result = "";
  if (ddd) result += `(${ddd})`;
  if (prefix) result += ` ${prefix}`;
  if (suffix) result += `-${suffix}`;
  return result;
};

export const LeadModal = () => {
  const [open, setOpen] = useState(true);

  const form = useForm<LeadForm>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "" },
    mode: "onChange",
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  const onSubmit = async (values: LeadForm) => {
    const digits = values.phone.replace(/\D/g, "");
    const ddd = digits.slice(0, 2);
    const number = digits.slice(2);
    try {
      await addDoc(collection(db, "leads2"), {
        name: values.name.trim(),
        phone: values.phone.trim(),
        rawPhone: digits,
        ddd,
        number,
        page: window.location.pathname,
        href: window.location.href,
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
        createdAt: serverTimestamp(),
      });
      toast("Contato enviado", { description: "Obrigado! Em breve entraremos em contato." });
      setOpen(false);
      window.location.href = "https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR";
    } catch (error) {
      // Firestore permission error - still redirect user to WhatsApp
      console.warn("Firestore write failed (check Firebase rules):", error);
      toast("Contato enviado", { description: "Você será redirecionado ao grupo." });
      setOpen(false);
      window.location.href = "https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR";
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
      }}
    >
      <DialogContent className="sm:max-w-sm rounded-2xl sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline uppercase">Fique por dentro</DialogTitle>
          <DialogDescription>
            Deixe seu contato para receber novidades.
            Ao enviar, você ganha acesso ao nosso grupo exclusivo no WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="tel"
                      placeholder="(14) 99999-9999"
                      value={field.value}
                      onChange={(e) => field.onChange(formatPhoneBR(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Enviar</Button>
            <p className="text-xs text-muted-foreground text-center">
              Ao preencher, você concorda em receber comunicação do Memorial Landi Turbina.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
