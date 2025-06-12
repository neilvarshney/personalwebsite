"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out"
      }
    );
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FadeIn; 