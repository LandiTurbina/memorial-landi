import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logotipoGrafismo from "@/assets/logotipo-grafismo-02.png";
import seloEncontro from "@/assets/selo-encontro.png";

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer className="bg-landi-black border-t border-primary/30" ref={ref}>
      <div className="container mx-auto px-4 py-12">
        <div className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Selo do Evento */}
          <img 
            src={seloEncontro} 
            alt="1º Encontro Landi Turbina" 
            className="w-32 md:w-40 h-auto mb-8 hover:scale-105 transition-transform duration-300"
          />

          {/* Logo with Grafismo */}
          <img 
            src={logotipoGrafismo} 
            alt="Landi Turbina" 
            className="w-48 md:w-64 h-auto mb-6 hover:scale-105 transition-transform duration-300"
          />

          {/* Tagline */}
          <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4">
            Pra quem quer acelerar com estilo!
          </p>

          {/* Quote */}
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-8">
            "Excelência não é meta. É cultura."
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-primary/50 mb-8" />

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.instagram.com/landiturbina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@landiturbinaupgrade8199" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5514996952282&text=Oi%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20%F0%9F%98%8E&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Landi Turbina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
