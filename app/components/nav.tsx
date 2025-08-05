"use client";
import { metaData } from "../lib/config";
import GradientText from "./gradient-text";
import { FadeIn } from './fade-in';

const scrollToSection = (sectionId: string, offset: number = -100) => {
  const target = document.querySelector(sectionId);
  if (target && window.lenis) {
    window.lenis.scrollTo(target, { 
      offset,
      duration: 0.8,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  }
};

export function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-black/80 backdrop-blur-sm h-26 w-100%">
      <FadeIn delay={1.5}>
        <div className="text-center">
          <a className="inline-block cursor-pointer" href="/"
            onClick={(e) => {
              e.preventDefault();
              // If we're on the main page, scroll to home section
              if (window.location.pathname === '/') {
                scrollToSection('#home');
              } else {
                // If we're on an invalid URL, navigate to home page
                window.location.href = '/';
              }
            }}>
            <GradientText
              colors={["#1E3A8A", "#3B82F6", "#1E3A8A", "#3B82F6", "#1E3A8A"]}
              animationSpeed={5}
              showBorder={false}
              className="font-black font-['Poppins'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {metaData.title}
            </GradientText>
          </a>
        </div>
      </FadeIn>
    </nav>
  );
}
