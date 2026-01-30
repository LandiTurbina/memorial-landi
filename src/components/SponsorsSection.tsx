import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import tesllaLogo from "@/assets/sponsors/teslla.png";
import trexLogo from "@/assets/sponsors/trex.png";
import dieselMilitiaLogo from "@/assets/sponsors/diesel-militia.png";
import brutosLogo from "@/assets/sponsors/brutos.png";

// New sponsors
import masterSoundLogo from "@/assets/sponsors/master-sound.png";
import agroFbLogo from "@/assets/sponsors/agro-fb.png";
import ajapiLogo from "@/assets/sponsors/ajapi.svg";
import autoDevasLogo from "@/assets/sponsors/auto-devas.png";
import autoMecanicaLandiLogo from "@/assets/sponsors/auto-mecanica-landi.png";
import casaChurrasqueiroLogo from "@/assets/sponsors/casa-do-churrasqueiro.png";
import coppersilLogo from "@/assets/sponsors/coppersil.png";
import expo4x4Logo from "@/assets/sponsors/expo-4x4.png";
import freiosAvareLogo from "@/assets/sponsors/freios-avare.png";
import fvoLogo from "@/assets/sponsors/fvo.png";
import tratormaqLogo from "@/assets/sponsors/tratormaq.png";
import novaAmericaLogo from "@/assets/sponsors/nova-america.png";
import patetaRadiadoresLogo from "@/assets/sponsors/pateta-radiadores.png";
import princalBateriasLogo from "@/assets/sponsors/princal-baterias.png";
import santaTerezinhaLogo from "@/assets/sponsors/santa-terezinha.png";
import spoLogo from "@/assets/sponsors/spo.png";
import draLogo from "@/assets/sponsors/dra.png";
import vitrineDoCoyboyLogo from "@/assets/sponsors/1687539452_logo-alto.webp";

const sponsors = {
  supporters: [
    { name: "Diesel Militia", logo: dieselMilitiaLogo },
    { name: "Brutos LT", logo: brutosLogo },
  ],
  // Main sponsors (Teslla and TRex first, bigger)
  mainSponsors: [
    { name: "Teslla Agroflorestal", logo: tesllaLogo, featured: true },
    { name: "T-Rex Lift", logo: trexLogo, featured: true },
  ],
  // Other sponsors
  otherSponsors: [
    { name: "Master Sound", logo: masterSoundLogo },
    { name: "Agro FB", logo: agroFbLogo },
    { name: "Ajapi", logo: ajapiLogo },
    { name: "Auto Devas", logo: autoDevasLogo },
    { name: "Auto Mecânica Landi", logo: autoMecanicaLandiLogo },
    { name: "Casa do Churrasqueiro", logo: casaChurrasqueiroLogo },
    { name: "Coppersil", logo: coppersilLogo },
    { name: "Expo 4x4", logo: expo4x4Logo },
    { name: "Freios Avaré", logo: freiosAvareLogo },
    { name: "FVO", logo: fvoLogo },
    { name: "Tratormaq", logo: tratormaqLogo },
    { name: "Nova América", logo: novaAmericaLogo },
    { name: "Pateta Radiadores", logo: patetaRadiadoresLogo },
    { name: "Princal Baterias", logo: princalBateriasLogo },
    { name: "Santa Terezinha", logo: santaTerezinhaLogo },
    { name: "SPO", logo: spoLogo },
    { name: "DRA", logo: draLogo },
    { name: "Vitrine do Cowboy", logo: vitrineDoCoyboyLogo },
  ],
};

export const SponsorsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: sponsorsRef, isVisible: sponsorsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline uppercase mb-4">
            <span className="text-foreground">Time de Peso. Ronco Raiz.</span>
            <br />
            <span className="text-primary skew-headline inline-block mt-2">
              Quem Viveu, Confirmou.
            </span>
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto font-body text-muted-foreground">
            O peso dos parceiros que acreditaram no Novo Ciclo Landi valida tudo que construímos juntos.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div ref={sponsorsRef}>
          {/* APOIADORES */}
          <div
            className={`mb-24 transition-all duration-700 ${
              sponsorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl md:text-2xl uppercase tracking-[0.3em] text-primary text-center mb-16 font-bold">
              Apoiadores
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
              {sponsors.supporters.map((sponsor, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center transition-all duration-300"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-28 md:h-36 w-auto object-contain group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,1)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* PATROCINADORES */}
          <div
            className={`transition-all duration-700 delay-200 ${
              sponsorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl md:text-2xl uppercase tracking-[0.3em] text-primary text-center mb-16 font-bold">
              Patrocinadores Master
            </h3>

            {/* Featured Sponsors (Teslla & TRex) - Bigger */}
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 mb-20">
              {sponsors.mainSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-36 md:h-52 w-auto object-contain group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
                  />
                </div>
              ))}
            </div>

            {/* Other Sponsors */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 max-w-7xl mx-auto">
              {sponsors.otherSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`${
                      ["FVO", "Pateta Radiadores", "DRA", "Vitrine do Cowboy"].includes(sponsor.name)
                        ? "h-20 md:h-28"
                        : "h-16 md:h-22"
                    } w-auto max-w-[160px] md:max-w-[200px] object-contain group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
