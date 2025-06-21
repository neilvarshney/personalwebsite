"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import { metaData, socialLinks } from "app/lib/config";
import { FadeIn } from "./fade-in";
import { Dock } from './dock';

const YEAR = new Date().getFullYear();


function SocialLink({ href, icon: Icon }) {
  return (
    <FadeIn delay={2.0}>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        <Icon size={24} />
      </a>
    </FadeIn>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <SocialLink href={socialLinks.email} icon={FaEnvelope} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-2 px-6 bg-black/80 backdrop-blur-sm text-[#D4D4D4] z-50">
      <div className="max-w-100% mx-auto flex flex-col items-center relative">
        {/* Desktop layout - dock floats above footer */}
        <div className="hidden md:flex justify-between items-center w-full h-16">
          <FadeIn delay={2.0}>
            <div className="text-sm">
              <time>© {YEAR}</time>{" "}
              <a
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {metaData.lastName}
              </a>
            </div>
          </FadeIn>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ bottom: '-20px' }}>
            <Dock />
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
        
        {/* Mobile layout - dock stays within footer */}
        <div className="md:hidden flex flex-col items-center w-full pb-4">
          <div className="mb-3">
            <Dock />
          </div>
          <div className="flex justify-between items-center w-full">
            <FadeIn delay={2.0}>
              <div className="text-[0.6rem]">
                <time>© {YEAR}</time>{" "}
                <a
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {metaData.lastName}
                </a>
              </div>
            </FadeIn>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
