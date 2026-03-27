import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="container mx-auto text-center opacity-0 [.animate-visible_&]:animate-fade-up">
        <h2 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Visit <span className="italic">Becks Cafe</span> Today
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-lg text-primary-foreground/80">
          Stop by for your favourite coffee or order a delicious meal. We're waiting for you!
        </p>
        <a
          href="tel:+442074058565"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-10 py-4 font-body text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
