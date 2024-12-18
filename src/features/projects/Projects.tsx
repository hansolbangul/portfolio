"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";

const Projects = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-20 min-h-screen"
    >
      <ScrollReveal>
        <h2
          className={`text-3xl font-bold mb-12 text-center ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Projects
        </h2>
      </ScrollReveal>

      <div className="space-y-16">
        {projects.map((project: ValidatedProject, i) => (
          <ScrollReveal key={project.title} delay={i * 0.2}>
            <div
              onClick={() => router.push(`/projects/${project.id}`)}
              className={`grid md:grid-cols-2 gap-8 p-8 rounded-xl cursor-pointer backdrop-blur-sm ${
                theme === "light"
                  ? "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]"
                  : "bg-gray-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
              } transition-all duration-300`}
            >
              <HoverScale scale={1.02}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail || "/projects/default-thumbnail.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverScale>

              <div className="flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-6 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.Frontend?.map((tech) => (
                      <HoverScale key={tech}>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            theme === "light"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-purple-900/30 text-purple-300"
                          }`}
                        >
                          {tech}
                        </span>
                      </HoverScale>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <HoverScale>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          theme === "light"
                            ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </Link>
                    </HoverScale>
                  )}
                  {project.demo && (
                    <HoverScale>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          theme === "light"
                            ? "bg-purple-100 text-purple-600 hover:bg-purple-200"
                            : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/30"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </Link>
                    </HoverScale>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
