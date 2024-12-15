"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    float: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Contact Me
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-center mb-12 max-w-2xl mx-auto ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          I'm always open to new opportunities and collaborations.
          Feel free to reach out through any of the following channels!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              animate="float"
              variants={floatingVariants}
              className={`group flex flex-col items-center gap-4 p-6 rounded-xl backdrop-blur-sm ${
                theme === "light"
                  ? "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]"
                  : "bg-gray-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
              } transition-all duration-300`}
            >
              {link.icon(theme)}
              <span
                className={`font-medium ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                {link.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`mt-16 p-8 rounded-xl text-center ${
            theme === "light"
              ? "bg-purple-100"
              : "bg-purple-900/30"
          }`}
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-semibold mb-4 ${
              theme === "light" ? "text-purple-800" : "text-purple-200"
            }`}
          >
            Let's Create Something Amazing Together!
          </motion.h3>
          <motion.p
            whileHover={{ y: -5 }}
            className={`${
              theme === "light" ? "text-purple-700" : "text-purple-300"
            }`}
          >
            Whether you have a project in mind or just want to chat,
            I'm here to help turn ideas into reality.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
