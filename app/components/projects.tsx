import { ScrollFloat } from "./scroll-float";
import Image from "next/image";

const projects = [
  {
    title: "Fake News Detector",
    description:
      "A machine learning-powered web application that helps users identify potentially fake news articles using BERT and Logistic Regression.",
    technologies: ["Python", "JavaScript", "React", "SQLite", "HTML/CSS", "M.L", "Scikit-Learn"],
    image: "/fakenewsdetector.png",
    link: "https://github.com/neilvarshney/Fake-News-Detector",
  },

  {
    title: "Fitness Club Database Management System",
    description:
      "A simple C.L.I for afitness club database management system built with Python and PostgreSQL. It allows the club to manage its members, classes, and bookings. Provides a basic foundation for a fitness club database management system.",
    technologies: ["Python", "PostgreSQL", "C.L.I"],
    image: "/dbms.png",
    link: "https://github.com/mfong9164/COMP-3005--Final-Project"
  },

  {
    title: "Anime Haven",
    description:
      "An intelligent chatbot that helps anime enthusiasts discover new shows, get recommendations, and answer their anime-related questions. Built with React and powered by AI, this chatbot provides personalized anime suggestions based on user preferences and interests.",
    technologies: ["Python", "JavaScript", "React", "Fast API", "SQLite", "HTML/CSS", "L.L.M",],
    image: "/animehaven.png",
    link: "https://github.com/neilvarshney/Anime-Haven",
  },

  {
    title: "Password Manager",
    description:
      "A secure, client-side encrypted password manager built as a Chrome extension with a Flask backend. This project demonstrates advanced security practices including JWT authentication, password-based encryption, and secure key derivation.",
    technologies: ["Python", "Flask", "React", "MongoDB", "JavaScript", "HTML/CSS"],
    image: "/dashboard.png",
    link: "https://github.com/neilvarshney/Password-Manager",
  },

  {
    title: "Weather App",
    description:
    "A modern, responsive weather application built with Next.js that provides real-time weather information with dynamic background colors based on time of day and weather conditions.",
    technologies: ["Python", "Flask", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    image: "/weatherApp.png",
    link: "https://github.com/neilvarshney/Weather-App",
  },
  
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built with Next.js, showcasing my work, skills, and experience as a Computer Science student.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "HTML/CSS"],
    image: "/portfolio.png",
    link: "https://neilvarshney.vercel.app",
  },

  {
    title: "Obstacle Dodger",
    description:
      "A simple 2D arcade-style game where players dodge horizontally moving obstacles. Built with Java Processing.",
    technologies: ["Java", "Java Processing", "G.U.I"],
    image: "/obstacleDodger.png",
    link: "https://github.com/neilvarshney/Obstacle-Dodger",
  }
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
        <h2 className="text-4xl mb-8"><span className="font-black">Projects</span></h2>
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
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs text-green-500"
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