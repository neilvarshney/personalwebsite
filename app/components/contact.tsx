import { useState } from "react";
import { FadeIn } from "./fade-in";
import { ScrollFloat } from "./scroll-float";
import emailjs from '@emailjs/browser';
import { metaData, socialLinks } from "app/lib/config";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";

function SocialLink({ href, icon: Icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <Icon size={40}/>
    </a>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-lg text-left">
            Feel free to reach out to me about anything, whether that be new projects, creative ideas,
            or about my interests - I am open to everything!
          </p>
          <div className="w-full flex justify-center items-center gap-6">
            <div className="space-y-4 w-full max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold text-green-500 text-center">
                Send Me a Message
              </h3>
              {submitMessage && (
                <p className={`text-center ${submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                  {submitMessage}
                </p>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ex: John Doe"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ex: example123@gmail.com"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter message here..."
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                    value={message}
                    onChange={(e) =>  setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="font-bold w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-[#548ae8] transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
            <SocialLink href={socialLinks.github} icon={FaGithub} />
            <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 