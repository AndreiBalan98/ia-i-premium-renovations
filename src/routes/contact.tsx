import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amenajări Interioare Iași" },
      { name: "description", content: "Contactează firma noastră de renovări din Iași. Telefon 0747 791 293, WhatsApp, email. Ofertă gratuită." },
      { property: "og:title", content: "Contact — Amenajări Interioare Iași" },
      { property: "og:description", content: "Sună acum sau scrie-ne pe WhatsApp pentru o ofertă personalizată de renovare." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="pt-40 pb-16 px-6 gradient-dark">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-6">Contact</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight">
              Amenajări Interioare Iași<br /><span className="italic text-gold">Date Complete</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Număr de telefon", value: "0747 791 293", href: "tel:0747791293" },
            { icon: Mail, label: "Corespondență E-mail", value: "amenajariinterioareiasi@yahoo.com", href: "mailto:amenajariinterioareiasi@yahoo.com" },
            { icon: MapPin, label: "Activăm în", value: "Iași și împrejurimi" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <div className="p-8 border border-border hover:border-gold transition bg-surface h-full">
                <div className="h-12 w-12 grid place-items-center border border-gold text-gold mb-6"><c.icon className="h-5 w-5" /></div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="font-serif text-2xl hover:text-gold transition break-words">{c.value}</a>
                ) : (
                  <div className="font-serif text-2xl">{c.value}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-6">
          <a href="tel:0747791293" className="p-8 gradient-gold text-primary-foreground text-center shadow-gold hover:scale-[1.02] transition">
            <Phone className="h-8 w-8 mx-auto mb-4" />
            <div className="font-serif text-2xl">Sună Acum</div>
            <div className="text-sm mt-2 opacity-90">0747 791 293</div>
          </a>
          <a href="https://wa.me/40747791293" target="_blank" rel="noreferrer" className="p-8 border-2 border-gold text-gold text-center hover:bg-gold hover:text-primary-foreground transition">
            <MessageCircle className="h-8 w-8 mx-auto mb-4" />
            <div className="font-serif text-2xl">Mesaj WhatsApp</div>
            <div className="text-sm mt-2 opacity-90">Răspuns rapid</div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064083582672" target="_blank" rel="noreferrer" className="p-8 border-2 border-border text-foreground text-center hover:border-gold hover:text-gold transition">
            <Facebook className="h-8 w-8 mx-auto mb-4" />
            <div className="font-serif text-2xl">Pagină Facebook</div>
            <div className="text-sm mt-2 opacity-70">Portofoliu & recenzii</div>
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Alternativ</div>
            <h2 className="font-serif text-4xl mb-8">Scrie-ne un <span className="italic text-gold">mesaj rapid.</span></h2>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-4"
            >
              <input required placeholder="Nume" className="w-full bg-surface border border-border px-4 py-4 focus:border-gold outline-none text-foreground" />
              <input required placeholder="Telefon" className="w-full bg-surface border border-border px-4 py-4 focus:border-gold outline-none text-foreground" />
              <textarea required placeholder="Descrie proiectul tău" rows={5} className="w-full bg-surface border border-border px-4 py-4 focus:border-gold outline-none text-foreground resize-none" />
              <button type="submit" className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-8 py-4 tracking-wider text-sm shadow-gold">
                <Send className="h-4 w-4" /> TRIMITE MESAJ
              </button>
              {sent && <p className="text-gold text-sm">Mulțumim! Te contactăm în cel mai scurt timp.</p>}
            </form>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square w-full border border-border overflow-hidden">
              <iframe title="Hartă Iași" src="https://www.google.com/maps?q=Ia%C8%99i%2C+Rom%C3%A2nia&output=embed" className="w-full h-full grayscale" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
