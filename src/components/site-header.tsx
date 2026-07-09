import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre Noi" },
  { to: "/portofoliu", label: "Portofoliu" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-sm gradient-gold shadow-gold" />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Amenajări Interioare</div>
            <div className="font-serif text-lg text-foreground group-hover:text-gold transition-colors">IAȘI</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="relative text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a href="tel:0747791293" className="hidden md:inline-flex items-center gap-2 rounded-none border border-gold px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition-all tracking-wider">
          <Phone className="h-3.5 w-3.5" /> SUNĂ ACUM
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-gold py-2 border-b border-border/40">
                  {n.label}
                </Link>
              ))}
              <a href="tel:0747791293" className="mt-2 inline-flex items-center gap-2 rounded-none bg-gold text-primary-foreground px-5 py-3 tracking-wider">
                <Phone className="h-4 w-4" /> 0747 791 293
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
