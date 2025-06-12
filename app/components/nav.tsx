"use client";
import Link from "next/link";
import { metaData } from "../lib/config";
import GradientText from "./gradient-text";
import ScrollReveal from './scroll-reveal';
import Dock from './dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscBook } from 'react-icons/vsc';

const dockItems = [
  { icon: <VscAccount size={18} className="text-blue-500 hover:text-blue-400" />, label: 'Profile', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#home');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscBook size={18} className="text-orange-500 hover:text-orange-400" />, label: 'Education', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#education');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscArchive size={18} className="text-green-500 hover:text-green-400" />, label: 'Projects', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#projects');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscHome size={18} className="text-purple-500 hover:text-purple-400" />, label: 'Home', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#blog');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 300}); // adjust offset for navbar height
      }
    }
  },
  { icon: <VscSettingsGear size={18} className="text-orange-500 hover:text-orange-400" />, label: 'Settings', onClick: () => {e => 
      e.preventDefault();
      const target = document.querySelector('#photos');
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: 800}); // adjust offset for navbar height
      }
    }
  },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-black/80 backdrop-blur-sm h-26 w-100%">
      <div className="text-center">
        <a href="#home"
          onClick={e => {
            e.preventDefault();
            const target = document.querySelector('#home');
            if (target && window.lenis) {
              window.lenis.scrollTo(target, { offset: -100}); // adjust offset for navbar height
            }
          }}>
          <GradientText
            colors={["#610000", "#262626", "#610000", "#262626", "#610000"]}
            animationSpeed={5}
            showBorder={false}
            className="font-['Playfair_Display'] text-6xl font-semibold"
          >
            {metaData.title}
          </GradientText>
        </a>
      </div>
      <div>
          <Dock 
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg ml-[800px]"
            items={dockItems}
            panelHeight={60}
            baseItemSize={30}
            magnification={50}
          />
      </div>
    </nav>
  );
}
