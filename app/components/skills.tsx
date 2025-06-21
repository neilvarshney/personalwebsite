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
  SiScikitlearn
} from 'react-icons/si';

const skills = [
  {
    category: "Front-End Development",
    icon: FaCode,
    color: "text-blue-500",
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "CSS", icon: FaCode },
      { name: "HTML", icon: FaCode }
    ],
  },
  {
    category: "Other Languages & Tools",
    icon: FaLaptopCode,
    color: "text-purple-500",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "GitHub", icon: FaGithub },
      { name: "Git", icon: FaGithub },
      { name: "npm", icon: SiNpm },
      { name: "Unix/Linux", icon: SiLinux },
      { name: "VS Code", icon: FaCode }
    ],
  },
  {
    category: "Back-End Development",
    icon: FaServer,
    color: "text-green-500",
    items: [
      { name: "SQLite", icon: SiSqlite },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "RESTful APIs", icon: FaServer },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Deno", icon: FaCode }
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: FaBrain,
    color: "text-orange-500",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Natural Language Processing (NLP)", icon: FaBrain }
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