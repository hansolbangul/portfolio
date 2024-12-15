"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ x: 10 }}
              className={`text-xl font-semibold mb-4 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Who am I?
            </motion.h3>
            <motion.p
              whileHover={{ x: 10 }}
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              안녕하세요! 프론트엔드 개발자 지한솔입니다. 사용자 경험을 중요시하며,
              깔끔하고 효율적인 코드 작성을 지향합니다.
            </motion.p>
            <motion.p
              whileHover={{ x: 10 }}
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              새로운 기술을 배우는 것을 좋아하며, 팀과의 협업을 통해 더 나은
              결과물을 만들어내는 것을 즐깁니다.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ x: 10 }}
              className={`text-xl font-semibold mb-4 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Skills
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: Math.random() * 10 - 5,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                  }}
                  className={`px-4 py-2 rounded-full text-sm relative group cursor-pointer ${
                    theme === "light"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-purple-900/50 text-purple-200"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      theme === "light"
                        ? "group-hover:bg-purple-200/50"
                        : "group-hover:bg-purple-700/30"
                    }`}
                  />
                  <span className="relative">{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-semibold mb-4 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            What I Do
          </motion.h3>
          <motion.p
            whileHover={{ y: -5 }}
            className={`max-w-2xl mx-auto ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            웹 애플리케이션 개발에 열정을 가지고 있으며, 사용자 중심의 인터페이스
            구현과 최신 웹 기술 활용에 관심이 많습니다. 또한 성능 최적화와
            접근성 향상을 위해 지속적으로 연구하고 있습니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
