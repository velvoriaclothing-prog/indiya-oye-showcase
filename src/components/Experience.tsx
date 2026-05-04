import diningImg from "@/assets/interior-dining.jpg";
import loungeImg from "@/assets/interior-lounge.jpg";
import seatingImg from "@/assets/interior-seating.jpg";
import Ornament from "./Ornament";

const Experience = () => (
  <section id="experience" className="py-24 md:py-36">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">The Experience</p>
        <h2 className="font-display text-4xl md:text-6xl text-balance">
          Step into a <em className="gold-text not-italic">royal evening</em>
        </h2>
        <Ornament className="my-8" />
      </div>

      <div className="grid md:grid-cols-12 gap-4 md:gap-6">
        <div className="md:col-span-7 relative group overflow-hidden">
          <img src={diningImg} alt="Main dining hall" className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">01 / Dining Hall</p>
            <h3 className="font-display text-3xl md:text-4xl mt-2">Grand & intimate</h3>
          </div>
        </div>
        <div className="md:col-span-5 relative group overflow-hidden">
          <img src={seatingImg} alt="Royal seating" className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">02 / Royal Lounge</p>
            <h3 className="font-display text-3xl md:text-4xl mt-2">Heritage seating</h3>
          </div>
        </div>
        <div className="md:col-span-12 relative group overflow-hidden">
          <img src={loungeImg} alt="Lounge interior" className="w-full h-[300px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">03 / The Atrium</p>
            <h3 className="font-display text-3xl md:text-4xl mt-2">Where stories begin</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
