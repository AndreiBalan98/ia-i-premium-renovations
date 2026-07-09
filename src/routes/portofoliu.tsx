import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import { LightboxGallery } from "../components/lightbox-gallery";
import { portfolioBig } from "../lib/images";
import { Play } from "lucide-react";

export const Route = createFileRoute("/portofoliu")({
  head: () => ({
    meta: [
      { title: "Portofoliu — Amenajări Interioare Iași" },
      { name: "description", content: "Portofoliul nostru de servicii — peste 500 de proiecte de renovări apartamente și case în Iași. Calitate premium de peste 20 ani." },
      { property: "og:title", content: "Portofoliul Nostru — Amenajări Interioare Iași" },
      { property: "og:description", content: "Vezi lucrările realizate: renovări apartamente, baie, bucătărie, finisaje premium." },
      { property: "og:url", content: "/portofoliu" },
    ],
    links: [{ rel: "canonical", href: "/portofoliu" }],
  }),
  component: PortofoliuPage,
});

const videoThumbs = [
  { src: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80`, title: "Renovare apartament 2 camere" },
  { src: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80`, title: "Amenajare bucătărie modernă" },
  { src: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80`, title: "Renovare completă baie" },
];

function PortofoliuPage() {
  return (
    <div>
      <section className="pt-40 pb-16 px-6 gradient-dark">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-6">Portofoliu</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight">Portofoliul Nostru<br /><span className="italic text-gold">de Servicii</span></h1>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">Calitate fără compromis de peste 20 ani</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {videoThumbs.map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-surface cursor-pointer">
                <img src={v.src} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-20 w-20 rounded-full gradient-gold grid place-items-center shadow-gold group-hover:scale-110 transition">
                    <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs tracking-widest text-gold uppercase mb-2">Vizualizează Prezentarea</div>
                  <h3 className="font-serif text-2xl">{v.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Galerie</div>
            <h2 className="font-serif text-4xl md:text-5xl">Fiecare proiect, <span className="italic text-gold">o poveste.</span></h2>
          </Reveal>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {portfolioBig.map((img, i) => (
              <LightboxGalleryItem key={i} img={img} images={portfolioBig} index={i} />
            ))}
          </div>
          <div className="mt-16">
            <LightboxGallery images={portfolioBig.slice(0, 12)} columns={4} aspect="aspect-[3/4]" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple masonry-friendly item without lightbox (falls back to using the full gallery below)
function LightboxGalleryItem({ img }: { img: { src: string; alt: string }; images: { src: string; alt: string }[]; index: number }) {
  return (
    <div className="break-inside-avoid overflow-hidden group">
      <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" />
    </div>
  );
}
