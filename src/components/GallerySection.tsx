import { useState, useEffect } from "react";
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { galleryImages } from "@/utils/galleryImages";
import { TShirtSection } from "@/components/TShirtSection";
import logotipoGrafismo from "@/assets/logotipo-grafismo-02.png"; // Importando a logo atualizada

// Global set to track preloaded images across component re-mounts
const preloadedUrls = new Set<string>();

const IMAGES_TO_DISPLAY = 10;

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const {
    ref: headerRef,
    isVisible: headerVisible
  } = useScrollAnimation({
    threshold: 0.3
  });
  const {
    ref: galleryRef,
    isVisible: galleryVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  const {
    ref: logoRef,
    isVisible: logoVisible
  } = useScrollAnimation({
    threshold: 0.2
  }); // Hook para a animação da logo

  // Exibir apenas as primeiras IMAGES_TO_DISPLAY imagens
  const displayedImages = galleryImages.slice(0, IMAGES_TO_DISPLAY);

  // Smart preloading strategy (simplificado, pois não há paginação)
  useEffect(() => {
    displayedImages.forEach(image => {
      const imageUrl = image.src;
      if (!preloadedUrls.has(imageUrl)) {
        preloadedUrls.add(imageUrl);
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }, [displayedImages]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  const closeLightbox = () => setSelectedImage(null);
  // Lightbox navegação ajustada para as 10 imagens
  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % displayedImages.length : null);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + displayedImages.length) % displayedImages.length : null);

  const googleDriveLink = "https://drive.google.com/drive/folders/1hJCGXmON-jrLW9yluCt_qXL7eTKL32xq?usp=sharing";

  return <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Logo da Empresa */}
        <div ref={logoRef} className={`mb-16 transition-all duration-700 ${logoVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <img 
            src={logotipoGrafismo} 
            alt="Landi Turbina" 
            className="w-full max-w-3xl mx-auto h-auto object-contain" 
          />
        </div>

        <div className="mt-6">
          <TShirtSection />
        </div>

        {/* Section Header (reposicionado abaixo da seção de compra) */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline uppercase mb-4">
            <span className="text-foreground">O Ronco que Ficou na Imagem.</span>
            <br />
            <span className="text-primary skew-headline inline-block mt-2">O Mural Está no Ar.</span>
          </h2>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16" ref={galleryRef}>
          <h3 className={`text-xl md:text-2xl font-headline uppercase mb-2 text-center text-muted-foreground transition-all duration-500 ${galleryVisible ? "opacity-100" : "opacity-0"}`}>
            Destaques do Encontro
          </h3>
          <p className={`text-center text-foreground/70 mb-8 text-lg font-body transition-all duration-500 delay-100 ${galleryVisible ? "opacity-100" : "opacity-0"}`}>
            Uma amostra da brutalidade que marcou o 1º Encontro Landi Turbina.
          </p>

          {/* Photo Grid with 10 images */}
          <div className={`relative transition-all duration-500 delay-150 ${galleryVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
              {displayedImages.map((image, index) => <div key={index} onClick={() => openLightbox(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="relative overflow-hidden cursor-pointer group animate-gallery-item" style={{
                animationDelay: `${index * 60}ms`
              }}>
                    <div className="relative aspect-square">
                      <img src={image.src} alt={image.alt} loading="eager" className={`w-full h-full object-cover transition-all duration-500 ${hoveredIndex === index ? "scale-110" : "scale-100"}`} />
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-primary/0 transition-all duration-500 ${hoveredIndex === index ? "bg-primary/20" : ""}`} />
                      
                      {/* Bottom Line Animation */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transition-transform duration-500 origin-left ${hoveredIndex === index ? "scale-x-100" : "scale-x-0"}`} />

                      {/* Zoom Icon */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
                        <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>)}
            </div>

            {/* Google Drive Link */}
            <div className="flex justify-center mt-12">
              <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-headline uppercase hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <ImageIcon className="w-5 h-5" />
                <span>VER TODAS AS FOTOS NO DRIVE</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
          
          <button onClick={e => {
        e.stopPropagation();
        prevImage();
      }} className="absolute left-4 p-2 hover:bg-secondary rounded-full transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img src={displayedImages[selectedImage].src} alt={displayedImages[selectedImage].alt} className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in" onClick={e => e.stopPropagation()} />
          
          <button onClick={e => {
        e.stopPropagation();
        nextImage();
      }} className="absolute right-4 p-2 hover:bg-secondary rounded-full transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground font-body">
            {selectedImage + 1} / {displayedImages.length}
          </div>
        </div>}
    </section>;
};
