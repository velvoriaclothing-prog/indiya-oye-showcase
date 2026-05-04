const Footer = () => (
  <footer className="border-t border-border/60 py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display text-2xl gold-text">Indiya Oye</p>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">Fine Indian Dining · Indore</p>
      </div>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Indiya Oye. Crafted with tradition.</p>
    </div>
  </footer>
);

export default Footer;
