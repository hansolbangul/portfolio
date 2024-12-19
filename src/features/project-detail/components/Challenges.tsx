"use client";

import type { ValidatedProject } from "@/data/projects";
import ScrollReveal from "@/shared/components/animations/motion/ScrollReveal";

interface ChallengesProps {
  project: ValidatedProject;
}

export default function Challenges({ project }: ChallengesProps) {
  return (
    <ScrollReveal>
      <div className="p-8 rounded-xl mb-12 bg-white dark:bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
          Challenges & Solutions
        </h2>
        <div className="space-y-12">
          {project.challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 w-4 h-4 -translate-x-[9px] rounded-full border-2 bg-white dark:bg-gray-800 border-blue-500 dark:border-blue-400" />

              <div className="space-y-6">
                {/* Problem Section */}
                <div className="p-6 rounded-lg bg-red-50 dark:bg-red-900/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-red-800 dark:text-red-300">
                    <span className="w-2 h-2 rounded-full bg-current" />
                    Problem
                  </h3>
                  <p className="text-red-700 dark:text-red-200">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-800 dark:text-green-200">
                    <span className="w-2 h-2 rounded-full bg-current" />
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {Array.isArray(challenge.solutions) ? (
                      challenge.solutions.map((solution, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-green-700 dark:text-green-200"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                          <p>{solution}</p>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2 text-green-700 dark:text-green-200">
                        <span className="mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                        <p>{challenge.solutions}</p>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Learned Section */}
                <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <span className="w-2 h-2 rounded-full bg-current" />
                    What I Learned
                  </h3>
                  <ul className="space-y-2">
                    {Array.isArray(challenge.learned) ? (
                      challenge.learned.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-blue-700 dark:text-blue-200"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                          <p>{item}</p>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2 text-blue-700 dark:text-blue-200">
                        <span className="mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                        <p>{challenge.learned}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Last item border fix */}
              {index === project.challenges.length - 1 && (
                <div
                  className="absolute left-[-2px] bottom-0 w-0.5 h-12 bg-white dark:bg-gray-800"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
