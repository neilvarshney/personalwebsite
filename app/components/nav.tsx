"use client";
import Link from "next/link";
import { metaData } from "../lib/config";
import GradientText from "./gradient-text";
import ScrollReveal from './scroll-reveal';

const navItems = {
  "#home": { name: "Home" },
  "#projects": { name: "Projects" },
  "#blog": { name: "Blog" },
  "#photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5 fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[900px] mx-auto px-6 gap-y-4 md:gap-y-0 md:gap-x-8">
        <a href="#home" className="font-['Playfair_Display'] text-6xl font-semibold text-center"
          onClick={e => {
            e.preventDefault();
            const target = document.querySelector('#home');
            if (target && window.lenis) {
              window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
            }
          }}>
          <GradientText
            colors={["red", "blue", "orange", "yellow", "green"]}
            animationSpeed={5}
            showBorder={false}
            className="font-['Playfair_Display'] text-6xl font-semibold"
          >
            {metaData.title}
          </GradientText>
        </a>
        <div className="flex flex-row gap-4 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <a
              key={path}
              href={path}
              onClick={e => {
                e.preventDefault();
                const target = document.querySelector(path);
                if (target && window.lenis && path==='#home') {
                  window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
                }
                else if(target && window.lenis && path==='#projects'){
                  window.lenis.scrollTo(target, { offset: 300});
                }
                else if(target && window.lenis && path==='#blog'){
                  window.lenis.scrollTo(target, { offset: 270});
                }
                else if(target && window.lenis && path==='#photos'){
                  window.lenis.scrollTo(target, { offset: 800});
                }
              }}
              className="mt-10 font-['Poppins'] text-white transition-all hover:text-blue-800 dark:hover:text-blue-200 flex align-middle relative"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
