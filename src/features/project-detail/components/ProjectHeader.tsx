"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import type { ValidatedProject } from "@/data/projects";
import ProjectVideo from "./ProjectVideo";

interface ProjectHeaderProps {
  project: ValidatedProject;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const isVideo = project.thumbnail.endsWith(".mp4");

  return (
    <>
      {/* Hero Section */}
      {isVideo ? (
        <ProjectVideo src={project.thumbnail} title={project.title} />
      ) : (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          {project.title}
        </h1>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub size={20} />
              <span>View Code</span>
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
