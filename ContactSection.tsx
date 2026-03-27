import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6 opacity-0 [.animate-visible_&]:animate-fade-up">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Phone</p>
                <a href="tel:+442074058565" className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  +44 20 7405 8565
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  hello@beckscafe.co.uk
                </p>
              </div>
            </div>
            <a
              href="tel:+442074058565"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 opacity-0 [.animate-visible_&]:animate-fade-up-delay"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="rounded-lg border border-border bg-background px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="rounded-lg border border-border bg-background px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              className="resize-none rounded-lg border border-border bg-background px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
