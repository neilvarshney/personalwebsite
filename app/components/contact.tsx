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
  FaEnvelope,
  FaUser,
  FaMessage,
  FaPaperPlane,
  FaComments
} from "react-icons/fa6";

function SocialLink({ href, icon: Icon, platform }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-3 bg-blue-300/20 text-gray-300 rounded-full hover:bg-[#548ae8] hover:text-white transition-all duration-300 border border-blue-500/30 hover:border-[#548ae8]"
    >
      <Icon size={24}/>
      <span className="text-sm font-medium">{platform}</span>
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
        
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          {/* Introduction Section */}
          <div className="flex items-center gap-3 mb-8">
            <FaComments className="text-[#548ae8] text-2xl" />
            <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
          </div>
          
          <p className="text-lg text-gray-300 mb-12">
            Feel free to reach out to me about anything, whether that be new projects, creative ideas,
            or about my interests - I am open to everything!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <FaMessage className="text-green-500 text-xl" />
                <h4 className="text-xl font-bold text-white">Send Me a Message</h4>
              </div>
              
              {submitMessage && (
                <div className={`p-3 rounded-lg text-center ${
                  submitMessage.includes("successfully") 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
                  >
                    <FaUser className="text-[#548ae8] text-sm" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ex: John Doe"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700/50 border-2 border-gray-600 text-white focus:border-[#548ae8] focus:ring-[#548ae8] focus:ring-opacity-50 transition-all duration-200 hover:border-gray-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
                  >
                    <FaEnvelope className="text-[#548ae8] text-sm" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ex: example123@gmail.com"
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700/50 border-2 border-gray-600 text-white focus:border-[#548ae8] focus:ring-[#548ae8] focus:ring-opacity-50 transition-all duration-200 hover:border-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
                  >
                    <FaMessage className="text-[#548ae8] text-sm" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter message here..."
                    className="pl-3 mt-1 block w-full rounded-md bg-gray-700/50 border-2 border-gray-600 text-white focus:border-[#548ae8] focus:ring-[#548ae8] focus:ring-opacity-50 transition-all duration-200 hover:border-gray-500"
                    value={message}
                    onChange={(e) =>  setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-[#548ae8] text-white py-3 px-4 rounded-md hover:bg-[#548ae8]/80 hover:scale-105 hover:shadow-lg transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="text-sm" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Social Links Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className="text-purple-500 text-xl" />
                <h4 className="text-xl font-bold text-white">Connect With Me</h4>
              </div>
              
              <p className="text-gray-300 mb-8">
                Prefer to reach out through social media? Feel free to connect with me on any of these platforms!
              </p>
              
              <div className="space-y-4">
                <SocialLink href={socialLinks.email} icon={FaEnvelope} platform="Email" />
                <SocialLink href={socialLinks.github} icon={FaGithub} platform="GitHub" />
                <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} platform="LinkedIn" />
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#548ae8]">Quick Response:</strong> I typically respond within 24 hours during weekdays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollFloat>
    </div>
  );
} 