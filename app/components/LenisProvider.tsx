"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {

    // Force scroll to top on page load
    window.scrollTo(0, 0);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.125 : 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation: 'vertical',
      smoothWheel: !isTouchDevice,
      infinite: false,
    });

    // Expose lenis to window object
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
} 