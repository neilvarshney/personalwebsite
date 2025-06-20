import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FadeIn } from "./fade-in";
import { socialLinks } from "../lib/config";


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
  return (
    <div className="flex flex-col items-center">
      <FadeIn delay={1.4}>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 transition-all duration-400 ease-in-out"
            unoptimized
            width={200}
            height={200}
            priority
          />
        </a>
      </FadeIn>
      <div className="text-center">
        <FadeIn delay={1.4}>
          <TypeAnimation
            sequence={[
              "Neil Varshney",
              2000,
              "A Coder.",
              2000,
              "A Programmer.",
              2000,
              "A Developer.",
              2000,
            ]}
            wrapper="span"
            speed={1}
            style={{
              textDecoration: "underline",
              textDecorationColor: "#548ae8",
              color: "white",
              fontSize: "3rem",
              display: "inline-block",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </FadeIn>
      </div>
      <div className="text-center prose prose-neutral dark:prose-invert font-['Poppins']">
        <FadeIn delay={1.6}>
          <p>
            I'm a{" "}
            <span className="text-[#548ae8] font-extrabold">
              2nd-Year Computer Science student at
            </span>{" "}
            <a
              className="text-[#548ae8]  font-extrabold underline decoration hover:decoration transition-all duration-300"
              href="https://carleton.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carleton University
            </a>
            , specializing in{" "}
            <span className="text-[#548ae8] font-extrabold">
              Computer and Internet Security
            </span>
            . I'm constantly exploring the latest in network defense, cryptography,
            and secure software development.
          </p>
        </FadeIn>
        <FadeIn delay={1.8}>
          <p>
            I'm{" "}
            <span className="text-[#548ae8] font-extrabold">
              actively seeking internship opportunities
            </span>{" "}
            in{" "}
            <span className="text-[#548ae8] font-extrabold">
              cybersecurity or software development
            </span>{" "}
            where I can apply my academic knowledge and contribute to real-world
            security solutions. Feel free to explore my{" "}
            <a
              href="#projects"
              className="underline decoration hover:decoration transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              projects
            </a>{" "}
            or{" "}
            <a
              href={socialLinks.linkedin}
              className="underline decoration hover:decoration transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              connect with me!
            </a>
          </p>
        </FadeIn>
      </div>
    </div>
  );
} 