import Ornament from "./Ornament";

const sections = [
  {
    title: "Weekend Specials",
    note: "Reserved for Friday through Sunday",
    items: [
      "Mango Thandai",
      "Nadru Shammi Kebab",
      "Amritsari Masala Paneer Tikka",
      "Murgh Chilimili Tikka",
      "Mutton Chapli Kebab",
    ],
  },
  {
    title: "Vegetarian Kebabs",
    note: "From the tandoor and the tawa",
    items: [
      "Murabba Paneer Tikka",
      "Starfruit Paneer Tikka",
      "Dastane Khumb",
      "Bharwan Tandoori Aloo",
      "Nizami Subz Shami Kebab",
      "Ghhupa Rustam Kebab",
      "Tandoori Soya Broccoli",
      "Subz Gabani Kebab",
    ],
  },
  {
    title: "Main Course",
    note: "Slow-cooked, richly spiced",
    items: [
      "Paneer Mumtaz",
      "Kacche Kele Ka Kofta",
      "Handi Seekh Kebab",
      "Goan Fish Curry",
    ],
  },
  {
    title: "Breads",
    note: "Hand-rolled, freshly baked",
    items: [
      "Bajra Jowar Roti",
      "Makki Missi Roti",
      "Naan",
      "Garlic Butter Naan",
      "Tandoori Roti",
      "Laccha Paratha",
      "Pudina Paratha",
      "Tawa Phulka",
      "Amritsari Kulcha",
    ],
  },
  {
    title: "Desserts",
    note: "Heritage sweets",
    items: ["Badam Akhrot Halwa", "Gud Moong Dal Halwa"],
  },
  {
    title: "Dessert Specials",
    note: "Royal indulgences",
    items: [
      "Kesar Jalebi with Rabri",
      "Kesari Rasmalai",
      "Kulfi Falooda",
      "Mawa Bati",
      "Nolen Gurer Kheer",
      "Seasonal Halwa",
      "Ice Cream — Fig & Honey, American Nuts, Vanilla",
    ],
  },
];

const Menu = () => (
  <section id="menu" className="relative py-24 md:py-36 bg-card/40">
    <div className="absolute inset-0 bg-gradient-ember opacity-50 pointer-events-none" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">The Menu</p>
        <h2 className="font-display text-4xl md:text-6xl text-balance">
          A celebration of <em className="gold-text not-italic">flavour</em>
        </h2>
        <Ornament className="my-8" />
        <p className="text-muted-foreground">
          From smoky tandoor kebabs to time-honoured sweets — our kitchen tells the story of India, one course at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
        {sections.map((s) => (
          <div key={s.title} className="group">
            <div className="flex items-baseline justify-between border-b border-gold/30 pb-3 mb-6">
              <h3 className="font-display text-2xl md:text-3xl text-gold">{s.title}</h3>
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{s.note}</span>
            </div>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/85 hover:text-foreground transition-colors">
                  <span className="text-gold/60 mt-2 text-[6px]">◆</span>
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mt-20">
        Menu curated seasonally · Please call for current selections
      </p>
    </div>
  </section>
);

export default Menu;
