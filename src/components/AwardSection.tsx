import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importando as 4 imagens específicas
import winner1Img from "@/assets/awards/figura_opolaco_1765674844_3787077535009152207_75424455508.jpg";
import trophyCloseupImg from "@/assets/awards/figura_opolaco_1765674844_3787077535051123154_75424455508.jpg";
import kitContentImg from "@/assets/awards/figura_opolaco_1765800973_3788135585195345822_75424455508.jpg";
import winner2Img from "@/assets/awards/WhatsApp Image 2025-12-18 at 14.46.37.jpeg";

const slides = [
  {
    src: winner1Img,
    title: "ORGULHO NO PÓDIO.",
    caption: "A satisfação no rosto de quem vive a cultura do diesel e levou o título para casa.",
    objectPosition: "object-top" // Crop no topo para esta imagem
  },
  {
    src: trophyCloseupImg,
    title: "O ATESTADO DO PODER.",
    caption: '"Dominou sem pedir licença." Mais que metal, a gravação da conquista de quem aguenta a pressão.',
    objectPosition: "object-center" // Crop centralizado
  },
  {
    src: kitContentImg,
    title: "A ELITE DOS BARULHENTOS.",
    caption: "Uma experiência exclusiva. O kit que oficializa a entrada para o nível mais alto da nossa comunidade.",
    objectPosition: "object-center" // Crop centralizado
  },
  {
    src: winner2Img,
    title: "ORGULHO NO PÓDIO.",
    caption: "A satisfação no rosto de quem vive a cultura do diesel e levou o título para casa.",
    objectPosition: "object-center" // Crop centralizado
  },
];

const displayedSlides = slides; // Usando apenas as 4 slides definidas

export const AwardSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const hasSlides = displayedSlides.length > 0;

  useEffect(() => {
    if (!hasSlides) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % displayedSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hasSlides, displayedSlides.length]);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background" ref={ref}>
      {/* Background Slideshow */}
      {hasSlides && displayedSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? "opacity-40" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img src={slide.src} alt="" className={`w-full h-full object-cover blur-sm ${slide.objectPosition}`} />
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline uppercase">
            <span className="text-foreground">A CONSAGRAÇÃO DA BRUTALIDADE.</span>
            <br />
            <span className="text-primary skew-headline inline-block mt-2">O PRÊMIO MÁXIMO DA MOAGEM.</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 font-body">
            A arena de moagem do 1º Encontro Landi Turbina foi o campo de prova definitivo. Mas entre o barro, o ronco e a disputa, apenas os mais preparados se destacaram.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4 font-body">
            O prêmio de Camionete Mais Bruta não foi um sorteio. Foi uma conquista. Foi o reconhecimento para quem não teve dó do acelerador, impôs respeito na pista e provou que performance e estilo andam juntos até debaixo de lama. Este troféu é o atestado físico de que o Padrão Landi foi levado ao limite.
          </p>
        </div>

        {hasSlides && (
          <div className={`mt-16 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {displayedSlides.map((slide, index) => (
                  <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                    <div className="p-2 h-full">
                      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl h-full flex flex-col">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={slide.src}
                            alt={slide.title}
                            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${slide.objectPosition}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                        </div>
                        <div className="p-6 text-center mt-auto relative z-10 -mt-20">
                          <h3 className="text-xl font-headline uppercase text-primary mb-2 drop-shadow-md">{slide.title}</h3>
                          <p className="text-foreground/90 font-body text-sm leading-relaxed drop-shadow-sm">{slide.caption}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 hover:bg-primary hover:text-primary-foreground border-primary/20" />
              <CarouselNext className="hidden md:flex -right-4 bg-background/80 hover:bg-primary hover:text-primary-foreground border-primary/20" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};