import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import { socialLinks } from "../lib/config";

export function Contact() {
  return (
    <div className="w-full font-['Poppins']">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
      >
        <h2 className="text-4xl mb-8"><span className="font-black">Contact</span></h2>
        <div className="space-y-20 w-full">
          <p className="pr-64 text-lg text-center">

            Feel free to reach out to me about anything, whether that be new projects, creative ideas,
            or about my interests - I am open to everything!
          </p>
          <div className="w-full flex justify-center items-center gap-6">
            <div className="space-y-4 w-full max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold text-green-500 text-center">
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    placeholder="ex: John Doe"
                    type="text"
                    id="name"
                    name="name"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    placeholder="ex: example123@gmail.com"
                    type="email"
                    id="email"
                    name="email"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                  placeholder="Enter message here..."
                    id="message"
                    name="message"
                    rows={4}
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="font-bold w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-[#548ae8] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 