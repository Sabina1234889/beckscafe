import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Latte art at Becks Cafe" },
  { src: gallery2, alt: "Fresh croissants" },
  { src: gallery3, alt: "Cozy café interior" },
  { src: gallery4, alt: "Gourmet burger" },
  { src: gallery5, alt: "Barista making coffee" },
  { src: gallery6, alt: "Avocado toast with poached eggs" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            See Our Space
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Gallery
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group overflow-hidden rounded-xl opacity-0 [.animate-visible_&]:animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain animate-fade-up"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
