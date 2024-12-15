"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import ProjectModal from "./ProjectModal";
import type { ProjectDetail } from "@/types/project";

const projects: ProjectDetail[] = [
  {
    title: "Portfolio Website",
    period: "2023.12 - 2024.01",
    team: "Personal Project",
    role: "Frontend Developer",
    description: "우주를 테마로 한 인터랙티브 포트폴리오 웹사이트입니다. Framer Motion을 활용한 다양한 애니메이션과 인터랙션을 구현했습니다.",
    features: [
      "우주 테마의 인터랙티브 디자인",
      "반응형 레이아웃",
      "스크롤 기반 애니메이션",
      "프로젝트 상세 정보 모달",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: [],
      database: [],
      deployment: ["Vercel"],
    },
    challenges: [
      {
        problem: "SSR과 클라이언트 사이드 애니메이션 충돌",
        solution: "useState와 useEffect를 활용하여 hydration 문제 해결",
        learned: "Next.js의 SSR 동작 방식과 클라이언트 사이드 렌더링의 차이점 이해",
      },
    ],
    outcome: {
      achievements: [
        "Framer Motion을 활용한 부드러운 애니메이션 구현",
        "최적화된 성능 (Lighthouse 점수 90+ 달성)",
      ],
      improvements: [
        "더 많은 인터랙티브 요소 추가",
        "성능 최적화",
      ],
      future: [
        "블로그 섹션 추가",
        "다크/라이트 모드 지원",
      ],
    },
    image: "/project1.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
  },
  // Add more projects here
];

const Projects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project");

  const handleProjectClick = (index: number) => {
    // 현재 URL에 project 쿼리 파라미터만 추가
    const url = new URL(window.location.href);
    url.searchParams.set("project", index.toString());
    window.history.pushState({}, "", url.toString());
    
    // 강제로 리렌더링하여 모달 표시
    router.refresh();
  };

  const handleCloseModal = () => {
    // project 쿼리 파라미터만 제거
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.pushState({}, "", url.toString());
    
    // 강제로 리렌더링
    router.refresh();
  };

  const selectedProject = projectId ? projects[parseInt(projectId)] : null;

  return (
    <section className="relative min-h-screen w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-gray-400">
            Here are some of my recent projects
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative aspect-video w-full md:w-1/2 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>

              <div className="w-full md:w-1/2 space-y-6">
                <motion.h3
                  className="text-4xl font-bold text-white"
                  whileHover={{ x: 10 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p className="text-gray-400">
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={() => handleProjectClick(index)}
                    className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Details
                  </motion.button>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BsGithub className="text-xl" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BsGlobe className="text-xl" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
