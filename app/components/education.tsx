import { ScrollFloat } from "./scroll-float";

export function Education() {
    return(
        <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
            >
                <h1 className="text-4xl mb-5"><span className="font-black">Education</span></h1>
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-40">
                    <div className="lg:w-2/3 space-y-6">
                        <h1 className="font-bold text-3xl text-green-500">
                            Carleton University
                        </h1>
                        <h1 className="italic pb-5">
                            Honours B.CS in Computer Science, <span className="font-bold">Computer & Internet Security</span>
                        </h1>
                        <h1 className="text-xl">
                            Expected Graduation: <span className="font-bold">April 2028</span>
                        </h1>
                        <h1 className="text-xl">
                            CGPA: <span className="font-bold">10.75/12 (A-)</span>
                            <a target="_blank" href="Neil_Varshney_Transcript.pdf" className="px-3 py-1 ml-5 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200">
                                Transcript
                            </a>
                        </h1>
                        <div>
                            <h1 className="text-xl font-bold mb-3">Relevant Courses:</h1>
                            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                                <li className="bg-blue-300/20 text-gray-400 text-sm px-2 py-1 rounded hover:bg-[#548ae8] hover:text-white transition:all duration-300">Abstract Data Types & Algorithms</li>
                                <li className="bg-blue-300/20 text-gray-400 text-sm px-2 py-1 rounded hover:bg-[#548ae8] hover:text-white transition:all duration-300">Applied Crypto & Authentication</li>
                                <li className="bg-blue-300/20 text-gray-400 text-sm px-2 py-1 rounded hover:bg-[#548ae8] hover:text-white transition:all duration-300">Intro to Software Engineering</li>
                                <li className="bg-blue-300/20 text-gray-400 text-sm px-2 py-1 rounded hover:bg-[#548ae8] hover:text-white transition:all duration-300">Fundamentals Web Applications</li>
                                <li className="bg-blue-300/20 text-gray-400 text-sm px-2 py-1 rounded hover:bg-[#548ae8] hover:text-white transition:all duration-300">Discrete Structures II</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex flex-col items-center justify-center mt-8 lg:mt-0">
                        <a className="w-full group" href="https://carleton.ca/" target="_blank">
                            <img 
                                className="h-85 rounded-xl brightness-70 transition-all duration-300 group-hover:brightness-80" 
                                src="carleton.png" 
                                alt="Carleton University"
                            />
                        </a>
                    </div>
                </div>
            </ScrollFloat>
        </div>
    );

}