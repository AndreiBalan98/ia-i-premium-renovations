import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "../components/reveal";
import { Counter } from "../components/counter";
import { Phone, MessageCircle, Mail, MapPin, Wrench, ShieldCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/despre-noi")({
  head: () => ({
    meta: [
      { title: "Despre Noi — Amenajări Interioare Iași" },
      { name: "description", content: "Firmă autorizată de amenajări interioare Iași - executăm lucrări de peste 20 ani. Construcții, renovări, apartamente, glet, var, marmură, parchet." },
      { property: "og:title", content: "Despre Noi — Amenajări Interioare Iași" },
      { property: "og:description", content: "Peste 20 de ani de experiență în renovări premium, transparență fiscală și garanție contractuală." },
      { property: "og:url", content: "/despre-noi" },
    ],
    links: [{ rel: "canonical", href: "/despre-noi" }],
  }),
  component: DesprePage,
});

const stats = [
  { n: 20, s: "+", label: "Ani Experiență" },
  { n: 100, s: "%", label: "Calitate Garantată" },
  { n: 0, s: "", label: "Rating Profesional", override: "A+" },
  { n: 500, s: "+", label: "Lucrări Executate" },
];

const points = [
  { icon: Wrench, t: "Experiență Certificată", d: "Peste 20 de ani de activitate neîntreruptă și un portofoliu de peste 500 de proiecte, finalizate cu succes." },
  { icon: ShieldCheck, t: "Calitate Fără Compromis", d: "Rating profesional A+ și o atenție obsesivă la detalii în fiecare etapă a proiectului." },
  { icon: FileText, t: "Transparență și Legalitate", d: "Lucrăm exclusiv pe bază de contract și oferim factură, asigurând protecția investiției dumneavoastră." },
];

function DesprePage() {
  return (
    <div>
      <section className="pt-40 pb-20 px-6 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,var(--gold),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-6">Despre Noi</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl">
              Construim viziuni,<br /><span className="italic text-gold">Finisăm viitorul.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif">
              Suntem o firmă autorizată din Iași, dedicată transformării spațiilor de locuit prin soluții tehnice avansate și finisaje de înaltă precizie.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cu peste 2 decenii de experiență, misiunea noastră este să oferim fiecărui client siguranța unei execuții impecabile, susținută de transparență fiscală și garanție contractuală.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:0747791293" className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-6 py-3 tracking-wider text-sm shadow-gold">
                <Phone className="h-4 w-4" /> SUNĂ ACUM
              </a>
              <a href="https://wa.me/40747791293" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-primary-foreground transition tracking-wider text-sm">
                <MessageCircle className="h-4 w-4" /> DISCUTĂ PE WHATSAPP
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 border border-gold/40 bg-surface">
              <h3 className="font-serif text-xl text-gold mb-6">Contact Direct</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /><a href="tel:0747791293" className="hover:text-gold">0747 791 293</a></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /><a href="mailto:amenajariinterioareiasi@yahoo.com" className="hover:text-gold break-all">amenajariinterioareiasi@yahoo.com</a></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" />Prestăm servicii în județul Iași</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-24 px-6 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <div className="font-serif text-5xl md:text-7xl text-gold">
                  {s.override ? s.override : <><Counter to={s.n} />{s.s}</>}
                </div>
                <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DE CE */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Avantajele Noastre</div>
            <h2 className="font-serif text-4xl md:text-5xl">De ce să alegeți <span className="italic text-gold">experții noștri?</span></h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {points.map((p) => (
              <StaggerItem key={p.t}>
                <div className="h-full p-8 border border-border hover:border-gold transition bg-surface/40 group">
                  <div className="h-14 w-14 grid place-items-center border border-gold text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
