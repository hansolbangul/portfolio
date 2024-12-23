"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";
import { SectionLayout } from "@/shared/components/layout/SectionLayout";

const contactLinks = [
  {
    name: "GitHub",
    icon: () => (
      <FaGithub
        className="text-3xl transition-colors text-gray-800 group-hover:text-gray-600 
          dark:text-gray-300 dark:group-hover:text-white"
      />
    ),
    url: "https://github.com/hansolbangul",
  },
  {
    name: "LinkedIn",
    icon: () => (
      <FaLinkedin
        className="text-3xl transition-colors text-blue-600 group-hover:text-blue-700
          dark:text-blue-400 dark:group-hover:text-blue-300"
      />
    ),
    url: "https://www.linkedin.com/in/hansolbangul/",
  },
  {
    name: "Email",
    icon: () => (
      <FaEnvelope
        className="text-3xl transition-colors text-red-600 group-hover:text-red-700
          dark:text-red-400 dark:group-hover:text-red-300"
      />
    ),
    url: "mailto:ruaenddl981028@naver.com",
  },
];

const Contact = () => {
  return (
    <SectionLayout title="Contact" icon={FaEnvelope} id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link) => (
            <HoverScale key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 rounded-xl bg-white dark:bg-gray-800 
                  shadow-lg hover:shadow-xl transition-all"
              >
                {link.icon()}
                <span className="mt-4 font-medium text-gray-800 dark:text-white">
                  {link.name}
                </span>
              </a>
            </HoverScale>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
