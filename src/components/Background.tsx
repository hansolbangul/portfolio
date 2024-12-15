'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const STAR_COUNT = 200;

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
}

interface ShootingStar {
  id: number;
  width: number;
  x: number;
  y: number;
}

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Initialize stars
    const initialStars = Array.from({ length: STAR_COUNT }).map((_, index) => ({
      id: index,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2
    }));
    setStars(initialStars);

    // Shooting stars interval
    let nextId = 0;
    const interval = setInterval(() => {
      const newShootingStar = {
        id: nextId++,
        width: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 50
      };
      
      setShootingStars(prev => [...prev, newShootingStar]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-[#0a0a2c] via-[#1a1a4a] to-[#2a2a6a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute h-px bg-white"
          style={{
            width: `${star.width}px`,
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
          initial={{ opacity: 0, rotate: 45, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: 100, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Nebula */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(123, 31, 162, 0.5), rgba(32, 32, 128, 0.5), transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
}
