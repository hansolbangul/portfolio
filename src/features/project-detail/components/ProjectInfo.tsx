"use client";

import { useTheme } from "@/context/ThemeContext";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface ProjectInfoProps {
  project: ValidatedProject;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const { theme } = useTheme();

  return (
    <ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div
          className={`p-6 rounded-xl ${
            theme === "light" ? "bg-white shadow-lg" : "bg-gray-800"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-3 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Period
          </h3>
          <p
            className={
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }
          >
            {project.period}
          </p>
        </div>
        <div
          className={`p-6 rounded-xl ${
            theme === "light" ? "bg-white shadow-lg" : "bg-gray-800"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-3 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Team
          </h3>
          <p
            className={
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }
          >
            {project.team}
          </p>
        </div>
        <div
          className={`p-6 rounded-xl ${
            theme === "light" ? "bg-white shadow-lg" : "bg-gray-800"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-3 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Role
          </h3>
          <p
            className={
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }
          >
            {project.role}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
