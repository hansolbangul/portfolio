"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";

const Projects = () => {
  const router = useRouter();

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Projects
          </h2>
        </ScrollReveal>

        <div className="space-y-16">
          {projects.map((project: ValidatedProject, i) => (
            <ScrollReveal key={project.title} delay={i * 0.2}>
              <div
                onClick={() => router.push(`/projects/${project.id}`)}
                className="grid md:grid-cols-2 gap-8 p-8 rounded-xl cursor-pointer backdrop-blur-sm
                  bg-white/70 dark:bg-gray-900/30 
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]
                  dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]
                  transition-all duration-300"
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
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.Frontend?.map((tech) => (
                        <HoverScale key={tech}>
                          <span
                            className="px-3 py-1 rounded-full text-sm 
                              bg-purple-100 text-purple-600
                              dark:bg-purple-900/30 dark:text-purple-300"
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
                          className="flex items-center gap-2 px-4 py-2 rounded-lg 
                            bg-gray-100 text-gray-700 hover:bg-gray-200
                            dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
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
                          className="flex items-center gap-2 px-4 py-2 rounded-lg 
                            bg-purple-100 text-purple-600 hover:bg-purple-200
                            dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/30"
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
      </div>
    </section>
  );
};

export default Projects;
