import Ornament from "./Ornament";
import artImg from "@/assets/interior-art.jpg";

const About = () => (
  <section id="about" className="relative py-24 md:py-36 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 border border-gold/30" />
        <img src={artImg} alt="Folk art and traditional seating" className="relative w-full aspect-[4/5] object-cover shadow-deep" />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-gold/40 px-8 py-6 shadow-gold">
          <p className="font-display text-4xl gold-text">4.8</p>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">262 Reviews</p>
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Where heritage meets <em className="gold-text not-italic">hospitality</em>.
        </h2>
        <Ornament className="my-8 max-w-xs ml-0" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          At Indiya Oye, every meal is a journey through India's royal kitchens. Our chefs honour generations of tradition — slow-roasted spices, hand-rolled breads, and recipes passed down with pride.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Whether it's an intimate dinner, a family celebration, or our signature all-you-can-eat experience, we welcome you with the warmth of true Indian hospitality.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6">
          {[
            { k: "Fine Dining", v: "Curated menu" },
            { k: "All You Can Eat", v: "Signature option" },
            { k: "Happy Hour", v: "Daily specials" },
            { k: "Private Events", v: "Reservations welcome" },
          ].map((i) => (
            <div key={i.k} className="border-l-2 border-gold/50 pl-4">
              <p className="font-display text-xl text-foreground">{i.k}</p>
              <p className="text-sm text-muted-foreground">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
