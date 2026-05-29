import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { allImageUrls, shuffleArray } from "@/utils/galleryImages";

// Slideshow images (random 10 images)
const manifestoImages = shuffleArray(allImageUrls).slice(0, 10);

export const ManifestoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % manifestoImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Slideshow */}
      {manifestoImages.map((image, index) => <div key={index} className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>)}
      
      {/* Dark Overlay - Heavy for readability */}
      <div className="absolute inset-0 z-[1] bg-background/85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline uppercase mb-8">
            <span className="text-foreground">O Ronco de um Sonho.</span>
            <br />
            <span className="text-primary skew-headline inline-block mt-2">A História que Acelera.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            <p className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Cada projeto que cruzou o portal do 1º Encontro Landi Turbina carregava mais que potência.
              <span className="text-foreground font-medium"> Carregava a história de quem não aceita o mediano.</span>
            </p>
            <p className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Se você estava lá, viu: a lama, o ronco, a poeira, o orgulho de fazer parte de algo maior. Não foi só um evento. 
              <span className="text-foreground font-medium"> Foi a prova de que a cultura bruta de raiz tem força.</span>
            </p>
            <p className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              O Time dos Barulhentos compareceu para dar o ronco de largada no Novo Ciclo. E o padrão Landi? 
              <span className="text-foreground font-medium"> Está no nível do seu orgulho.</span>
            </p>
          </div>

          <div className={`mt-12 py-8 border-t border-b border-primary/30 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <p className="text-2xl md:text-3xl font-headline uppercase text-glow-red text-primary-foreground">
              "Quem esteve em Avaré, viu a brutalidade com critério."
            </p>
          </div>
        </div>
      </div>
    </section>;
};