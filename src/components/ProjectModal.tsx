"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import type { ProjectDetail } from "@/types/project";
import { useState } from "react";
import { PDFTemplate } from "./PDFTemplate";
import { pdf } from "@react-pdf/renderer";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  if (!project) return null;

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      const blob = await pdf(<PDFTemplate project={project} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${project.title}_portfolio.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-h-[90vh] w-[90vw] max-w-4xl overflow-y-auto rounded-lg bg-[#0a0a0a] p-6 text-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div id="project-modal-content" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiDownload />
                {isGeneratingPDF ? "Generating..." : "PDF"}
              </button>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-white/10 transition-colors"
              >
                <IoClose size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-400">
                  Period
                </h3>
                <p>{project.period}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">Team</h3>
                <p>{project.team}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">Role</h3>
                <p>{project.role}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 hover:bg-gray-700 transition-colors"
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
                    className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    <BsGlobe />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Description
            </h3>
            <p className="whitespace-pre-wrap">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-400 capitalize mb-1">
                    {category}
                  </h4>
                  <ul className="space-y-1">
                    {techs.map((tech) => (
                      <li key={tech} className="text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Challenges & Solutions
            </h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium text-gray-300">Problem</h4>
                  <p>{challenge.problem}</p>
                  <h4 className="font-medium text-gray-300">Solution</h4>
                  <p>{challenge.solution}</p>
                  <h4 className="font-medium text-gray-300">What I Learned</h4>
                  <p>{challenge.learned}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Outcome
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-300 mb-1">Achievements</h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.outcome.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-300 mb-1">
                  Future Improvements
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.outcome.improvements.map((improvement) => (
                    <li key={improvement}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
