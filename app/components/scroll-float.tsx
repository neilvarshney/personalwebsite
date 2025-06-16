import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

export function ScrollFloat({
  children,
  animationDuration = 1,
  ease = "power2.out",
  scrollStart = "top bottom",
  scrollEnd = "bottom top",
  stagger = 0,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: scrollStart,
        end: scrollEnd,
        toggleActions: "play none none reverse",
      },
    });

    Array.from(elements).forEach((element, index) => {
      timeline.fromTo(
        element,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          ease: ease,
          delay: index * stagger,
        }
      );
    });

    return () => {
      timeline.kill();
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return <div ref={containerRef}>{children}</div>;
} 