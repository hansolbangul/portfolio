"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Balloon from "./background/Balloon";

const STAR_COUNT = 100; // 별 개수 줄임
const CLOUD_COUNT = 8;
const BALLOON_COUNT = 3;

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

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Canvas 크기 설정
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 별들의 초기 위치와 속성 설정
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5, // 별 크기 조정
      opacity: Math.random() * 0.3 + 0.2, // 별 밝기 조정
      speed: Math.random() * 0.001 + 0.0005 // 깜박임 속도 조정
    }));

    // 유성 배열
    let shootingStars: Array<{
      startX: number;
      startY: number;
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    // 새로운 유성 생성
    const createShootingStar = () => {
      if (shootingStars.length < 2) { // 최대 2개로 제한
        const startX = Math.random() * (canvas.width * 0.8); // 화면 왼쪽 80% 영역에서 시작
        const startY = Math.random() * (canvas.height * 0.3); // 상단 30% 영역에서 시작
        shootingStars.push({
          startX,
          startY,
          x: startX,
          y: startY,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 4 + 3,
          opacity: 1
        });
      }
    };

    // 주기적으로 유성 생성 (간격 늘림)
    setInterval(createShootingStar, 4000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 별 그리기
      stars.forEach(star => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 부드러운 깜박임 효과
        star.opacity = 0.2 + Math.sin(Date.now() * star.speed) * 0.1;
      });

      // 유성 그리기 및 업데이트
      shootingStars = shootingStars.filter(star => {
        // 유성 이동 (대각선으로)
        star.x += star.speed;
        star.y += star.speed * 0.7; // y축 이동 속도를 약간 줄여서 더 자연스러운 각도로

        // 유성 그리기
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.length, star.y - star.length * 0.7
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length * 0.7);
        ctx.stroke();

        // 흔적 효과
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.moveTo(star.x + 1, star.y + 1);
        ctx.lineTo(star.x - star.length * 0.3, star.y - (star.length * 0.3 * 0.7));
        ctx.stroke();

        star.opacity -= 0.02;

        // 화면을 벗어나거나 투명해지면 제거
        return star.opacity > 0 && star.x < canvas.width + star.length && star.y < canvas.height + star.length;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default function Background() {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
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

  // Initialize balloons
  useEffect(() => {
    if (theme === "light") {
      const colors = ["#FFB5B5", "#B5FFB5", "#B5B5FF", "#FFFFB5", "#FFB5FF"];
      const initialBalloons = Array.from({ length: BALLOON_COUNT }).map((_, index) => ({
        id: index,
        x: -(Math.random() * 15 + 15),
        y: Math.random() * 60 + 5,
        scale: Math.random() * 0.2 + 0.2,
        delay: Math.random() * 3,
        color: colors[index % colors.length],
      }));
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
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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
          <StarField />
        </div>
      )}
    </div>
  );
}
