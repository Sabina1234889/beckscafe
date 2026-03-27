import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Coffee, Egg, Sandwich, GlassWater } from "lucide-react";

const categories = [
  {
    id: "coffee",
    label: "Coffee",
    icon: Coffee,
    items: [
      { name: "Espresso", desc: "Rich, bold single shot", price: "£3.00" },
      { name: "Latte", desc: "Smooth espresso with steamed milk", price: "£4.00" },
      { name: "Cappuccino", desc: "Classic frothy coffee", price: "£4.00" },
      { name: "Flat White", desc: "Velvety microfoam espresso", price: "£4.20" },
      { name: "Americano", desc: "Espresso with hot water", price: "£3.50" },
      { name: "Mocha", desc: "Espresso, chocolate & milk", price: "£4.50" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    icon: Egg,
    items: [
      { name: "Full English", desc: "Eggs, bacon, sausage, beans & toast", price: "£9.50" },
      { name: "Eggs Benedict", desc: "Poached eggs, hollandaise on muffin", price: "£8.50" },
      { name: "Avocado Toast", desc: "Sourdough, smashed avo, poached egg", price: "£7.50" },
      { name: "Pancake Stack", desc: "Fluffy pancakes with berries & maple", price: "£8.00" },
      { name: "Granola Bowl", desc: "Greek yoghurt, fruit & honey", price: "£6.50" },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    icon: Sandwich,
    items: [
      { name: "Classic Burger", desc: "Beef patty, cheese, lettuce, tomato", price: "£11.00" },
      { name: "Chicken Wrap", desc: "Grilled chicken, salad, hummus", price: "£9.00" },
      { name: "Club Sandwich", desc: "Triple-decker with chips", price: "£10.00" },
      { name: "Caesar Salad", desc: "Cos lettuce, croutons, parmesan", price: "£8.50" },
      { name: "Fish & Chips", desc: "Beer-battered cod, tartare sauce", price: "£12.00" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    icon: GlassWater,
    items: [
      { name: "Fresh Orange Juice", desc: "Freshly squeezed", price: "£4.00" },
      { name: "Smoothie", desc: "Mixed berry or mango", price: "£5.00" },
      { name: "Hot Chocolate", desc: "Rich Belgian chocolate", price: "£4.00" },
      { name: "Iced Latte", desc: "Cold espresso over ice", price: "£4.50" },
      { name: "English Breakfast Tea", desc: "Classic black tea", price: "£3.00" },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState("coffee");
  const ref = useScrollAnimation();
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Explore
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Our Menu
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <cat.icon size={18} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="mt-10 mx-auto max-w-2xl">
          {activeCategory.items.map((item, i) => (
            <div
              key={item.name}
              className="flex items-start justify-between border-b border-border py-5 last:border-0 opacity-0 [.animate-visible_&]:animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </h4>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <span className="ml-4 shrink-0 font-display text-lg font-bold text-accent">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
