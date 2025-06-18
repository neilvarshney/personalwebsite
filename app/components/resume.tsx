import { ScrollFloat } from "./scroll-float";

export function Resume() {
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
                    <iframe src="Neil_Varshney_Resume.pdf" className="flex justify-center w-[950px] h-[800px] border-none"></iframe>
                </div>
            </ScrollFloat>
        </div>

    );

}