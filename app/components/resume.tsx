import { useRef, useState, useEffect } from "react";
import { ScrollFloat } from "./scroll-float";

// Custom hook for intersection observer
function useIntersectionObserver(ref: React.RefObject<HTMLDivElement | null>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

export function Resume() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    return(
        <div ref={sectionRef} className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
            >
                <h2 className="text-4xl mb-2"><span className="font-black">Resume</span></h2>
                <div className="flex justify-center">
                    {isVisible && (
                      <iframe src="Neil_Varshney_Resume.pdf" className="flex justify-center w-[950px] h-[800px] border-none"></iframe>
                    )}
                </div>
            </ScrollFloat>
        </div>
    );
}