"use client";

import { useTheme } from "@/context/ThemeContext";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface TechStackProps {
  project: ValidatedProject;
}

export default function TechStack({ project }: TechStackProps) {
  const { theme } = useTheme();
  const techStackEntries = Object.entries(project.techStack).filter(
    ([_, values]) => values.length > 0
  );

  return (
    <ScrollReveal>
      <div
        className={`p-8 rounded-xl mb-12 ${
          theme === "light" ? "bg-white shadow-lg" : "bg-gray-800"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Tech Stack
        </h2>
        <div className="space-y-4">
          {techStackEntries.map(([category, technologies]) =>
            technologies.length > 0 && (
              <div key={category} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {category}
                  </span>
                  <div
                    className={`flex-1 h-px ${
                      theme === "light" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={`${category}-${tech}`}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        theme === "light"
                          ? "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                          : "bg-gray-900 text-gray-300 border border-gray-700 hover:bg-blue-900/30 hover:text-blue-400 hover:border-blue-800"
                      }`}
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
    </ScrollReveal>
  );
}
