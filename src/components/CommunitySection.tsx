import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { allImageUrls, shuffleArray } from "@/utils/galleryImages";

// Slideshow images (random 10 images)
const communityImages = shuffleArray(allImageUrls).slice(0, 10);

export const CommunitySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % communityImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Slideshow */}
      {communityImages.map((image, index) => <div key={index} className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>)}
      
      {/* Dark Overlay - Heavy for readability */}
      <div className="absolute inset-0 z-[1] bg-background/85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline uppercase mb-8">
            <span className="text-foreground">Time dos Barulhentos.</span>
            <br />
            <span className="text-primary skew-headline inline-block mt-2">A Comunidade Não Para.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-body">
            <p className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              O Novo Ciclo Landi não termina com o evento.<br />
              <span className="text-foreground font-medium">
É só o começo de uma estrada que a gente faz juntos.</span>
            </p>
            <p className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Se você acredita que excelência não é meta, é cultura — 
              <span className="text-primary font-semibold"> você já é um de nós.</span>
            </p>
            <p className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Acompanhe as redes, fique por dentro das novidades e esteja pronto 
              <span className="text-foreground font-medium"> pro próximo ronco.</span>
            </p>
          </div>

          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <a href="https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="font-headline text-lg tracking-wide group">
                <span className="group-hover:scale-105 inline-block transition-transform">
                  FIQUE POR DENTRO DO PRÓXIMO RONCO
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
    </section>;
};