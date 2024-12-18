"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface ProjectHeaderProps {
  project: ValidatedProject;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const { theme } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <h1
          className={`text-4xl font-bold mb-4 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {project.title}
        </h1>
        <p
          className={`text-xl mb-6 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" /> Demo
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
