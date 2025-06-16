import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";

export function About() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg">
            I'm a passionate Computer Science student at Carleton University, focusing on
            Computer and Internet Security. My journey in technology began with a
            curiosity about how systems work and how they can be made more secure.
          </p>
          <p className="text-lg">
            My academic focus includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Network Security and Defense</li>
            <li>Cryptography and Encryption</li>
            <li>Secure Software Development</li>
            <li>System Architecture</li>
          </ul>
          <p className="text-lg">
            I'm currently seeking internship opportunities where I can apply my
            knowledge and contribute to meaningful security solutions. I'm
            particularly interested in roles that combine software development
            with security practices.
          </p>
        </div>
      </ScrollFloat>
    </div>
  );
} 