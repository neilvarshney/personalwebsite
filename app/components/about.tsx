import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import { 
  FaUser, 
  FaCalendar, 
  FaLocationDot, 
  FaCode,
  FaGamepad,
  FaMusic,
  FaHeadphones,
  FaCamera
} from 'react-icons/fa6';
import { MusicPlayer } from './MusicPlayer';
import Link from 'next/link';

const favoriteSongs = [
  {
    title: 'Part The Red Seas',
    artist: 'che',
    artistUrl: 'https://open.spotify.com/artist/5A7T1LAGJg5NXySBoIKUmF?si=G8gJYwQOSDylUf03a1rgdA',
    albumArt: '/che.jpg',
    audioUrl: '/seas.mp3',
    links: {
      spotify: 'https://open.spotify.com/artist/5A7T1LAGJg5NXySBoIKUmF?si=xZEqSEMxSxipkYkD8YbGug',
      youtube: 'https://www.youtube.com/@che1101',
      soundcloud: 'https://soundcloud.com/che'
    }
  },
  {
    title: 'When You Left (One Way! 3)',
    artist: 'Autumn!',
    artistUrl: 'https://open.spotify.com/artist/5delTPpDAtBDsjk60f5xnt',
    albumArt: '/oneway3.png',
    audioUrl: '/oneway3.mp3',
    links: {
      spotify: 'https://open.spotify.com/album/5nRZvptYSovwcoaz75pMUU?si=kdlPl95LQd6EqlOhCiMWWw',
      youtube: 'https://www.youtube.com/@autumn4238/videos',
      soundcloud: 'https://soundcloud.com/twinuzis/when-you-left'
    }
  },
  {
    title: 'idk wtf',
    artist: 'prettifun',
    artistUrl: 'https://open.spotify.com/artist/3J3ngZn7GjzjwCPBkqtz65?si=foAe1fqrTUSO1qGUmSG8lQ',
    albumArt: '/idkwtf.jpg',
    audioUrl: '/idkwtf.mp3',
    links: {
      spotify: 'https://open.spotify.com/album/3N9AYh1fFKKBzjC7tB9tcL?si=_iznXMjWRIycQC5jpiFJXQ',
      youtube: 'https://www.youtube.com/watch?v=nFpbYHMJyy8',
      soundcloud: 'https://soundcloud.com/prettifun/idk-wtf'
    }
  }
];

export function About() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="top bottom-=20%"
        scrollEnd="bottom top+=20%"
        stagger={0.1}
      >
        <h2 className="text-4xl mb-8"><span className="font-black">About</span></h2>
        
        {/* Personal Introduction Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <FaUser className="text-[#548ae8] text-2xl" />
            <h3 className="text-2xl font-bold text-white">Personal Introduction</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Neil Varshney, a passionate <span className="font-bold text-green-300">Computer Science student at Carleton University</span>, 
                focusing on 
                <span className="font-bold text-green-300"> Computer and Internet Security</span>. I have an ambition for 
                <span className="font-bold text-green-300"> full-stack development, artificial intelligence, and
                cybersecurity</span>. I have several projects that are currently in the making, so stay tuned! Aside from my academic and technical interests,
                I have a serious passion for soccer (Hala Madrid!), FPS video games, and music! I also recently started enjoying photos, 
                <a href="/photography"> <span className="font-bold hover:underline">check out my gallery!</span></a>
              </p>      
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FaLocationDot className="text-[#548ae8] text-lg" />
                  <span><strong className="font-bold text-white">Location:</strong> <span className="text-gray-300">Ottawa, ON or Toronto, ON</span></span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FaCalendar className="text-[#548ae8] text-lg" />
                  <span><strong className="font-bold text-white">Birthday:</strong> <span className="text-gray-300">July 2, 2005</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaCode className="text-green-500 text-xl" />
                  <span className="font-bold text-lg text-white">Career Goals</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm <span className="font-bold text-green-300">currently seeking internship opportunities</span> where I can apply my
                  knowledge and contribute to meaningful projects, whether it's <span className="font-bold text-green-300">security solutions, web 
                    development, or back-end development.</span> I'm
                  particularly interested in roles that combine software development
                  with security practices.
                </p>
              </div>

              {/* Interests Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaGamepad className="text-purple-500 text-xl" />
                  <span className="font-bold text-lg text-white">Interests & Hobbies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-2 bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">
                    <span>⚽</span>
                    Soccer (Hala Madrid!)
                  </span>
                  <span className="flex items-center gap-2 bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">
                    <FaGamepad className="text-sm" />
                    FPS Video Games
                  </span>
                  <span className="flex items-center gap-2 bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">
                    <FaMusic className="text-sm" />
                    Music
                  </span>
                  <Link 
                    href="/photography"
                    className="flex items-center gap-2 bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <FaCamera className=" text-purple-300 text-sm" />
                    <span className=" text-purple-300">Photography</span>
                  </Link>
                </div>
              </div>
            </div>
          
            <div className="lg:w-1/3 flex flex-col items-start gap-4 lg:pt-0 xs:pt-10">
                <div className="flex items-center gap-3">
                    <FaHeadphones className="text-green-500 text-2xl" />
                    <h4 className="text-xl font-bold text-white">Currently Listening To</h4>
                </div>
                {favoriteSongs.map((song, index) => (
                    <MusicPlayer key={index} song={song} />
                ))}
            </div>
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 