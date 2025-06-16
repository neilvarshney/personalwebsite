"use client";
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

interface ScrollRevealProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  animationDuration = isMobile ? 0.5 : 1,
  ease = 'easeOut',
  scrollStart = 'start end',
  scrollEnd = 'end start',
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [scrollStart as any, scrollEnd as any],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: animationDuration,
        ease: ease as any,
        staggerChildren: stagger,
      }}
      style={{
        opacity,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}
