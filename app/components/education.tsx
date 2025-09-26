import { ScrollFloat } from "./scroll-float";
import { 
  FaEye, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaAward,
  FaBook,
  FaCalendar,
  FaUsers
} from 'react-icons/fa6';

export function Education() {

    return(
        <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="top bottom-=20%"
                scrollEnd="bottom top+=20%"
                stagger={0.1}
            >
                <h2 className="text-4xl mb-8"><span className="font-black">Education</span></h2>
                
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-6">
                        <FaGraduationCap className="text-[#548ae8] text-2xl" />
                        <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <div className="lg:w-2/3 space-y-6">
                            <div className="space-y-4">
                                <h4 className="font-bold text-2xl text-green-500 flex items-center gap-2">
                                    <img src="carleton.png" alt="Carleton" className="w-8 h-8 rounded" />
                                    Carleton University
                                </h4>
                                <p className="italic text-lg text-gray-300">
                                    Honours B.CS in Computer Science, <span className="font-bold text-white">Computer & Internet Security</span>
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                        <FaCalendar className="text-green-500 text-lg" />
                                        <span><strong className="font-bold text-white">Expected Graduation:</strong> <span className="text-gray-300">April 2028</span></span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                        <FaAward className="text-green-500 text-lg" />
                                        <span><strong className="font-bold text-white">CGPA:</strong> <span className="text-gray-300">10.75/12 (A-)</span></span>
                                    </div>
                                </div>

                                {/* Awards Section */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FaAward className="text-yellow-500 text-xl" />
                                        <span className="font-bold text-lg text-white">Awards & Recognition</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300 cursor-pointer">
                                            Dean's List (2x)
                                        </span>
                                        <span className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300 cursor-pointer">
                                            Chalmers Jack MacKenzie Scholarship
                                        </span>
                                        <span className="bg-yellow-500/20 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300 cursor-pointer">
                                            Henry Marshall Tory Scholarship
                                        </span>
                                    </div>
                                </div>

                                {/* Courses Section */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FaBook className="text-[#548ae8] text-xl" />
                                        <span className="font-bold text-lg text-white">Relevant Courses</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Database & Management Systems
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Abstract Data Types & Algorithms
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Applied Crypto & Authentication
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Intro to Software Engineering
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Fundamentals Web Applications
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Intro to Software Engineering
                                        </span>
                                        <span className="bg-blue-300/20 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 cursor-pointer border border-blue-500/30">
                                            Discrete Structures II
                                        </span>
                                    </div>
                                </div>

                                {/* Extracurricular Activities Section */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FaUsers className="text-green-500 text-xl" />
                                        <span className="font-bold text-lg text-white">Extracurricular Activities</span>
                                    </div>
                                    <div className="space-y-2 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#548ae8]">•</span>
                                            <span><strong>Carleton Computer Science Society:</strong> Member (Sept 2023 – Present)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#548ae8]">•</span>
                                            <span><strong>Intermurals Soccer:</strong> Participant (Sept 2024 – Present)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 space-y-6">
                            {/* Carleton Image */}
                            <div className="flex flex-col items-center justify-center">
                                <a className="w-full group" href="https://carleton.ca/" target="_blank" rel="noopener noreferrer">
                                    <div className="relative overflow-hidden rounded-xl">
                                        <img 
                                            className="w-full h-auto rounded-xl brightness-70 transition-all duration-300 group-hover:brightness-100 group-hover:scale-105" 
                                            src="carleton.png" 
                                            alt="Carleton University"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFloat>
        </div>
    );
}