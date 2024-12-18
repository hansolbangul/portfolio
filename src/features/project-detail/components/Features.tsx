"use client";

import { useTheme } from "@/context/ThemeContext";
import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface FeaturesProps {
  project: ValidatedProject;
}

export default function Features({ project }: FeaturesProps) {
  const { theme } = useTheme();

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
          Key Features
        </h2>
        <ul className="space-y-3">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
              <span
                className={
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
