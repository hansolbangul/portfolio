'use client';

import { motion } from 'framer-motion';

interface BalloonProps {
  x: number;
  y: number;
  scale: number;
  delay: number;
  color: string;
}

export default function Balloon({ x, y, scale, delay, color }: BalloonProps) {
  return (
    <motion.g
      initial={{ x: `${x - 10}%`, y: `${y}%`, scale: 0 }}
      animate={{
        x: [`${x - 10}%`, `${x + 110}%`],
        y: [
          `${y}%`,
          `${y - 3}%`,
          `${y}%`,
          `${y + 3}%`,
          `${y}%`
        ],
        scale: [scale, scale],
      }}
      transition={{
        duration: 25,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      {/* 풍선 본체 */}
      <path
        d="M0,15 
           C0,6.716 6.716,0 15,0 
           C23.284,0 30,6.716 30,15 
           C30,23.284 23.284,30 15,30 
           C6.716,30 0,23.284 0,15"
        fill={color}
        opacity={0.4}
      />
      {/* 풍선 끈 */}
      <path
        d="M15,30 Q13,35 15,40 Q17,35 15,30"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity={0.4}
      />
    </motion.g>
  );
}
