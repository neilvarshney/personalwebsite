import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";

const skills = [
  {
    category: "Front-End Development",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "CSS", "HTML"],
  },
  {
    category: "Other Languages & Tools",
    items: ["Python", "Java", "C++", "C", "GitHub", "Git", "npm", "Unix/Linux", "VS Code"],
  },
  {
    category: "Back-End Development",
    items: ["SQLite", "Flask", "FastAPI", "RESTful APIs", "Node.js", "Deno"],
  },
  {
    category: "Machine Learning & AI",
    items: ["PyTorch", "Pandas", "NumPy", "Scikit-learn", "Natural Language Processing (NLP)"],
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
        <h2 className="text-4xl mb-8"><span className="font-black">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-8">
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