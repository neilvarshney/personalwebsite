"use client";

import { Dock } from "./components/dock";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Resume } from "./components/resume";
import Aurora from "./components/aurora";
import { useEffect } from "react";

declare global {
  interface Window {
    lenis?: any;
  }
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.lenis && typeof window.lenis.scrollTo === "function") {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo(0, 0);
      }
      if (window.history && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, []);

  return (
    
    <div className="relative w-full">
      <div className="container mx-auto px-4 py-8">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        
        <section id="about" className="py-90 flex flex-col items-start">
          <About />
        </section>

        <section id="education" className="py-90 flex flex-col items-start">
          <Education />
        </section>
        
        <section id="skills" className="py-90 flex flex-col items-start">
          <Skills />
        </section>
        
        <section id="projects" className="py-90 flex flex-col items-start">
          <Projects />
        </section>

        {/* <section id="resume" className="py-90 flex flex-col items-start">
          <Resume />
        </section> */}
        
        <section id="contact" className="py-90 flex flex-col items-start">
          <Contact />
        </section>
      </div>
    </div>

  );
}