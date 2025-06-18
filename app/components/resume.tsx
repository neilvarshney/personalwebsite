import { ScrollFloat } from "./scroll-float";

export function Resume() {
    const handleOpenResume = () => {
        window.open("/Neil_Varshney_Resume.pdf", "_blank", "noopener,noreferrer");
    };
    return(
        <div className="prose prose-neutral dark:prose-invert font-['Poppins']">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
            >
                <h2 className="text-4xl mb-2"><span className="font-black">Resume</span></h2>
                <div className="flex justify-center">
                    <button
                        onClick={handleOpenResume}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
                    >
                        View Resume (PDF)
                    </button>
                </div>
            </ScrollFloat>
        </div>
    );
}