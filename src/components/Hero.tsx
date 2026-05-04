import heroImg from "@/assets/interior-hero.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Indiya Oye royal interior" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-ember" />
      </div>

      <div className="container relative z-10 pb-20 md:pb-32 pt-32">
        <div className="max-w-3xl fade-up">
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold mb-6 shimmer">Indore · Since A Royal Tradition</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance text-foreground">
            A taste of <em className="gold-text not-italic font-medium">India</em>,
            <br /> served like royalty.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Authentic North Indian cuisine in an opulent setting. Hand-crafted kebabs, slow-cooked curries, and timeless desserts — every plate, a celebration.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:07126665888"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase font-medium hover:shadow-gold transition-all duration-500"
            >
              <Phone className="w-4 h-4" /> Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border border-gold/40 text-gold px-8 py-4 text-sm tracking-wider uppercase hover:bg-gold/10 transition-all duration-300"
            >
              Explore the Menu
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">★</span>
              <span><span className="text-foreground font-medium">4.8</span> · 262 Reviews</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <span>Open Daily · Till Midnight</span>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <span>Reservation Recommended</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
