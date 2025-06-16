"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscBook} from 'react-icons/vsc';
import { Dock } from './dock';

const YEAR = new Date().getFullYear();

const dockItems = [
  { 
    icon: <VscHome size={15} className="text-blue-500 hover:text-blue-400" />, 
    label: 'Home', 
    onClick: () => {
      const target = document.querySelector('#home');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -100 });
      }
    }
  },
  { 
    icon: <VscAccount size={15} className="text-orange-500 hover:text-orange-400" />, 
    label: 'Profile', 
    onClick: () => {
      const target = document.querySelector('#education');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300 });
      }
    }
  },
  { 
    icon: <VscArchive size={15} className="text-green-500 hover:text-green-400" />, 
    label: 'Projects', 
    onClick: () => {
      const target = document.querySelector('#projects');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300 });
      }
    }
  },
  { 
    icon: <VscBook size={15} className="text-purple-500 hover:text-purple-400" />, 
    label: 'Blog', 
    onClick: () => {
      const target = document.querySelector('#blog');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300 });
      }
    }
  },
  { 
    icon: <VscSettingsGear size={15} className="text-orange-500 hover:text-orange-400" />, 
    label: 'Photos', 
    onClick: () => {
      const target = document.querySelector('#photos');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300 });
      }
    }
  },
];

function SocialLink({ href, icon: Icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-2 px-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm text-[#1C1C1C] dark:text-[#D4D4D4] z-50">
      <div className="max-w-100% mx-auto flex justify-between items-center relative h-16">
        <div className="pl-80">
          <time>© {YEAR}</time>{" "}
          <a
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {metaData.title}
          </a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ bottom: '-20px' }}>
          <Dock />
        </div>
        <div className="pr-80">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
