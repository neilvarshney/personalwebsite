import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and a clean design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/profile.png",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Network Security Tool",
    description:
      "A Python-based network security tool that monitors and analyzes network traffic for potential threats and vulnerabilities.",
    technologies: ["Python", "Wireshark", "Network Security", "Linux"],
    image: "/logo.png",
    link: "https://github.com/yourusername/network-security-tool",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with secure payment processing, user authentication, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/photos/photo1.jpg",
    link: "https://github.com/yourusername/ecommerce",
  },
];

export function Projects() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollFloat>
    </div>
  );
} 