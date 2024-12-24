"use client";

import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface ProjectInfoProps {
  project: ValidatedProject;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Period
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.period}
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Team
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.team}
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Role
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.role}
          </p>
        </div>
      </div>
    </>
  );
}
