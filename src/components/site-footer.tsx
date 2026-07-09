import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-9 w-9 rounded-sm gradient-gold" />
            <div>
              <div className="font-serif text-xl">Amenajări Interioare Iași</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">Profesioniști renovări apartamente</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Oferim servicii în Iași și împrejurimi. Renovări premium cu execuție de finețe și materiale nobile.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.facebook.com/profile.php?id=100064083582672" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="h-10 w-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-gold mb-4">Date Firmă</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Î.I. Rahovei A. Petronel</li>
            <li>CUI: 41123434</li>
            <li>Reg. Com.: F22/764/2019</li>
            <li className="flex items-center gap-2 pt-2"><Phone className="h-3.5 w-3.5 text-gold" /><a href="tel:0747791293" className="hover:text-gold">0747 791 293</a></li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /><a href="mailto:amenajariinterioareiasi@yahoo.com" className="hover:text-gold break-all">amenajariinterioareiasi@yahoo.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" />Iași, România</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-gold mb-4">Navigare</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li><Link to="/" className="hover:text-gold">Acasă</Link></li>
            <li><Link to="/despre-noi" className="hover:text-gold">Despre Noi</Link></li>
            <li><Link to="/portofoliu" className="hover:text-gold">Portofoliu</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
          <h4 className="text-sm tracking-widest uppercase text-gold mt-6 mb-3">Plată</h4>
          <p className="text-sm text-muted-foreground">VISA / Card · Cash · Transfer bancar</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Amenajări Interioare Iași. Toate drepturile rezervate.</div>
          <div className="flex gap-6">
            <a href="https://anpc.ro/ce-este-sal" target="_blank" rel="noreferrer" className="hover:text-gold">ANPC SAL</a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="hover:text-gold">ANPC SOL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
