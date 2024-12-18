"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/shared/hooks/useIntersectionObserver";
import { useTheme } from "@/context/ThemeContext";

interface ProjectVideoProps {
  src: string;
  title: string;
}

export default function ProjectVideo({ src, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPiP, setIsPiP] = useState(false);
  const [isPipDisabled, setIsPipDisabled] = useState(false);
  const { theme } = useTheme();

  const { isIntersecting } = useIntersectionObserver(containerRef, {
    threshold: 0,
    rootMargin: "-50% 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!isIntersecting && !isPiP && !isPipDisabled) {
        setIsPiP(true);
      } else if (isIntersecting && isPiP) {
        setIsPiP(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIntersecting, isPiP, isPipDisabled]);

  const handleClosePiP = () => {
    setIsPiP(false);
    setIsPipDisabled(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden mb-12"
    >
      <div
        className={`${
          isPiP
            ? "fixed bottom-4 right-4 w-[320px] aspect-video z-50 rounded-lg shadow-lg"
            : "relative w-full h-full"
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          title={title}
          className="w-full h-full object-cover rounded-lg"
          controls
          autoPlay
          muted
          loop
        />
        {isPiP && (
          <button
            onClick={handleClosePiP}
            className={`absolute top-2 right-2 z-50 p-1.5 rounded-full shadow-lg transition-colors ${
              theme === "dark"
                ? "bg-gray-800/80 hover:bg-gray-800 text-white"
                : "bg-white/80 hover:bg-white text-gray-800"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
