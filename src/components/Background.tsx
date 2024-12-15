'use client';

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const STAR_COUNT = 200;
const CLOUD_COUNT = 8;

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

interface Cloud {
  id: number;
  x: number;
  y: number;
  scale: number;
  speed: number;
  opacity: number;
}

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const { theme } = useTheme();

  // Initialize clouds
  useEffect(() => {
    const initialClouds = Array.from({ length: CLOUD_COUNT }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 30 + 10,
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.3 + 0.7,
    }));
    setClouds(initialClouds);

    const moveCloud = () => {
      setClouds(prevClouds =>
        prevClouds.map(cloud => ({
          ...cloud,
          x: cloud.x > 100 ? -20 : cloud.x + cloud.speed,
        }))
      );
    };

    const cloudInterval = setInterval(moveCloud, 50);
    return () => clearInterval(cloudInterval);
  }, []);

  // Initialize stars
  useEffect(() => {
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

  if (theme === 'light') {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF] overflow-hidden">
        {/* Sun */}
        <div className="absolute top-[10%] right-[20%] w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-yellow-300 blur-xl opacity-50" />
          <div className="absolute inset-2 rounded-full bg-yellow-300 blur-md" />
          <div className="absolute inset-4 rounded-full bg-yellow-200" />
        </div>

        {/* Clouds */}
        {clouds.map(cloud => (
          <motion.div
            key={cloud.id}
            className="absolute"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              opacity: cloud.opacity,
            }}
            animate={{
              x: ["0%", "100%"],
            }}
            transition={{
              duration: 100 / cloud.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="relative"
              style={{ transform: `scale(${cloud.scale})` }}
            >
              <div className="absolute bg-white rounded-full w-16 h-16 blur-sm" />
              <div className="absolute bg-white rounded-full w-20 h-20 blur-sm" style={{ left: '15px', top: '-10px' }} />
              <div className="absolute bg-white rounded-full w-16 h-16 blur-sm" style={{ left: '30px', top: '0px' }} />
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

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
