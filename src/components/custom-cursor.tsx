import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, summary";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const x = useSpring(cx, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(cy, { stiffness: 500, damping: 40, mass: 0.4 });
  const scale = useSpring(hovering ? 1.8 : 1, { stiffness: 300, damping: 24 });
  const raf = useRef(0);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        cx.set(e.clientX);
        cy.set(e.clientY);
      });
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [cx, cy]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y, scale }}
      className="pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold mix-blend-difference"
    />
  );
}
