import aboutImage from "@/assets/about-food.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="opacity-0 [.animate-visible_&]:animate-fade-up">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              A Taste of <span className="italic">London</span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
              Becks Cafe is a popular local café in the heart of London, known for
              great coffee, tasty meals, and friendly service. Whether you're
              stopping by for a morning espresso or a leisurely lunch, our warm
              atmosphere and carefully crafted menu will make you feel right at home.
            </p>
            <p className="mt-4 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
              We source fresh, quality ingredients every day to bring you the best
              flavours London has to offer.
            </p>
          </div>
          <div className="opacity-0 [.animate-visible_&]:animate-fade-up-delay overflow-hidden rounded-2xl">
            <img
              src={aboutImage}
              alt="Fresh breakfast at Becks Cafe"
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
