"use client";

import Image from "next/image";
import { socialLinks } from "./lib/config";
import { metaData } from "./lib/config";
import ScrollReveal from './components/scroll-reveal';
import LenisProvider from './components/LenisProvider';
import FadeIn from './components/fade-in';
import ScrollFloat from './components/scroll-reveal';
import { TypeAnimation } from 'react-type-animation';

declare global {
  interface Window {
    lenis?: any;
  }
}

export default function Page() {
  return (
    <>
      <LenisProvider>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-24">
          <div className="flex flex-col items-center">
            <FadeIn delay={0.6}>
              <a href={socialLinks.linkedin} target="_blank">
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
            <div className="">
              <FadeIn delay={0.6}>
                <TypeAnimation
                    sequence={[
                      'Neil Varshney',
                      1000, 
                      'A Coder',
                      1000,
                      'A Programmer',
                      1000,
                      'A Developer',
                      1000
                    ]}
                    wrapper="span"
                    speed={1}
                    style={{ textDecoration: 'underline', textDecorationColor: 'red', color: "white", fontSize: '3rem', display: 'inline-block', fontFamily: "Poppins", fontWeight: "bold" }}
                    repeat={Infinity}
                  />
              </FadeIn>
            </div>
            <div className="text-center prose prose-neutral dark:prose-invert font-['Poppins']">
              <FadeIn delay={0.8}>
                <p>
                  I'm a second-year Computer Science student at Carleton University, specializing in Computer and Internet 
                  Security. I'm constantly exploring the latest in network 
                  defense, cryptography, and secure software development.
                </p>
              </FadeIn>
              <FadeIn delay={1.0}>
                <p>
                  I'm actively seeking internship opportunities in cybersecurity or software development throughout the year 
                  where I can apply my academic knowledge and contribute to real-world security solutions. Feel 
                  free to explore my projects or connect with me!
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center pt-20 pb-24">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.1}
            >
              Education
            </ScrollFloat>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center pt-20 pb-24">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.1}
          >
            Projects
          </ScrollFloat>
            {/* Add your projects content here */}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="min-h-screen flex items-center justify-center pt-20 pb-24">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.1}
          >
           Blog
          </ScrollFloat>
            {/* Add your blog content here */}
          </div>
        </section>

        {/* Photos Section */}
        <section id="photos" className="h-350 flex items-center justify-center pt-20 pb-24">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.1}
          >
            Photos
          </ScrollFloat>
            {/* Add your photos content here */}
          </div>
        </section>
      </LenisProvider>
    </>
  );
}

// chroma grid for porjects
//stepper for conatct me page
// profile card for pfp
