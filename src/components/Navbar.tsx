import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#visit", label: "Visit" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl tracking-wide gold-text">Indiya Oye</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Fine Indian Dining</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:07126665888"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground px-5 py-2.5 transition-all duration-300"
        >
          <Phone className="w-3.5 h-3.5" />
          Reserve
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/60 mt-3">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-gold">
                {l.label}
              </a>
            ))}
            <a href="tel:07126665888" className="inline-flex items-center gap-2 text-gold border border-gold/40 px-4 py-2 w-fit">
              <Phone className="w-4 h-4" /> Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
