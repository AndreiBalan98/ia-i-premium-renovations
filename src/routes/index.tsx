import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero3D } from "../components/hero-3d";
import { Reveal, Stagger, StaggerItem } from "../components/reveal";
import { LightboxGallery } from "../components/lightbox-gallery";
import { gallerySmall, galleryLarge } from "../lib/images";
import { Phone, Star, MessageCircle, Facebook, Instagram, ArrowRight, Sparkles, Layers, PaintBucket, Zap, MapPin, Mail } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amenajări Interioare Iași — Renovări Premium Apartamente" },
      { name: "description", content: "Firmă premium de renovări apartamente și case la cheie în Iași. Peste 20 de ani experiență, execuție impecabilă, materiale nobile." },
      { property: "og:title", content: "Amenajări Interioare Iași — Renovări Premium" },
      { property: "og:description", content: "Renovări apartamente și case la cheie în Iași. Materiale nobile, precizie tehnică, garanție contractuală." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Layers, title: "Placări ceramice premium", desc: "Ceramică și piatră naturală — Faianță · Gresie porțelanată rectificată · Mozaic · Marmură · Granit · Travertin. Atenție absolută la detalii și execuție ireproșabilă." },
  { icon: Sparkles, title: "Sisteme de gips-carton", desc: "Compartimentări interioare · Tavane false și scafe pentru iluminat ascuns · Nișe decorative și măști · Placări pe structură sau cu adeziv." },
  { icon: PaintBucket, title: "Finisaje decorative premium", desc: "Stucco Veneziano & Antico · Vopsele cu efect (mătase, catifea) · Tencuieli texturate cu textură bogată." },
  { icon: Zap, title: "Instalații electrice", desc: "Refacere și modernizare completă · Tablouri electrice cu protecții avansate · Iluminat LED și arhitectural · Aparataj modular și Smart Home." },
];

