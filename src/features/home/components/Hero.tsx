"use client";

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
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

  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  return (
    <motion.section
      ref={containerRef}
      className="h-screen flex items-center justify-center relative"
      style={{ y, opacity }}
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
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: -500,
                  rotateX: 90,
                  scale: 3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.6,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex mt-4">
            {[..."지한솔입니다"].map((char, index) => (
              <motion.span
                key={index}
                className={
                  index < 3
                    ? "text-purple-600"
                    : ""
                }
                initial={{
                  opacity: 0,
                  y: -500,
                  rotateX: 90,
                  scale: 3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.0 + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.6,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.p
          className={`text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#about"
            className={`px-6 py-3 rounded-full transition-all bg-purple-100 text-purple-700 hover:bg-purple-200`}
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
