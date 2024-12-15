'use client';

import { motion } from 'framer-motion';

interface BirdProps {
  x: number;
  y: number;
  scale: number;
  delay: number;
}

export default function Bird({ x, y, scale, delay }: BirdProps) {
  return (
    <motion.path
      d="M 0,0
         Q 5,-12 10,0
         T 20,0
         M 8,-3
         Q 12,-7 16,-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      initial={{ x: `${x}vw`, y: `${y}vh`, scale: 0 }}
      animate={{
        x: [`${x}vw`, `${x + 120}vw`],
        y: [
          `${y}vh`,
          `${y + Math.sin(x) * 3}vh`,
          `${y}vh`,
          `${y - Math.sin(x) * 3}vh`,
          `${y}vh`
        ],
        scale: [scale, scale],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    />
  );
}