const faqs = [
  { q: "Cum putem începe colaborarea noastră?", a: "Suntem la doar un apel sau un mesaj distanță! Credem în comunicarea directă și transparentă, așa că ne puteți contacta prin metoda care vă este cea mai confortabilă. Fie că aveți o întrebare rapidă sau doriți să programăm deja o evaluare la locație, vă răspundem în cel mai scurt timp posibil pentru a vă oferi detaliile necesare." },
  { q: "Despre costuri și buget — Cum se calculează devizul final pentru lucrare?", a: "Devizul se bazează pe măsurători exacte realizate la locație și complexitatea manoperei. Primești o ofertă detaliată, fără costuri ascunse. Prețul rămâne fix pentru operațiunile contractate. Modificările apar doar dacă dvs. solicitați lucrări suplimentare." },
  { q: "Despre timp și planificare — Cât durează, în medie, un proiect de renovare/amenajare?", a: "Durata depinde de suprafață și complexitate. Stabilim un calendar clar de la început și ne ținem de el." },
];

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden gradient-dark">
        <div className="absolute inset-0 opacity-90">
          <Hero3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

        <motion.div style={{ y, opacity }} className="relative z-10 pt-32 md:pt-40 pb-24 px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.3em] text-gold uppercase">Excelență în Iași</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-5xl"
            >
              Amenajări<br />
              <span className="italic text-gold">Interioare</span> Iași
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <span className="text-foreground font-medium">Profesioniști Renovări Apartamente.</span> O firmă cu profesioniști specializați în renovări de apartamente, cu o experiență solidă și un portofoliu care vorbește de la sine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="tel:0747791293" className="group inline-flex items-center gap-3 gradient-gold text-primary-foreground px-8 py-4 tracking-wider text-sm shadow-gold hover:scale-[1.02] transition-transform">
                <Phone className="h-4 w-4" /> APELEAZĂ ACUM
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 px-4 py-3 border border-border/60 bg-surface/40 backdrop-blur">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">Rating 5 stele</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 font-serif italic text-2xl md:text-3xl text-gold/90"
            >
              Partenerul tău în Renovări Premium.
            </motion.p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* CITAT */}
      <section className="py-32 px-6 bg-surface">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-8">Proiectul tău începe aici</div>
            <p className="font-serif italic text-3xl md:text-5xl leading-tight text-foreground">
              „Credem în proiectele de calitate, în lucrul făcut cu simț de răspundere, în{" "}
              <span className="text-gold">detaliile care fac diferența!</span>"
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:0747791293" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif text-gold hover:text-gold-bright transition">
                <Phone className="h-5 w-5" /> 0747 791 293
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=100064083582672" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://wa.me/40747791293" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-3 hover:bg-gold hover:text-primary-foreground transition tracking-wider text-sm">
                <MessageCircle className="h-4 w-4" /> DISCUTĂ PE WHATSAPP
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RENOVĂRI COMPLETE */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Execuție Premium</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Renovări Complete.</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg">Suntem o firmă specializată în renovări apartamente și case!</p>
              <p>Având o echipă de profesioniști cu o vastă experiență în domeniul renovărilor, oferim servicii de cea mai înaltă calitate și ne asigurăm că fiecare proiect este tratat cu profesionalism și atenție la detalii.</p>
              <p>Ceea ce ne diferențiază este abordarea noastră personalizată față de fiecare proiect, seriozitatea și calitatea lucrărilor realizate de noi, deoarece înțelegem că fiecare locuință este unică și fiecare client are nevoi specifice.</p>
              <p>Așadar, dacă sunteți în căutarea unei echipe de profesioniști pentru a vă renova apartamentul sau casa, nu ezitați să ne contactați pentru o evaluare gratuită și detaliată a costurilor și timpului necesar.</p>
            </div>
            <Link to="/portofoliu" className="mt-10 inline-flex items-center gap-2 text-gold hover:text-gold-bright tracking-widest text-sm group">
              VEZI PORTOFOLIUL COMPLET <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80`} alt="Renovare living Iași" className="w-full aspect-[3/4] object-cover row-span-2" />
              <img src={`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80`} alt="Baie premium" className="w-full aspect-square object-cover" />
              <img src={`https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80`} alt="Bucătărie modernă" className="w-full aspect-square object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICII */}
      <section className="py-32 px-6 bg-surface">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Servicii Complete</div>
            <h2 className="font-serif text-4xl md:text-5xl">Firmă de Renovări Apartamente și Case la Cheie în <span className="italic text-gold">Iași</span></h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative h-full p-8 md:p-10 bg-background border border-border hover:border-gold/60 transition-all duration-500 hover:shadow-gold">
                  <div className="h-14 w-14 grid place-items-center border border-gold text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FII INSPIRAT */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Portofoliu</div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Fii inspirat… <span className="italic text-gold">Alege calitatea!</span></h2>
            <p className="text-muted-foreground">Vizualizați o parte din lucrările finalizate de firma noastră.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["Materiale Nobile", "Precizie Tehnică", "Design Curat", "Smart Home"].map((t) => (
                <span key={t} className="text-xs tracking-widest uppercase border border-border px-4 py-2 text-muted-foreground">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-center font-serif text-xl md:text-2xl mb-10 text-foreground/90">
              Calitate Premium — Finisaje Interioare și Design Modern pentru Case și Apartamente
            </p>
          </Reveal>

          <LightboxGallery images={gallerySmall} columns={3} />

          <Reveal className="text-center my-20">
            <p className="font-serif italic text-3xl md:text-4xl text-gold">Viziunea ta, Execuția noastră.</p>
            <p className="mt-4 text-muted-foreground tracking-widest text-sm uppercase">Design fără compromis</p>
          </Reveal>

          <LightboxGallery images={galleryLarge} columns={4} aspect="aspect-square" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Întrebări frecvente</div>
            <h2 className="font-serif text-4xl md:text-5xl">Tot Ce Trebuie Să Știi Despre <br /><span className="italic text-gold">Procesul Tău de Renovare</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-serif text-xl md:text-2xl hover:text-gold py-6 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACT RAPID */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Contact rapid</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Vorbește cu <span className="italic text-gold">echipa noastră.</span></h2>
            <div className="space-y-6">
              <a href="tel:0747791293" className="flex items-center gap-4 group">
                <div className="h-12 w-12 grid place-items-center border border-gold text-gold group-hover:bg-gold group-hover:text-primary-foreground transition">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">Telefon</div>
                  <div className="text-xl font-serif group-hover:text-gold transition">0747 791 293</div>
                </div>
              </a>
              <a href="mailto:amenajariinterioareiasi@yahoo.com" className="flex items-center gap-4 group">
                <div className="h-12 w-12 grid place-items-center border border-gold text-gold group-hover:bg-gold group-hover:text-primary-foreground transition">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">Email</div>
                  <div className="font-serif text-lg group-hover:text-gold transition break-all">amenajariinterioareiasi@yahoo.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 grid place-items-center border border-gold text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">Locație</div>
                  <div className="font-serif text-lg">Iași, România</div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 border border-gold/40 bg-surface">
              <p className="text-sm text-muted-foreground mb-3">Vizitează-ne și pagina oficială de Facebook</p>
              <a href="https://www.facebook.com/profile.php?id=100064083582672" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-6 py-3 tracking-wider text-sm">
                <Facebook className="h-4 w-4" /> DESCHIDE PAGINA
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Servicii Premium</div>
            <h3 className="font-serif text-3xl md:text-4xl mb-8">Ce ne definește.</h3>
            <div className="space-y-4">
              {[
                { t: "Execuții de finețe", d: "Echipe specializate în tehnici complexe de montaj și finisare." },
                { t: "Smart Home Systems", d: "Instalații electrice moderne și automatizări." },
                { t: "Design Marmură & Granit", d: "Montaj specializat pentru materiale nobile." },
              ].map((s) => (
                <div key={s.t} className="group p-6 border border-border hover:border-gold transition bg-surface/40">
                  <h4 className="font-serif text-xl text-gold mb-2">{s.t}</h4>
                  <p className="text-muted-foreground text-sm">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe title="Hartă Iași" src="https://www.google.com/maps?q=Ia%C8%99i%2C+Rom%C3%A2nia&output=embed" className="w-full h-full grayscale" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
