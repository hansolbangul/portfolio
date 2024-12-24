"use client";

import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface TechStackProps {
  project: ValidatedProject;
}

export default function TechStack({ project }: TechStackProps) {
  const techStackEntries = Object.entries(project.techStack).filter(
    ([_, values]) => values.length > 0
  );

  return (
    <>
      <div className="p-8 rounded-xl mb-12 bg-white dark:bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Tech Stack
        </h2>
        <div className="space-y-4">
          {techStackEntries.map(([category, technologies]) =>
            technologies.length > 0 && (
              <div key={category} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
