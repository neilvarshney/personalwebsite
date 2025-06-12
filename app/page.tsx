"use client";

import Image from "next/image";
import { socialLinks } from "./lib/config";
import { metaData } from "./lib/config";
import ScrollReveal from './components/scroll-reveal';
import LenisProvider from './components/LenisProvider';

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
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <a href={socialLinks.linkedin} target="_blank">
              <Image
                src="/profile.png"
                alt="Profile photo"
                className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                unoptimized
                width={160}
                height={160}
                priority
              />
            </a>
            <h1 className="mb-8 text-white text-2xl font-medium font-['Poppins']">B.CS Student @ Carleton University</h1>
            <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
              <p>
                A clean, fast, and lightweight portfolio template built with Next.js,
                Vercel, and Tailwind CSS.
              </p>
              <p>
                Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
                Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
                more.
              </p>
              <p>
                Nextfolio is{" "}
                <a href={socialLinks.github} target="_blank">
                  open-source
                </a>{" "}
                and fully customizable, making it easy to add more features.
              </p>
              <p>
                <a
                  href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
                  target="_blank"
                >
                  Deploy
                </a>{" "}
                your Nextfolio site with Vercel in minutes and follow the set up
                instructions in the{" "}
                <a href="/blog/getting-started">Getting Started</a> post.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <h2>Projects</h2>
            {/* Add your projects content here */}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="min-h-screen flex items-center justify-center">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <h2>Blog</h2>
            <ScrollReveal
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              reactbits
            </ScrollReveal>
            {/* Add your blog content here */}
          </div>
        </section>

        {/* Photos Section */}
        <section id="photos" className="min-h-screen flex items-center justify-center">
          <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <h2>Photos</h2>
            {/* Add your photos content here */}
          </div>
        </section>
      </LenisProvider>
    </>
  );
}
