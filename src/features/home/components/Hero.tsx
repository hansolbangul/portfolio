"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center relative"
    >
      <motion.div
        className="text-center"
        style={{
          perspective: "1000px",
          rotateX,
          rotateY,
        }}
      >
        <div
          className={`text-6xl md:text-8xl font-bold mb-6 text-gray-800 dark:text-white`}
        >
          <div className="flex">
            {"안녕하세요".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
          <div className="flex mt-4">
            {[..."지한솔입니다"].map((char, index) => (
              <span key={index} className={index < 3 ? "text-purple-600" : ""}>
                {char}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Software Engineer
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className={`px-6 py-3 rounded-full transition-all bg-purple-100 text-purple-700 hover:bg-purple-200`}
          >
            자세히 보기
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
