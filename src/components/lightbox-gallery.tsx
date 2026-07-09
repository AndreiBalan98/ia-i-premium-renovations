import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export function LightboxGallery({ images, columns = 3, aspect = "aspect-[4/5]" }: { images: GalleryImage[]; columns?: 2 | 3 | 4; aspect?: string }) {
  const [idx, setIdx] = useState<number | null>(null);
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];

  return (
    <>
      <div className={`grid grid-cols-2 ${cols} gap-3 md:gap-4`}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setIdx(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            className={`group relative overflow-hidden ${aspect} bg-surface`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
              <div className="text-xs tracking-widest text-gold uppercase">Detaliu</div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIdx(null)}
          >
            <button className="absolute top-6 right-6 h-11 w-11 grid place-items-center border border-border hover:border-gold text-foreground" onClick={() => setIdx(null)}><X /></button>
            <button className="absolute left-4 md:left-8 h-11 w-11 grid place-items-center border border-border hover:border-gold text-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + images.length) % images.length); }}><ChevronLeft /></button>
            <button className="absolute right-4 md:right-8 h-11 w-11 grid place-items-center border border-border hover:border-gold text-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % images.length); }}><ChevronRight /></button>
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              src={images[idx].src}
              alt={images[idx].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
