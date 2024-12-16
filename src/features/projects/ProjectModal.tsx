"use client";

import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import type { ValidatedProject } from "@/data/projects";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useModal } from "@/hooks/useModal";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProjectModalProps {
  project: ValidatedProject;
  onClose: () => void;
  theme: "light" | "dark";
}

const ProjectModal = ({ project, onClose, theme }: ProjectModalProps) => {
  const router = useRouter();
  useModal({ isOpen: true, onClose });

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div
        className={`h-[90vh] w-[90vw] max-w-6xl overflow-hidden rounded-lg ${
          theme === "light" ? "bg-white" : "bg-zinc-900"
        }`}
      >
        <div className="sticky top-0 z-10 flex justify-end bg-inherit px-8 py-4">
          <button
            onClick={onClose}
            className={`text-2xl hover:text-purple-500 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            <IoClose />
          </button>
        </div>

        <div className="h-[calc(90vh-4rem)] overflow-y-auto px-8 pb-8">
          <div className="space-y-8">
            {/* 프로젝트 헤더 */}
            <div>
              <h2
                className={`text-3xl font-bold ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                {project.title}
              </h2>
              <p
                className={theme === "light" ? "text-gray-600" : "text-zinc-400"}
              >
                {project.period}
              </p>
              <p
                className={theme === "light" ? "text-gray-600" : "text-zinc-400"}
              >
                {project.team} - {project.role}
              </p>
            </div>

            {/* 이미지 갤러리 */}
            {project.images && project.images.length > 0 && (
              <div className="relative w-full h-[400px] my-8">
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="w-full h-full"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index} className="w-[600px]">
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            {/* 프로젝트 설명 */}
            <p
              className={`text-lg ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              {project.description}
            </p>

            {/* 기술 스택 */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-purple-500">
                사용 기술
              </h3>
              {Object.entries(project.techStack).map(
                ([category, techs]) =>
                  techs.length > 0 && (
                    <div key={category} className="mb-4">
                      <h4
                        className={
                          theme === "light" ? "text-gray-800" : "text-white"
                        }
                      >
                        {category}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-3 py-1 text-sm ${
                              theme === "light"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-purple-900 text-purple-200"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>

            {/* 도전 과제 및 해결 방안 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-500">
                프로젝트 과제
              </h3>
              <div className="space-y-8">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className={`relative space-y-4 pl-6 ${
                      index < project.challenges.length - 1 &&
                      "after:absolute after:left-2 after:top-8 after:h-full after:w-0.5 after:bg-purple-200 dark:after:bg-purple-900/50"
                    }`}
                  >
                    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-purple-400 dark:bg-purple-700" />
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-purple-500">문제 상황</h4>
                        <p
                          className={
                            theme === "light" ? "text-gray-700" : "text-gray-300"
                          }
                        >
                          {challenge.problem}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium text-purple-500">
                            해결 방안
                          </h4>
                          <p
                            className={
                              theme === "light"
                                ? "text-gray-700"
                                : "text-gray-300"
                            }
                          >
                            {challenge.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-500">배운 점</h4>
                          <p
                            className={
                              theme === "light"
                                ? "text-gray-700"
                                : "text-gray-300"
                            }
                          >
                            {challenge.learned}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 성과 및 개선점 */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-purple-500">
                  주요 성과
                </h3>
                <ul
                  className={`list-inside list-disc space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {project.outcome.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-purple-500">
                  개선 계획
                </h3>
                <ul
                  className={`list-inside list-disc space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {project.outcome.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 링크 */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 ${
                    theme === "light"
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  <BsGithub className="text-lg" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 ${
                    theme === "light"
                      ? "bg-purple-100 text-purple-600 hover:bg-purple-200"
                      : "bg-purple-900/30 text-purple-300 hover:bg-purple-900/50"
                  }`}
                >
                  <BsGlobe className="text-lg" />
                  데모 보기
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
