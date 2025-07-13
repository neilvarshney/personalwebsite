"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from 'react-icons/fa6';
import { FadeIn } from "./fade-in";
import { 
  FaFilePdf, 
  FaDownload, 
  FaEye, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaAward,
  FaBook,
  FaCalendar,
  FaUsers
} from 'react-icons/fa6';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element && window.lenis && sectionId == 'home') {
    window.lenis.scrollTo(element, { offset: -100 });
  }
  
  else if (element && window.lenis) {
    window.lenis.scrollTo(element, { offset: 200});
  }
};

export function Hero() {

  const handleOpenResume = () => {
    window.open("/Neil_Varshney_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = "/Neil_Varshney_Resume.pdf";
      link.download = "Neil_Varshney_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection && window.lenis) {
      window.lenis.scrollTo(aboutSection, { offset: 200 });
    }
  };

  return (
    <FadeIn>
      <div className="text-center">
        <div className="group relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/profile.png"
            alt="Neil Varshney"
            width={192}
            height={192}
            className="rounded-full object-cover border-4 border-gray-700 shadow-lg"
            priority
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse group-hover:border-green-500 transition-colors duration-300"></div>
        </div>

        <h1 className="text-5xl font-black text-white mb-4">Neil Varshney</h1>
        
        <TypeAnimation
          sequence={[
            "Computer Science Student",
            1500,
            "Full-Stack Developer",
            1500,
            "Cybersecurity Enthusiast",
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl text-gray-400"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#548ae8",
          }}
          repeat={Infinity}
        />

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          Passionate about building unique digital experiences and exploring the world of AI and cybersecurity.
        </p>
        
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleOpenResume}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
            >
            <FaEye className="transition-transform duration-300" />
                View Resume (PDF)
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-900 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Learn More
            <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </FadeIn>
  );
} 