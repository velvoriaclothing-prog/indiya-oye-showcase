import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import Ornament from "./Ornament";

const Visit = () => (
  <section id="visit" className="py-24 md:py-36">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">Reserve & Visit</p>
        <h2 className="font-display text-4xl md:text-6xl text-balance">
          Join us for an <em className="gold-text not-italic">unforgettable evening</em>
        </h2>
        <Ornament className="my-8" />
        <p className="text-muted-foreground">Reservations are recommended to ensure the best experience. Call us directly to book your table.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative overflow-hidden border border-gold/20 min-h-[400px]">
          <iframe
            title="Indiya Oye location"
            src="https://www.google.com/maps?q=Indiya+Oye+Scheme+94+Indore&output=embed"
            className="w-full h-full min-h-[400px] grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="bg-card border border-gold/20 p-8 md:p-12 space-y-8">
          <div className="flex gap-5">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Address</p>
              <p className="text-foreground/90 leading-relaxed">
                PWX3+X5R, Scheme 94 Sector CA<br />
                Indore, Madhya Pradesh – 452010
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Hours</p>
              <p className="text-foreground/90">Open daily · Till 12:00 AM</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Reservations</p>
              <a href="tel:07126665888" className="text-foreground/90 hover:text-gold transition-colors text-lg">
                0712 666 5888
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:07126665888"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-4 text-sm tracking-wider uppercase font-medium hover:shadow-gold transition-all duration-500"
            >
              <Phone className="w-4 h-4" /> Call to Reserve
            </a>
            <a
              href="https://www.google.com/maps?q=Indiya+Oye+Scheme+94+Indore"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-6 py-4 text-sm tracking-wider uppercase hover:bg-gold/10 transition-all"
            >
              <CalendarCheck className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Visit;
