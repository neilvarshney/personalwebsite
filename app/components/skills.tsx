import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaBrain,
  FaJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker
} from 'react-icons/fa';
import { 
  SiPostgresql,
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiCplusplus, 
  SiC, 
  SiNpm, 
  SiLinux, 
  SiSqlite,
  SiFlask,
  SiFastapi,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMongodb
} from 'react-icons/si';

const skills = [
  {
    category: "Languages",
    icon: FaCode,
    color: "text-blue-500",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "JavaScript/TypeScript", icon: SiTypescript }
    ],
  },
  {
    category: "Front-End Development",
    icon: FaLaptopCode,
    color: "text-purple-500",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: FaCode },
      { name: "CSS3", icon: FaCode },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
  },
  {
    category: "Back-End Development",
    icon: FaServer,
    color: "text-green-500",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: SiPostgresql },
      { name: "Node.js", icon: FaNodeJs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "RESTful APIs", icon: FaServer }
    ],
  },
  {
    category: "M.L & Tools",
    icon: FaBrain,
    color: "text-orange-500",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Pandas", icon: SiPandas },
      { name: "Git", icon: FaGithub },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: SiLinux },
      { name: "RESTful APIs", icon: FaServer }
    ],
  },
];

export function Skills() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=30%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl mb-8"><span className="font-black">Skills</span></h2>
        
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <skillGroup.icon className={`text-2xl ${skillGroup.color}`} />
                  <h3 className="text-xl font-bold text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-300/20 text-gray-300 text-sm rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30 hover:border-[#548ae8]"
                    >
                      <skill.icon className="text-sm" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 