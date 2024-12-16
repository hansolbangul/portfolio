"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";

const contactLinks = [
  {
    name: "GitHub",
    icon: (theme: string) => (
      <FaGithub 
        className={`text-3xl transition-colors ${
          theme === "light" 
            ? "text-gray-800 group-hover:text-gray-600" 
            : "text-gray-300 group-hover:text-white"
        }`} 
      />
    ),
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: (theme: string) => (
      <FaLinkedin 
        className={`text-3xl transition-colors ${
          theme === "light" 
            ? "text-blue-600 group-hover:text-blue-700" 
            : "text-blue-400 group-hover:text-blue-300"
        }`} 
      />
    ),
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Email",
    icon: (theme: string) => (
      <FaEnvelope 
        className={`text-3xl transition-colors ${
          theme === "light" 
            ? "text-red-600 group-hover:text-red-700" 
            : "text-red-400 group-hover:text-red-300"
        }`} 
      />
    ),
    url: "mailto:your.email@example.com",
  },
];

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl w-full">
        <ScrollReveal>
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Let's Connect
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className={`text-center mb-12 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link, index) => (
            <ScrollReveal key={link.name} delay={0.4 + index * 0.1}>
              <HoverScale>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-4 p-8 rounded-xl backdrop-blur-sm ${
                    theme === "light"
                      ? "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]"
                      : "bg-gray-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                  } transition-all duration-300`}
                >
                  <div className="p-4 rounded-full bg-opacity-20 backdrop-blur-sm">
                    {link.icon(theme)}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div
            className={`mt-16 p-8 rounded-lg text-center ${
              theme === "light"
                ? "bg-gray-50 text-gray-800"
                : "bg-gray-800/50 text-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">
              Looking for a Developer?
            </h3>
            <p className="mb-0">
              I'm currently available for freelance work and full-time positions.
              Let's build something amazing together!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
