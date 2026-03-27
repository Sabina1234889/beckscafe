import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso px-4 py-16 text-cream/80 md:px-8">
      <div className="container mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">Becks Cafe</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-cream/60">
              Fresh coffee, great food, and a cozy atmosphere in the heart of London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream">Contact</h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="font-body text-sm">28 Red Lion St, London WC1R 4PS</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+442074058565" className="font-body text-sm hover:text-cream">
                  +44 20 7405 8565
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-accent" />
                <span className="font-body text-sm">Daily 8:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 text-cream/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Becks Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
