import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import seloEncontro from "@/assets/selo-encontro.png";
import { allImageUrls, shuffleArray } from "@/utils/galleryImages";

// Select a random subset for the hero slideshow (e.g., 10 random images)
// We use a stable shuffle based on a fixed seed or simply shuffle once at module load time
// to avoid hydration mismatch, but since this is client-side rendered mostly, simple shuffle works.
// However, to be safe with React, we'll just pick a random slice or shuffle.
const heroImages = shuffleArray(allImageUrls).slice(0, 10);

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sealAnimated, setSealAnimated] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Trigger sticker animation after a short delay
    const timer = setTimeout(() => setSealAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
          <img src={image} alt={`Encontro Landi Turbina ${index + 1}`} className="w-full h-full object-cover" />
        </div>)}
      
      {/* Content Overlay - escurece apenas a área central do conteúdo */}
      <div className="absolute inset-0 z-[1]" style={{
      background: "radial-gradient(ellipse 80% 70% at 50% 50%, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.6) 50%, hsl(var(--background) / 0.2) 80%, transparent 100%)"
    }} />
      
      {/* Top and Bottom fade for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      {/* Content - Centralizado */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Selo do Evento - Destaque Principal com Sticker Animation */}
        <div className={`mb-8 ${sealAnimated ? "animate-sticker-slap" : "opacity-0"}`}>
          <img src={seloEncontro} alt="Selo 1º Encontro Landi Turbina" className="w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl" />
        </div>

        {/* Tagline - Texto Branco */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline uppercase text-foreground leading-tight animate-fade-up" style={{
        animationDelay: "600ms"
      }}>
          O RONCO QUE MARCA<br className="hidden md:block" /> O NOVO CICLO
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-6 mb-8 font-body font-normal animate-fade-up max-w-2xl" style={{
        animationDelay: "700ms"
      }}>
          A história da Landi se reconstrói com você.<br className="block" />
          <span className="text-foreground font-medium">
O padrão acelerou em Avaré, SP.</span>
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{
        animationDelay: "800ms"
      }}>
          <a href="https://instagram.com/landiturbina" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="font-headline text-base md:text-lg tracking-wide group">
              <span className="group-hover:scale-105 inline-block transition-transform">
                FAÇA PARTE DO TIME DOS BARULHENTOS
              </span>
            </Button>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-16 animate-fade-up" style={{
        animationDelay: "900ms"
      }}>
          {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1 rounded-full transition-all duration-500 ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"}`} aria-label={`Slide ${index + 1}`} />)}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </section>;
};