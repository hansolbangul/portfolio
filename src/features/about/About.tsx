"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useRef } from "react";

const introductions = [
  {
    title: "개발자를 위한 개발자",
    content: `개발자 경험(DX)의 혁신을 추구하는 엔지니어입니다. 초기 개발 단계부터 현재까지 다양한 멘토링을 통해 성장해왔으며, 이제는 그 경험을 바탕으로 개발자를 위한 도구와 환경을 개선하는데 집중하고 있습니다. Next.js 정적 경로 타입 생성기 'generate-router'를 개발하는 등 개발 생산성 향상을 위한 도구 개발에 주력하고 있으며, 패키지 매니저 최적화와 번들링 개선 등 전반적인 개발 환경 개선에 깊은 관심을 가지고 있습니다.`,
  },
  {
    title: "소통하는 개발자",
    content: `지식 공유와 커뮤니티 성장에 열정을 가진 개발자입니다. 대학 1학년부터 강의실 조교와 초등학교 코딩 교육 봉사를 통해 100시간 이상의 교육 경험을 쌓았습니다. 특히 스크래치를 활용한 코딩 교육을 통해 프로그래밍의 기초를 효과적으로 전달하는 방법을 터득했습니다. 더 나아가 교육 동아리를 직접 설립하여 교육자 양성 프로그램을 운영하고, 여러 초등학교와의 협력을 통해 더 많은 개발자들에게 교육 기회를 제공했습니다.`,
  },
  {
    title: "끊임없이 성장하는 개발자",
    content: `소프트웨어의 지속적인 발전과 혁신을 추구합니다. 모든 소프트웨어에는 생명주기가 있다는 믿음 하에, 지속적인 리팩토링과 기술 스택 현대화를 통해 소프트웨어의 가치를 극대화하고 있습니다. 새로운 기술과 방법론을 습득하는 것을 두려워하지 않으며, 코드의 유연성과 확장성을 항상 고려하여 개발합니다. 변화하는 기술 환경에 능동적으로 대응하며, 더 나은 솔루션을 찾아 끊임없이 발전하고 있습니다.`,
  },
];

export default function About() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-md mx-auto"
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
              className={`text-4xl font-bold mb-6 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-lg ${
                theme === "light" ? "text-gray-800" : "text-gray-300"
              }`}
            >
              혁신적인 개발자 경험을 만들어가는 소프트웨어 엔지니어입니다.
            </motion.p>
          </div>
        </div>

        <div className="space-y-16">
          {introductions.map((intro, index) => (
            <motion.div
              key={index}
              style={{ y, opacity }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <h3
                  className={`text-2xl font-bold ${
                    theme === "light" ? "text-purple-600" : "text-purple-400"
                  }`}
                >
                  {intro.title}
                </h3>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="md:w-2/3"
              >
                <p
                  className={`text-lg leading-relaxed ${
                    theme === "light" ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {intro.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
