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
import Dock from './dock';

const YEAR = new Date().getFullYear();

const dockItems = [
  { icon: <VscHome size={15} className="text-blue-500 hover:text-blue-400" />, label: 'Home', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#home');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscAccount size={15} className="text-orange-500 hover:text-orange-400" />, label: 'Profile', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#education');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscArchive size={15} className="text-green-500 hover:text-green-400" />, label: 'Projects', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#projects');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscBook size={15} className="text-purple-500 hover:text-purple-400" />, label: 'Home', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#blog');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscSettingsGear size={15} className="text-orange-500 hover:text-orange-400" />, label: 'Settings', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#photos');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 800}); // adjust offset for navbar height
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
    <div className="flex text-lg gap-3.5 float-right">
      <SocialLink href={socialLinks.github} icon={FaGithub}/>
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="fixed bottom-0 left-0 right-0 py-2 px-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm text-[#1C1C1C] dark:text-[#D4D4D4] z-50">
      <div className="max-w-[900px] mx-auto flex justify-between items-center relative h-16">
        <div>
          <time>© {YEAR}</time>{" "}
          <a
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {metaData.title}
          </a>
        </div>
        <div className="mt-12 absolute left-1/2 transform -translate-x-1/2 overflow-visible" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
          <Dock 
            className="dark:bg-gray-800/25 backdrop-blur-sm rounded-lg shadow-lg"
            items={dockItems}
            panelHeight={45}
            baseItemSize={28}
            magnification={45}
          />
        </div>
        <SocialLinks />
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}
