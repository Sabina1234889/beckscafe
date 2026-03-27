import { UtensilsCrossed, ShoppingBag, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine In",
    description: "Enjoy your meal in our warm, cozy atmosphere with friendly table service.",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    description: "Grab your favourite coffee and food on the go — freshly prepared for you.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Get Becks Cafe delivered to your door. Fresh food, right to your home.",
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          What We Offer
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
          Our Services
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md opacity-0 [.animate-visible_&]:animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon size={26} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
