"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import FadeIn from "@/shared/components/animations/motion/FadeIn";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";
import HoverScale from "@/shared/components/animations/motion/HoverScale";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "AWS",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const About = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 2 + 2,
    }));
    setParticles(newParticles);

    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Floating Particles */}
      {theme === "dark" &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-4">
              <h3
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                }`}
              >
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                안녕하세요! 저는 웹 개발자 지한솔입니다. 사용자 경험을 중시하며,
                아름답고 직관적인 웹 애플리케이션을 만드는 것을 좋아합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                새로운 기술을 배우고 적용하는 것을 즐기며, 팀과 협업하여 문제를
                해결하는 것을 좋아합니다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-4">
              <h3
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                }`}
              >
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <HoverScale key={skill}>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === "light"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-purple-900/30 text-purple-300"
                      }`}
                    >
                      {skill}
                    </span>
                  </HoverScale>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-12 p-6 rounded-lg bg-opacity-50 space-y-4">
            <h3
              className={`text-xl font-semibold ${
                theme === "light" ? "text-gray-700" : "text-gray-200"
              }`}
            >
              What I Do
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              저는 React와 Next.js를 주로 사용하여 웹 애플리케이션을 개발합니다.
              사용자 중심의 인터페이스 설계와 최적화된 성능을 위해 노력하며,
              지속적인 학습을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
