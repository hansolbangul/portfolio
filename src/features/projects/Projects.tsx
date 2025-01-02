"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaImage,
} from "react-icons/fa";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project: ValidatedProject, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-1 h-full"
                onClick={() => router.push(`/projects/${project.id}`)}
                whileHover={{ scale: 1.01 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5,
                }}
              >
                <div className="flex flex-col h-full">
                  {/* 썸네일 이미지 */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {project.images ? (
                      <>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-gray-800/50 flex flex-col items-center justify-center p-8">
                        <FaImage className="w-12 h-12 text-purple-300 dark:text-purple-600 mb-4" />
                        <p className="text-purple-500 dark:text-purple-400 text-sm font-medium text-center">
                          No Preview Available
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="flex flex-col flex-grow p-5 gap-4">
                    {/* 제목과 설명 */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* 기술 스택 태그 */}
                    <div className="flex-grow">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {Array.from(
                          new Set(
                            Object.entries(project.techStack).flatMap(
                              ([_, techs]) => techs
                            )
                          )
                        ).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 
                              text-purple-600 dark:text-purple-400 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 링크 버튼 */}
                    {(project.github || project.demo) && (
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors text-xs font-medium"
                          >
                            <FaRocket className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors text-xs font-medium"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            <span>View Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
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
