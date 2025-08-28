"use client";

import { FadeIn } from "../components/fade-in";
import { ScrollFloat } from "../components/scroll-float";
import { FaCamera, FaArrowLeft, FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';


const photographyData = [
  {
    id: 1,
    title: "Downtown Toronto",
    description: "Lively Downtown Toronto",
    imageUrl: "/downtown.jpg",
    location: "Toronto, ON",
    category: "Urban",
    height: "h-120",
  },
  {
    id: 2,
    title: "Downtown Ottawa",
    description: "Beautiful Downtown Ottawa in the Winter",
    imageUrl: "/OttawaNice.jpg",
    location: "Ottawa, ON",
    category: "Urban",
    height: "h-100",
  },
  {
    id: 3,
    title: "TMU University",
    description: "TMU University aesthetics",
    imageUrl: "/TMU.jpg",
    location: "Toronto, ON",
    category: "Urban",
    height: "h-110",
  },
  {
    id: 4,
    title: "CN Tower",
    description: "CN Tower in Toronto",
    imageUrl: "/CNTower.jpg",
    location: "Toronto, ON",
    category: "Urban",
    height: "h-76",
  },
  {
    id: 5,
    title: "Downtown Chicago Lake",
    description: "Downtown Chicago Lake",
    imageUrl: "/dtChicagoLake.jpeg",
    location: "Chicago, IL",
    category: "Urban",
    height: "h-120",
  },
  {
    id: 6,
    title: "Downtown Chicago",
    description: "Downtown Chicago",
    imageUrl: "/dtChicago.jpeg",
    location: "Chicago, IL",
    category: "Urban",
    height: "h-80",
  },
  {
    id: 7,
    title: "Downtown Burlington",
    description: "Downtown Burlington Lakeshore",
    imageUrl: "/burl1.jpeg",
    location: "Burlington, ON",
    category: "Urban",
    height: "h-110",
  },
  {
    id: 8,
    title: "Downtown Burlington",
    description: "Downtown Burlington Buildings",
    imageUrl: "/burl2.jpeg",
    location: "Burlington, ON",
    category: "Urban",
    height: "h-100",
  },
  {
    id: 9,
    title: "Downtown Burlington",
    description: "Downtown Burlington with Friends",
    imageUrl: "/burl3.jpeg",
    location: "Burlington, ON",
    category: "Urban",
    height: "h-80",
  },
];

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-32 pb-16 px-4">
        <FadeIn delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-gray-300 bg-gray-800/50 border border-gray-700/50 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-700/50 hover:border-gray-600/50 hover:text-white transition-all duration-300"
              >
                <FaArrowLeft />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaCamera className="text-[#548ae8] text-4xl" />
                <h1 className="text-5xl md:text-6xl font-black font-['Poppins']">
                  Photography
                </h1>
              </div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Capturing moments through the lens. A collection of my favorite shots and visual stories.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Masonry Gallery */}
      <div className="px-4 pb-64">
        <div className="max-w-7xl mx-auto">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom top+=20%"
            stagger={0.1}
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {photographyData.map((photo, index) => {
                return (
                  <FadeIn key={photo.id} delay={index * 0.1}>
                    <div 
                      className={`relative group break-inside-avoid mb-4 overflow-hidden rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${photo.height}`}
                    >
                      <Image
                        src={photo.imageUrl}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay with location info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2">
                            <FaLocationDot className="text-[#548ae8] text-sm" />
                            <span className="text-white text-sm font-medium">{photo.location}</span>
                          </div>
                          {/* <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {photo.description}
                          </p>
                          <div className="mt-3">
                            <span className="text-xs bg-[#548ae8]/20 text-[#548ae8] px-2 py-1 rounded-full border border-[#548ae8]/30">
                              {photo.category}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </ScrollFloat>

          {/* More Photos Coming Soon Section */}
          <div className="text-center pt-24 pb-8">
            <FadeIn delay={0.5}>
                <div className="inline-flex items-center gap-3 text-gray-600">
                    <FaCamera className="text-xl" />
                    <p className="text-lg font-semibold tracking-wider">
                        More photos coming soon...
                    </p>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
} 