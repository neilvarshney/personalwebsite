import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import { 
  FaUser, 
  FaCalendar, 
  FaLocationDot, 
  FaCode,
  FaGamepad,
  FaMusic,
  FaHeadphones
} from 'react-icons/fa6';
import { MusicPlayer } from './MusicPlayer';

const favoriteSongs = [
  {
    title: 'sol',
    artist: 'Che',
    artistUrl: 'https://open.spotify.com/artist/5A7T1LAGJg5NXySBoIKUmF',
    albumArt: '/closedCaptionsChe.png',
    audioUrl: '/sol.mp3',
    links: {
      spotify: 'https://open.spotify.com/track/0A5QC5r1AMUccnd34pOlzs',
      youtube: 'https://www.youtube.com/watch?v=u3hJAvzE4hk',
      soundcloud: 'https://soundcloud.com/che/sol'
    }
  },
  {
    title: 'Home (KOD)',
    artist: 'Playboi Carti',
    artistUrl: 'https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD',
    albumArt: '/dieLit.jpg',
    audioUrl: '/home(KOD).mp3',
    links: {
      spotify: 'https://open.spotify.com/track/5wPyd3IQAZft1vmxoIqGrU',
      youtube: 'https://www.youtube.com/watch?v=-2pjiKmhlAI',
      soundcloud: 'https://soundcloud.com/playboicarti/albums'
    }
  },
  {
    title: 'Still The Same! 2',
    artist: 'Autumn',
    artistUrl: 'https://open.spotify.com/artist/5delTPpDAtBDsjk60f5xnt',
    albumArt: '/gc3.jpg',
    audioUrl: '/StillTheSame!2.mp3',
    links: {
      spotify: 'https://open.spotify.com/track/52VyUACgDgA0koWh7rfJoB',
      youtube: 'https://www.youtube.com/watch?v=hxSNX1RR088',
      soundcloud: 'https://soundcloud.com/twinuzis/sts-2-final?in=fayg0-95798732/sets/autumn&utm_source=direct&utm_content=store_button_footer&utm_medium=mobi&utm_campaign=no_campaign'
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
                I'm <strong className="text-white">Neil Varshney</strong>, a passionate Computer Science student at Carleton University, focusing on
                Computer and Internet Security. I have an ambition for full-stack development, artificial intelligence, and
                cybersecurity. I have several projects that are currently in the making, so stay tuned! Aside from my academic and technical interests,
                I have a serious passion for soccer (Hala Madrid!), FPS video games, and music.
              </p>      
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FaCalendar className="text-[#548ae8] text-lg" />
                  <span><strong className="font-bold text-white">Birthday:</strong> <span className="text-gray-300">July 2, 2005</span></span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FaLocationDot className="text-[#548ae8] text-lg" />
                  <span><strong className="font-bold text-white">Location:</strong> <span className="text-gray-300">Ottawa, ON or Toronto, ON</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaCode className="text-green-500 text-xl" />
                  <span className="font-bold text-lg text-white">Career Goals</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm currently seeking internship opportunities where I can apply my
                  knowledge and contribute to meaningful projects, whether it's security solutions, web development, or back-end development. I'm
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
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 flex flex-col items-start gap-4">
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