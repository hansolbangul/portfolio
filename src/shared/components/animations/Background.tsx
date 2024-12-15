"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Balloon from "./background/Balloon";

const STAR_COUNT = 200;
const CLOUD_COUNT = 8;
const BALLOON_COUNT = 3;

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

interface Balloon {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
  color: string;
}

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const { theme } = useTheme();

  // Initialize clouds
  useEffect(() => {
    const initialClouds = Array.from({ length: CLOUD_COUNT }).map(
      (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 30 + 10,
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.02 + 0.01,
        opacity: Math.random() * 0.3 + 0.7,
      })
    );
    setClouds(initialClouds);

    const moveCloud = () => {
      setClouds((prevClouds) =>
        prevClouds.map((cloud) => ({
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
      duration: Math.random() * 3 + 2,
    }));
    setStars(initialStars);

    // Shooting stars interval
    let nextId = 0;
    const interval = setInterval(() => {
      const newShootingStar = {
        id: nextId++,
        width: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 50,
      };

      setShootingStars((prev) => [...prev, newShootingStar]);
      setTimeout(() => {
        setShootingStars((prev) =>
          prev.filter((star) => star.id !== newShootingStar.id)
        );
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Initialize balloons
  useEffect(() => {
    if (theme === "light") {
      const colors = ["#FFB5B5", "#B5FFB5", "#B5B5FF", "#FFFFB5", "#FFB5FF"];
      const initialBalloons = Array.from({ length: BALLOON_COUNT }).map(
        (_, index) => ({
          id: index,
          x: -(Math.random() * 15 + 15), // 화면 가까이서 시작
          y: Math.random() * 60 + 5, // 더 넓은 범위에 분포
          scale: Math.random() * 0.2 + 0.2, // 0.2 ~ 0.4 사이의 더 작은 크기
          delay: Math.random() * 3, // 시작 시간 간격 줄임
          color: colors[index % colors.length],
        })
      );
      setBalloons(initialBalloons);
    }
  }, [theme]);

  return (
    <div className="fixed inset-0 -z-10">
      {theme === "light" ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF]">
          {/* Sun */}
          <div className="absolute top-[10%] right-[20%] w-32 h-32 z-0">
            <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-20 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-yellow-400 opacity-30 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-yellow-300 opacity-40 animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-yellow-200 opacity-50" />
          </div>

          {/* Clouds */}
          <div className="absolute inset-0 z-10">
            <svg className="w-full h-full">
              {clouds.map((cloud) => (
                <motion.path
                  key={cloud.id}
                  d="M 25,60 
                     Q 40,45 50,60 
                     Q 60,45 75,60 
                     Q 85,45 100,60 
                     L 100,80 
                     L 25,80 Z"
                  className="fill-white/80"
                  initial={{ x: `${cloud.x}%`, y: `${cloud.y}%` }}
                  animate={{ x: [`${cloud.x}%`, `${cloud.x + 100}%`] }}
                  transition={{
                    duration: 100 / cloud.speed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    scale: cloud.scale,
                    opacity: cloud.opacity,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Balloons */}
          <div className="absolute inset-0 z-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {balloons &&
                balloons.map((balloon) => (
                  <Balloon
                    key={balloon.id}
                    x={balloon.x}
                    y={balloon.y}
                    scale={balloon.scale}
                    delay={balloon.delay}
                    color={balloon.color}
                  />
                ))}
            </svg>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2c] via-[#1a1a4a] to-[#2a2a6a]">
          {/* Stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Shooting stars */}
          {shootingStars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute h-px bg-white"
              style={{
                width: `${star.width}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              initial={{ opacity: 0, rotate: 45, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: 100, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
