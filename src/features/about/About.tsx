"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaTools,
  FaUsers,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
  FaCalendar,
  FaUser,
} from "react-icons/fa";
import { SectionLayout } from "@/shared/components/layout/SectionLayout";

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
    shortDescription: [
      "메디큐브/포맨트 도산 스토어 장바구니 웹앱 개발",
      "메디큐브 피부진단 서비스 개발",
      "포토그레이 웹앱/어드민 개발",
      "프론트엔드 개발 환경 개선 및 코드 품질 향상",
    ],
    keyProjects: [
      {
        name: "포토그레이 웹앱/어드민",
        details: [
          "웹과 앱 간의 통신을 위해 WebViewController.runJavaScript를 활용한 데이터 연동 구현",
          "SSR과 React-Query의 PreFetch를 통해 초기 로딩 시간을 단축하고 상태 관리 효율화",
          "Jest와 Cypress를 활용한 유닛 테스트 및 E2E 테스트 자동화 구축",
          "Sentry를 활용한 서비스의 실시간 에러 모니터링 및 빠른 이슈 대응 체계 구축",
        ],
      },
      {
        name: "메디큐브/포맨트 도산 스토어",
        details: [
          "모바일 전용의 단일 웹 애플리케이션으로 개발, 앱과 유사한 라우팅 제공",
          "Framer-Motion을 활용한 라우트 전환 애니메이션으로 유연한 페이지 이동 경험 제공",
          "서버리스 환경 구축을 위해 Amplify와 DynamoDB를 활용하여 간단한 상품 등록, 삭제, 조회 기능 개발",
        ],
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "Amplify",
      "DynamoDB",
      "TypeScript",
      "React Query",
      "zustand",
      "Styled-Components",
      "Chart.js",
      "Jest",
      "React Testing Library",
      "MSW",
      "i18n",
    ],
    achievements: [
      {
        title: "개발 생산성 향상",
        description:
          "코드 리뷰 프로세스 개선 및 팀 내 테스트 코드 작성 문화 정착",
      },
      {
        title: "개발자 경험 향상",
        description: "generate-router등을 활용한 내부 CLI 라이브러리 개발",
      },
    ],
  },
  {
    company: "에임드",
    position: "Frontend Engineer",
    period: "2022.06 - 2023.07",
    shortDescription: [
      "레거시 코드 마이그레이션 TF팀 프론트엔드 리드",
      "코드 리뷰 문화 도입 및 팀 기술 성장 주도",
      "웹 성능 최적화를 통한 사용자 경험 개선",
      "팀 일정 관리 및 업무 조율",
    ],
    keyProjects: [
      {
        name: "피리마켓 외주 레거시 코드 마이그레이션",
        details: [
          "Vue + jQuery에서 React로의 마이그레이션 전략 수립 및 실행",
          "점진적 마이그레이션을 위한 하이브리드 아키텍처 설계",
          "이미지 압축을 통해 상태 관리 효율화 및 성능 개선",
          "LightHouse 성능 점수를 36%에서 80%로 개선",
        ],
      },
    ],
    techStack: ["Vue.js", "Recoil", "jQuery", "React", "Styled-components"],
    achievements: [
      {
        title: "성능 개선",
        description: "초기 로딩 시간을 6초에서 1.2초로 단축 (80% 개선)",
      },
      {
        title: "퍼블리싱",
        description: "에임드 홈페이지 및 트라이베카 홈페이지 퍼블리싱",
      },
    ],
  },
  {
    company: "지농",
    position: "Frontend/Backend Engineer",
    period: "2021.07 - 2022.05",
    shortDescription: [
      "스마트팜 제어 시스템 개발",
      "회사 홈페이지 구축",
      "풀스택 개발 및 서버 관리",
      "자동화 시스템 구축",
    ],
    keyProjects: [
      {
        name: "스마트팜 제어 시스템",
        details: [
          "Vue.js와 Node.js를 활용한 실시간 모니터링 시스템 구축",
          "네이버 클라우드 서버 29대 운영 및 모니터링 시스템 구축",
        ],
      },
      {
        name: "알림 자동화 시스템",
        details: [
          "Node.js 기반 서버 상태 모니터링 및 알림 시스템 구축",
          "농장 환경 데이터 분석 및 이상 징후 감지 시스템 개발",
          "Slack과 Email을 통한 다중 채널 알림 시스템 구현",
        ],
      },
    ],
    techStack: ["Vue.js", "Node.js", "Express", "React", "Styled-components"],
    achievements: [
      {
        title: "시스템 안정성",
        description: "24/7 모니터링 시스템 구축으로 장애 대응 시간 80% 단축",
      },
      {
        title: "운영 효율화",
        description: "자동화된 알림 시스템으로 운영 인력 50% 절감",
      },
    ],
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedWork, setExpandedWork] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionLayout id="about" title="About Me" icon={FaUser}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Hero Section */}
        <div className="min-h-[40vh] flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-48 md:w-72 aspect-square"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-[32px] blur opacity-30 group-hover:opacity-40 animate-pulse" />
            <div className="relative h-full rounded-[30px] overflow-hidden ring-1 ring-purple-100 dark:ring-purple-900/30 bg-white dark:bg-gray-900">
              <Image
                src="/images/profile.jpeg"
                alt="Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 192px, 288px"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed whitespace-pre-line">
              혁신적인 개발자 경험을 만들어가는{"\n"}소프트웨어 엔지니어입니다.
            </h1>
          </motion.div>
        </div>

        {/* Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {introductions.map((intro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg shadow-purple-100 dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {intro.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {intro.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {intro.content
                    .split(". ")
                    .filter(Boolean)
                    .map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover/item:bg-purple-500 transition-colors duration-300" />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {point.endsWith(".") ? point : point + "."}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
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
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900" />

            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                className="relative md:pl-24"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[29px] top-5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 border-4 border-white dark:border-gray-900" />

                <div
                  className={`bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all
                    ${expandedWork === index ? "ring-2 ring-purple-400" : ""}`}
                >
                  {/* Header - Always visible */}
                  <div
                    className="p-4 md:p-6 cursor-pointer"
                    onClick={() =>
                      setExpandedWork(expandedWork === index ? null : index)
                    }
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {work.company}
                          </h3>
                          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                            {work.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <FaCalendar className="w-4 h-4" />
                          <span>{work.period}</span>
                        </div>
                        {expandedWork === index ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {work.shortDescription.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                              {desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {work.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs md:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false} mode="wait">
                    {expandedWork === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="p-6 space-y-6">
                          {/* Key Projects */}
                          <div className="space-y-4">
                            {work.keyProjects.map((project, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-4"
                              >
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                  {project.name}
                                </h4>
                                <ul className="space-y-2">
                                  {project.details.map((detail, detailIdx) => (
                                    <li
                                      key={detailIdx}
                                      className="flex items-start gap-3"
                                    >
                                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                                        {detail}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {work.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-4"
                              >
                                <h5 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                                  {achievement.title}
                                </h5>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                  {achievement.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
