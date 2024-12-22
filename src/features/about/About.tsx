"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  FaTools,
  FaUsers,
  FaRocket,
  FaBriefcase,
  FaCalendar,
  FaBuilding,
  FaUser,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SectionLayout } from "@/shared/components/layout/SectionLayout";
import { IconType } from "react-icons";

const introductions = [
  {
    title: "개발자를 위한 개발자",
    icon: <FaTools className="w-8 h-8" />,
    content: `개발자 경험(DX)의 혁신을 추구하는 엔지니어입니다. 초기 개발 단계부터 현재까지 다양한 멘토링을 통해 성장해왔으며, 이제는 그 경험을 바탕으로 개발자를 위한 도구와 환경을 개선하는데 집중하고 있습니다. Next.js 정적 경로 타입 생성기 'generate-router'를 개발하는 등 개발 생산성 향상을 위한 도구 개발에 주력하고 있으며, 패키지 매니저 최적화와 번들링 개선 등 전반적인 개발 환경 개선에 깊은 관심을 가지고 있습니다.`,
  },
  {
    title: "소통하는 개발자",
    icon: <FaUsers className="w-8 h-8" />,
    content: `지식 공유와 커뮤니티 성장에 열정을 가진 개발자입니다. 대학 1학년부터 강의실 조교와 초등학교 코딩 교육 봉사를 통해 100시간 이상의 교육 경험을 쌓았습니다. 특히 스크래치를 활용한 코딩 교육을 통해 프로그래밍의 기초를 효과적으로 전달하는 방법을 터득했습니다. 더 나아가 교육 동아리를 직접 설립하여 교육자 양성 프로그램을 운영하고, 여러 초등학교와의 협력을 통해 더 많은 개발자들에게 교육 기회를 제공했습니다.`,
  },
  {
    title: "끊임없이 성장하는 개발자",
    icon: <FaRocket className="w-8 h-8" />,
    content: `소프트웨어의 지속적인 발전과 혁신을 추구합니다. 모든 소프트웨어에는 생명주기가 있다는 믿음 하에, 지속적인 리팩토링과 기술 스택 현대화를 통해 소프트웨어의 가치를 극대화하고 있습니다. 새로운 기술과 방법론을 습득하는 것을 두려워하지 않으며, 코드의 유연성과 확장성을 항상 고려하여 개발합니다. 변화하는 기술 환경에 능동적으로 대응하며, 더 나은 솔루션을 찾아 끊임없이 발전하고 있습니다.`,
  },
];

const workExperience = [
  {
    company: "에이피알",
    position: "Frontend Engineer",
    period: "2023.07 - 현재",
    description:
      "메디큐브/포맨트 도산 스토어 장바구니 웹앱, 메디큐브 피부진단 서비스, 포토그레이 웹앱/어드민 등 다수의 프로젝트를 성공적으로 완수했습니다. 프론트엔드 개발 환경 개선과 코드 품질 향상에 주력했습니다.",
    achievements: [
      "에이피알 포토그레이 전반적인 웹 프론트엔드 개발을 담당.",
      "비즈니스 로직과 뷰 로직, 중복된 코드 분리 등의 리팩터링을 주도적으로 담당.",
      "Jest, Cypress등 코드의 퀄리티를 높이는 작업을 진행.",
      "코드리뷰, Frontend 스터디를 주도적으로 운영.",
    ],
  },
  {
    company: "에임드",
    position: "Frontend Engineer",
    period: "2022.06 - 2023.07",
    description:
      "레거시 코드 마이그레이션 TF팀의 프론트엔드 리드를 맡아 성공적으로 프로젝트를 완수했습니다. 코드 리뷰 문화를 도입하고 팀의 기술적 성장을 이끌었으며, 웹 성능 최적화를 통해 사용자 경험을 크게 개선했습니다.",
    achievements: [
      "외주사 레거시 코드를 내제화하는 마이그레이션 TF 팀 FE 리드를 담당.",
      "비동기 호출을 통해 웹 뷰의 로드 시간 등 속도 개선 작업을 담당.",
      "코드리뷰 문화를 도입하며 사내 기술 증진을 적극적으로 장려.",
      "팀원의 일정관리 및 업무 스케줄을 조율.",
    ],
  },
  {
    company: "지농",
    position: "Frontend/Backend Engineer",
    period: "2021.07 - 2022.05",
    description:
      "스마트팜 제어 시스템 개발 및 회사 홈페이지 구축을 담당했습니다. 풀스택 개발자로서 프론트엔드와 백엔드를 아우르는 개발 경험을 쌓았습니다.",
    achievements: [
      "스마트팜 솔루션 서비스 개발의 서브역할을 담당.",
      "node와 vue를 활용한 웹 풀스택 개발을 진행.",
      "농장 별 네이버 클라우드 서버 29대를 직접 관리.",
      "서버의 상태 알림, 농장 상태 알림 등의 자동화 서비스 구현.",
    ],
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionLayout title="About Me" icon={FaUser}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div
            className="relative group w-full md:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden transform transition-transform group-hover:scale-105 h-[400px] w-full">
              <Image
                src="/images/profile.jpeg"
                alt="Profile"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              About Me
            </motion.h2>
            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              <TypeAnimation
                style={{
                  fontWeight: 700,
                }}
                sequence={[
                  "혁신적인 개발자 경험을 만들어가는 소프트웨어 엔지니어입니다.",
                  2000,
                  "개발자 경험을 중시하는 DX 개발자입니다.",
                  2000,
                  "유저의 피드백으로 성장하는 애자일한 개발자입니다.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {introductions.map((intro, index) => (
            <motion.div
              key={index}
              style={{ y, opacity }}
              className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="md:w-1/3 flex flex-col items-start"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-purple-600 dark:text-purple-400">
                    {intro.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {intro.title}
                  </h3>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="md:w-2/3"
              >
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {intro.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-purple-200 dark:before:bg-purple-900"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 -translate-x-[3px]" />

                <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                      <FaBuilding className="text-purple-600 dark:text-purple-400" />
                      {work.company}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaCalendar />
                      {work.period}
                    </div>
                  </div>

                  <h4 className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                    {work.position}
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {work.description}
                  </p>

                  <ul className="space-y-2">
                    {work.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default About;
