"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaCalendar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useRef } from "react";

const experiences = [
  {
    title: "대학교 조교 및 조교장",
    type: "education",
    period: "2021.03 - 2022.06",
    description:
      "컴퓨터공학과에서 C언어 프로그래밍 과목의 조교와 조교장을 역임하며 후배들의 성장을 도왔습니다. 체계적인 커리큘럼 관리와 학생들과의 원활한 소통을 통해 교육의 질을 향상시켰습니다.",
    achievements: [
      "C언어 프로그래밍 실습 수업 보조 및 학생 지도",
      "과제 채점 및 피드백 제공",
      "조교 업무 총괄 및 조교진 관리",
    ],
    images: [
      "/images/teaching/teaching-1.jpg",
      "/images/teaching/teaching-2.jpg",
    ],
    color: "purple",
  },
  {
    title: "코딩 교육 봉사",
    type: "volunteer",
    period: "2020.09 - 2022.12",
    description:
      "초등학생들을 대상으로 약 100시간의 코딩 교육 봉사를 진행했습니다. 스크래치를 활용한 기초 프로그래밍 교육을 통해 학생들의 컴퓨팅 사고력 향상에 기여했습니다.",
    achievements: [
      "스크래치를 활용한 기초 프로그래밍 교육",
      "학생 맞춤형 교육 자료 제작",
      "교육 동아리 설립 및 운영",
    ],
    color: "blue",
  },
  {
    title: "알고리즘 스터디 운영",
    type: "education",
    period: "2021.03 - 2022.02",
    description:
      "교내 알고리즘 스터디를 운영하며 코딩 테스트 준비와 문제 해결 능력 향상을 도왔습니다. 주간 모임을 통해 알고리즘 학습과 코드 리뷰를 진행했습니다.",
    achievements: [
      "알고리즘 문제 해설 및 코드 리뷰",
      "주간 스터디 커리큘럼 기획",
      "팀원들의 코딩 테스트 합격률 향상",
    ],
    color: "green",
  },
];

const gradients = {
  purple: "from-purple-500 to-pink-500",
  blue: "from-blue-500 to-cyan-500",
  green: "from-green-500 to-emerald-500",
};

const icons = {
  education: FaChalkboardTeacher,
  volunteer: FaHandsHelping,
};

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const scale = useTransform(scrollXProgress, [0, 1], [0.8, 1]);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-800 dark:text-white flex items-center justify-center gap-4"
          >
            <FaGraduationCap className="text-purple-600 dark:text-purple-400" />
            Experiences
          </motion.h2>

          <div
            ref={containerRef}
            className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex gap-6 min-w-max">
              {experiences.map((exp, index) => {
                const Icon = icons[exp.type as keyof typeof icons];
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="w-[400px] bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    {exp.images ? (
                      <div className="relative h-64 overflow-hidden">
                        <Swiper
                          effect="coverflow"
                          grabCursor={true}
                          centeredSlides={true}
                          slidesPerView={1}
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
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        >
                          {exp.images.map((image, i) => (
                            <SwiperSlide key={i} className="w-full h-full">
                              <div className="relative w-full h-full">
                                <Image
                                  src={image}
                                  alt={exp.title}
                                  fill
                                  className="object-cover"
                                  sizes="400px"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    ) : (
                      <div className="relative h-64 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            gradients[exp.color as keyof typeof gradients]
                          } opacity-10`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <motion.div
                              className="absolute -inset-4 opacity-20 blur-xl bg-gradient-to-br from-white to-transparent"
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            <Icon className="w-24 h-24 text-gray-400 dark:text-gray-600" />
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <div className="grid grid-cols-3 gap-8">
                            {[...Array(9)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-4 h-4 rounded-full bg-gradient-to-br ${
                                  gradients[exp.color as keyof typeof gradients]
                                }`}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-8 space-y-4">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                          <Icon
                            className={`text-${exp.color}-600 dark:text-${exp.color}-400`}
                          />
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">
                          <FaCalendar />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-${exp.color}-600 dark:bg-${exp.color}-400`}
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
