import { MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="location" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Find Us
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Our Location
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl opacity-0 [.animate-visible_&]:animate-fade-up">
            <iframe
              title="Becks Cafe location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9!2d-0.1135!3d51.5215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzE3LjQiTiAwwrAwNic0OC42Ilc!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-8 opacity-0 [.animate-visible_&]:animate-fade-up-delay">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Address
                </h3>
                <p className="mt-1 font-body text-muted-foreground">
                  28 Red Lion St, London WC1R 4PS
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Opening Hours
                </h3>
                <p className="mt-1 font-body text-muted-foreground">
                  Open Daily
                  <br />
                  8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
