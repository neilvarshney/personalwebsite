import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import { FaSpotify } from 'react-icons/fa6';

export function About() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=20%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl mb-8"><span className="font-black">About</span></h2>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          <div className="lg:w-2/3 space-y-6">
            <p className="text-lg">
              I'm {""}
              <strong>Neil Varshney</strong> a passionate Computer Science student at Carleton University, focusing on
              Computer and Internet Security. I have an ambition for full-stack development, artifical intelligence, and
              cybersecuirty. I have several projects that are currently in the making, so stay tuned! Aside from my academic and technical interests,
              I have a serious passion for soccer (Hala Madrid!), FPS video games, and music.
            </p>      
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-lg">
              <div className="flex items-center">
                <span className="text-[#548ae8] mr-2 text-xl">&gt;</span>
                <span><strong className="font-bold">Birthday:</strong> July 2, 2005</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#548ae8] mr-2 text-xl">&gt;</span>
                <span><strong className="font-bold">City:</strong> Ottawa, ON or Toronto, ON</span>
              </div>
            </div>

            <p className="text-lg">
              I'm currently seeking internship opportunities where I can apply my
              knowledge and contribute to meaningful projects, whether it security solutions, web development, or back-end development. I'm
              particularly interested in roles that combine software development
              with security practices.
            </p>
          </div>
          
          <div className="lg:w-1/3 flex flex-col items-center justify-center">
            <a 
              href="https://open.spotify.com/playlist/2l5YCa2uCkqmxdsubl68Fi?si=87e9d7da69bb4d90" 
              target="_blank" 
              // rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-7 bg-[#548ae8] rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-500"
            >
              <FaSpotify size={60} className="text-white mb-4" />
              <span className="text-white text-lg font-semibold">Listen to My Playlist</span>
            </a>
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 