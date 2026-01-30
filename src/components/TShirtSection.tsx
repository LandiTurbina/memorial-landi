import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const importedTshirtImages = import.meta.glob<string>("@/assets/tshirts/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const tShirtImages = Object.entries(importedTshirtImages)
  .filter(([path]) => !path.includes("landi-turbina-mockup.webp"))
  .map(([path, src]) => ({ src, alt: "Camiseta Landi Turbina" }))
  .sort((a, b) => a.src.localeCompare(b.src));

export const TShirtSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const baseMessage = selectedSize
    ? `Gostaria de saber mais informações sobre a camiseta da Landi Turbina! Tem tamanho ${selectedSize}?`
    : "Gostaria de saber mais informações sobre a camiseta da Landi Turbina!";
  const whatsappLink = `https://api.whatsapp.com/send/?phone=5514997297754&text=${encodeURIComponent(baseMessage)}&type=phone_number&app_absent=0`;

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline uppercase mb-4">
            <span className="text-foreground">Camiseta Oficial Landi Turbina</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4 font-body max-w-3xl mx-auto">
            Lançada no 1º Encontro Landi Turbina — identidade do Time dos Barulhentos.
          </p>
        </div>

        <div className={`mt-10 flex flex-col lg:flex-row items-start justify-center gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="w-full lg:w-1/2 max-w-md mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {tShirtImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 shadow-2xl bg-background">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 hover:bg-primary hover:text-primary-foreground border-primary/20" />
              <CarouselNext className="hidden md:flex -right-4 bg-background/80 hover:bg-primary hover:text-primary-foreground border-primary/20" />
            </Carousel>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="w-full rounded-xl border border-primary/20 bg-background/60 backdrop-blur-sm shadow-xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-headline uppercase text-foreground">Garanta a sua</h3>
                <span className="text-xs md:text-sm font-body text-muted-foreground">Produto oficial</span>
              </div>
              <div className="mt-4 bg-secondary/30 p-4 rounded-lg border border-primary/20">
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground font-body line-through text-lg">R$ 189,90</span>
                  <span className="text-2xl md:text-3xl font-headline uppercase text-primary">R$ 129,90</span>
                </div>
                <div className="mt-2 text-sm md:text-base font-headline uppercase text-foreground">Ou R$ 100,00 no Pix</div>
              </div>
              <div className="mt-6 space-y-3">
                <Label className="font-body text-sm text-muted-foreground">Selecione o tamanho</Label>
                <ToggleGroup type="single" value={selectedSize ?? ""} onValueChange={(v) => setSelectedSize(v)} className="flex flex-wrap gap-2">
                  <ToggleGroupItem value="P" variant="outline" size="sm" className="font-headline uppercase tracking-wide rounded-md border-primary/40 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">P</ToggleGroupItem>
                  <ToggleGroupItem value="M" variant="outline" size="sm" className="font-headline uppercase tracking-wide rounded-md border-primary/40 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">M</ToggleGroupItem>
                  <ToggleGroupItem value="G" variant="outline" size="sm" className="font-headline uppercase tracking-wide rounded-md border-primary/40 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">G</ToggleGroupItem>
                  <ToggleGroupItem value="GG" variant="outline" size="sm" className="font-headline uppercase tracking-wide rounded-md border-primary/40 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">GG</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="mt-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="default" size="lg" className="w-full font-headline text-base md:text-lg tracking-wide" disabled={!selectedSize}>
                    Comprar via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
