import Ornament from "./Ornament";

const reviews = [
  { quote: "Excellent service and very polite staff. A truly royal dining experience.", author: "Verified Guest" },
  { quote: "High-quality food with authentic taste — every dish was crafted with love.", author: "Verified Guest" },
  { quote: "The ambiance, the hospitality, the presentation. Perfection from start to finish.", author: "Verified Guest" },
];

const Reviews = () => (
  <section className="py-24 md:py-36 bg-card/40 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-ember opacity-40" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">Guest Voices</p>
        <h2 className="font-display text-4xl md:text-6xl text-balance">
          Loved by our <em className="gold-text not-italic">guests</em>
        </h2>
        <Ornament className="my-8" />
        <div className="flex items-center justify-center gap-1 text-gold text-2xl">
          ★★★★★
        </div>
        <p className="text-muted-foreground mt-3"><span className="text-foreground font-medium">4.8</span> across 262 reviews</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <figure key={i} className="border border-gold/20 bg-background/60 backdrop-blur-sm p-8 hover:border-gold/50 transition-all duration-500">
            <span className="font-display text-6xl gold-text leading-none">"</span>
            <blockquote className="font-display text-xl leading-relaxed text-foreground/90 -mt-4">
              {r.quote}
            </blockquote>
            <figcaption className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">— {r.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
