import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import influencer images
import afazendeiraaImg from "@/assets/influencers/afazendeiraa.png";
import andrerincon47Img from "@/assets/influencers/andrerincon47.png";
import annelysdelcielImg from "@/assets/influencers/annelysdelciel.png";
import beatrizapgomesImg from "@/assets/influencers/beatrizapgomes.png";
import bebezaogbnImg from "@/assets/influencers/bebezaogbn.png";
import brendaiafelixImg from "@/assets/influencers/brendaiafelix.png";
import cowboycozinheirobbqImg from "@/assets/influencers/cowboycozinheirobbq.png";
import daavidruanImg from "@/assets/influencers/daavidruan.png";
import iamluluuhImg from "@/assets/influencers/iam-luluuh.png";
import isabellaborbaImg from "@/assets/influencers/isabellaborba.png";
import jdiegopulgaImg from "@/assets/influencers/j-diego-pulga.png";
import jeninhoficialImg from "@/assets/influencers/jeninhoficial.png";
import jherryvianaImg from "@/assets/influencers/jherry-viana.png";
import jhonatajs01Img from "@/assets/influencers/jhonatajs01.png";
import jirayadashopeeImg from "@/assets/influencers/jirayadashopee.png";
import joaquiimmoraisImg from "@/assets/influencers/joaquiim-morais.png";
import julianorinconImg from "@/assets/influencers/juliano-rincon.png";
import kaiquereisImg from "@/assets/influencers/kaique-reis.png";
import kemellyGarciaImg from "@/assets/influencers/kemelly-garcia.png";
import oficialwillgImg from "@/assets/influencers/oficialwill-g.png";
import maferribeiroImg from "@/assets/influencers/mafer-ribeiro.png";
import maicondaniloImg from "@/assets/influencers/maicondanilo.png";
import matheusagmendesImg from "@/assets/influencers/matheusagmendes.png";
import miguelmendes28Img from "@/assets/influencers/miguel-mendes28.png";
import motorizandoImg from "@/assets/influencers/motorizando.png";
import paulogaia12Img from "@/assets/influencers/paulo-gaia12.png";
import pitocoTtiImg from "@/assets/influencers/pitoco-tti.png";
import sabrynacarnettImg from "@/assets/influencers/sabrynacarnette.png";
import scholzegarageImg from "@/assets/influencers/scholze-garage.png";
import phburiImg from "@/assets/influencers/phburi.png";
import marcosvicttorImg from "@/assets/influencers/marcosvicttor.png";
import amandameiraImg from "@/assets/influencers/amanda-meira.png";

// Influencers with images and Instagram handles
const influencers = [
  { handle: "motorizando", image: motorizandoImg },
  { handle: "jherry_viana", image: jherryvianaImg },
  { handle: "sabrynacarnette", image: sabrynacarnettImg },
  { handle: "matheusagmendes", image: matheusagmendesImg },
  { handle: "jeninhoficial", image: jeninhoficialImg },
  { handle: "miguel_mendes28", image: miguelmendes28Img },
  { handle: "mafer__ribeiro", image: maferribeiroImg },
  { handle: "scholze.garage", image: scholzegarageImg },
  { handle: "juliano_rincon", image: julianorinconImg },
  { handle: "joaquiim.morais", image: joaquiimmoraisImg },
  { handle: "jhonatajs01_", image: jhonatajs01Img },
  { handle: "maicondanilo_", image: maicondaniloImg },
  { handle: "pitoco_tti", image: pitocoTtiImg },
  { handle: "kaique.reis_07", image: kaiquereisImg },
  { handle: "oficialwill.g", image: oficialwillgImg },
  { handle: "isabellaborba", image: isabellaborbaImg },
  { handle: "j_diego_pulga", image: jdiegopulgaImg },
  { handle: "paulo_gaia12", image: paulogaia12Img },
  { handle: "phburi", image: phburiImg },
  { handle: "afazendeiraa", image: afazendeiraaImg },
  { handle: "cowboycozinheirobbq", image: cowboycozinheirobbqImg },
  { handle: "beatrizapgomes", image: beatrizapgomesImg },
  { handle: "bebezaogbn", image: bebezaogbnImg },
  { handle: "brendaiafelix", image: brendaiafelixImg },
  { handle: "andrerincon47", image: andrerincon47Img },
  { handle: "annelysdelciel", image: annelysdelcielImg },
  { handle: "iam.luluuh", image: iamluluuhImg },
  { handle: "jirayadashopee", image: jirayadashopeeImg },
  { handle: "daavidruan", image: daavidruanImg },
  { handle: "kemelly.garcia", image: kemellyGarciaImg },
  { handle: "marcosvicttoroficial", image: marcosvicttorImg },
  { handle: "amanda_meiraa1", image: amandameiraImg },
];

export const InfluencersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Duplicate array for seamless loop
  const duplicatedInfluencers = [...influencers, ...influencers];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "animate-scroll-fade-up" : "opacity-0 translate-y-12"}`}>
          <h3 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Brutonas, Milonas e o Time de Peso
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground font-body">
            Influencers que aceleraram com a gente
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`relative transition-all duration-700 delay-200 influencer-group ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 md:gap-8 animate-marquee"
              style={{
                width: "max-content",
              }}
            >
              {duplicatedInfluencers.map((influencer, index) => (
                <a
                  key={index}
                  href={`https://instagram.com/${influencer.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:z-20 influencer-item"
                >
                  {/* Image */}
                  <img
                    src={influencer.image}
                    alt={`@${influencer.handle}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(229,62,62,0.6)] transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className={`text-center text-muted-foreground/60 mt-10 text-sm transition-all duration-500 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          + toda a galera que fez o encontro acontecer
        </p>
      </div>
    </section>
  );
};
