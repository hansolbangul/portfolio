"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCode, FaGithub, FaExternalLinkAlt, FaRocket, FaImage } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";
import { SectionLayout } from "@/shared/components/layout/SectionLayout";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const Projects = () => {
  const router = useRouter();

  return (
    <SectionLayout title="Projects" icon={FaCode} id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8 grid-flow-row-dense">
          {projects.map((project: ValidatedProject, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-200 hover:-translate-y-2 break-inside-avoid mb-8 flex flex-col"
                onClick={() => router.push(`/projects/${project.id}`)}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5
                }}
              >
                {/* 썸네일 이미지 */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.images ? (
                    <>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-gray-800/50 flex flex-col items-center justify-center p-8">
                      <FaImage className="w-16 h-16 text-purple-300 dark:text-purple-600 mb-4" />
                      <p className="text-purple-500 dark:text-purple-400 text-lg font-medium text-center">
                        No Preview Available
                      </p>
                    </div>
                  )}
                </div>

                {/* 프로젝트 정보 */}
                <div className="flex flex-col h-full p-6">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 기술 스택 태그 */}
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.techStack).flatMap(([category, techs]) =>
                        techs.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 
                              text-purple-600 dark:text-purple-400 font-medium"
                          >
                            {tech}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* 링크 버튼 */}
                  {(project.github || project.demo) && (
                    <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <FaGithub size={20} />
                          <span className="text-sm font-medium">GitHub</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <FaRocket size={20} />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Projects;
