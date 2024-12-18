"use client";

import { useTheme } from "@/context/ThemeContext";
import type { ValidatedProject } from "@/data/projects";
import Image from "next/image";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface ProjectGalleryProps {
  project: ValidatedProject;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const { theme } = useTheme();

  if (!project.images || project.images.length === 0) {
    return null;
  }

  return (
    <ScrollReveal>
      <div
        className={`p-8 rounded-xl ${
          theme === "light" ? "bg-white shadow-lg" : "bg-gray-800"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Project Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
