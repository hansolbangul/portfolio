"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import type { ValidatedProject } from "@/data/projects";

interface ProjectModalProps {
  project: ValidatedProject;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative h-[90vh] w-[90vw] max-w-6xl overflow-y-auto rounded-lg bg-zinc-900 p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-white hover:text-purple-500"
        >
          <IoClose />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <p className="mt-1 text-zinc-400">{project.period}</p>
            <p className="text-zinc-400">
              {project.team} - {project.role}
            </p>
          </div>

          <p className="text-lg text-white">{project.description}</p>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-purple-500">
              Tech Stack
            </h3>
            {Object.entries(project.techStack).map(
              ([category, techs]) =>
                techs.length > 0 && (
                  <div key={category} className="mb-4">
                    <h4 className="mb-2 text-white">{category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-purple-900 px-3 py-1 text-sm text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-purple-500">
              Key Features
            </h3>
            <ul className="list-inside list-disc space-y-2 text-white">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-purple-500">
              Challenges & Solutions
            </h3>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-purple-400">Problem:</h4>
                  <p className="text-white">{challenge.problem}</p>
                  <h4 className="text-purple-400">Solution:</h4>
                  <p className="text-white">{challenge.solution}</p>
                  <h4 className="text-purple-400">Learned:</h4>
                  <p className="text-white">{challenge.learned}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-purple-500">
              Outcome
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-purple-400">Achievements:</h4>
                <ul className="list-inside list-disc space-y-2 text-white">
                  {project.outcome.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-purple-400">Future Improvements:</h4>
                <ul className="list-inside list-disc space-y-2 text-white">
                  {project.outcome.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-purple-500"
              >
                <BsGithub />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-purple-500"
              >
                <BsGlobe />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
