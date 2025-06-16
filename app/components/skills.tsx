import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Security Tools",
    items: ["Wireshark", "Metasploit", "Nmap", "Burp Suite", "Kali Linux"],
  },
  {
    category: "Other Technologies",
    items: ["Git", "Docker", "Linux", "AWS", "MongoDB", "PostgreSQL"],
  },
];

export function Skills() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-500">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollFloat>
    </div>
  );
} 