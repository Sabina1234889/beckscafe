import heroImage from "@/assets/hero-cafe.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Becks Cafe interior with fresh coffee and croissants"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative z-10 container mx-auto text-center">
        <p className="animate-fade-up font-body text-sm font-semibold uppercase tracking-[0.3em] text-latte/80 mb-4">
          Est. London
        </p>
        <h1 className="animate-fade-up font-display text-5xl font-bold leading-tight text-cream md:text-7xl lg:text-8xl">
          Welcome to
          <br />
          <span className="italic">Becks Cafe</span>
        </h1>
        <p className="animate-fade-up-delay mx-auto mt-6 max-w-lg font-body text-lg text-latte/90 md:text-xl">
          Fresh Coffee, Great Food, Cozy Atmosphere
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-lg bg-accent px-8 py-3.5 font-body text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            View Menu
          </a>
          <a
            href="tel:+442074058565"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-cream/30 px-8 py-3.5 font-body text-sm font-semibold text-cream transition-all hover:border-cream/60 hover:bg-cream/10"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
