import { ScrollFloat } from "./scroll-float";
import { 
  FaBriefcase, 
  FaCalendar, 
  FaLocationDot,
  FaCode
} from 'react-icons/fa6';

const experiences = [
  {
    company: "Health Canada",
    position: "Data Management & Digital Transformation Student",
    location: "Ottawa, ON",
    startDate: "January 2026",
    endDate: "Present",
    description: "Supporting cutting-edge projects in RF/EMF human exposure assessment and digital transformation initiatives. Contributing to data science deliverables including data cataloging, database development for 3D simulation and experimental research data, and creating PowerBI dashboards to support Canada's leadership in radiation safety and standards.",
    responsibilities: [
      "Designed a comprehensive Data Catalog and Data Dictionaries on SharePoint to standardize the organization of scientific data assets",
      "Architected SharePoint site structures and implemented metadata tagging systems to streamline collaborative workflows and file management",
      "Developed and implemented automated workflows using Power Automate to streamline data entry and notification processes",
    ],
    technologies: ["SharePoint", "Power Automate", "Power BI", "M365"]
  }
];

export function Experience() {
  return (
    <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="top bottom-=20%"
        scrollEnd="bottom top+=20%"
        stagger={0.1}
      >
        <h2 className="text-4xl mb-8"><span className="font-black">Experience</span></h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  </div>
                  <p className="text-xl text-green-300 font-semibold mb-4">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-[#548ae8] text-sm" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="text-[#548ae8] text-sm" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-green-500 text-xl" />
                  <h4 className="text-lg font-bold text-white">Key Responsibilities</h4>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-500 mt-1.5 flex-shrink-0">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-purple-500 text-xl" />
                  <h4 className="text-lg font-bold text-white">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </ScrollFloat>
    </div>
  )
}