"use client";
import Link from "next/link";
import { metaData } from "../lib/config";
import GradientText from "./gradient-text";
import ScrollReveal from './scroll-reveal';
import FadeIn from "./fade-in";


export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-black/80 backdrop-blur-sm h-26 w-100%">
      <FadeIn delay={1.5}>
      <div className="text-center">
        <a href="#home"
          onClick={e => {
            e.preventDefault();
            const target = document.querySelector('#home');
            if (target && window.lenis) {
              window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
            }
          }}>
          <GradientText
            colors={["#610000", "#262626", "#610000", "#262626", "#610000"]}
            animationSpeed={5}
            showBorder={false}
            className="font-black font-['Playfair_Display'] text-6xl"
          >
            {metaData.title}
          </GradientText>
        </a>
      </div>
      </FadeIn>
    </nav>
  );
}
