'use client';

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  return (
    <motion.section 
      ref={containerRef}
      className="h-screen flex items-center justify-center relative"
      style={{ y, opacity }}
    >
      <motion.div
        className="text-center perspective-1000"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <motion.h1 
          className={`text-6xl md:text-8xl font-bold mb-6 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          안녕하세요
          <br />
          <span className={theme === "light" ? "text-purple-600" : "text-purple-400"}>
            한솔지
          </span>
          입니다
        </motion.h1>
        <motion.p 
          className={`text-xl md:text-2xl mb-8 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          프론트엔드 개발자
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#about"
            className={`px-6 py-3 rounded-full transition-all ${
              theme === "light"
                ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            자세히 보기
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
