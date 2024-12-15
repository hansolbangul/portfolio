"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TailwindCSS. Features dark/light mode and smooth animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-url.com",
  },
  // Add more projects here
];

const Projects = () => {
  const { theme } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-20 min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold mb-12 text-center ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Projects
      </motion.h2>

      <div className="grid gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`grid md:grid-cols-2 gap-8 p-8 rounded-xl backdrop-blur-sm ${
              theme === "light"
                ? "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]"
                : "bg-gray-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
            } transition-all duration-300`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <motion.h3
                  whileHover={{ x: 10 }}
                  className={`text-2xl font-semibold mb-4 ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  whileHover={{ x: 10 }}
                  className={`mb-6 ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.1,
                        rotate: Math.random() * 10 - 5,
                      }}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === "light"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-purple-900/50 text-purple-200"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        theme === "light"
                          ? "bg-gray-800 text-white hover:bg-gray-700"
                          : "bg-gray-700 text-white hover:bg-gray-600"
                      }`}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </Link>
                  </motion.div>
                )}
                {project.demo && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        theme === "light"
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-purple-500 text-white hover:bg-purple-400"
                      }`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
