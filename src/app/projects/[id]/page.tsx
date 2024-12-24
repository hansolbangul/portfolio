import { getProject } from "@/data/projects";
import { Metadata } from "next";
import ProjectHeader from "@/features/project-detail/components/ProjectHeader";
import ProjectInfo from "@/features/project-detail/components/ProjectInfo";
import TechStack from "@/features/project-detail/components/TechStack";
import Features from "@/features/project-detail/components/Features";
import Challenges from "@/features/project-detail/components/Challenges";
import ProjectGallery from "@/features/project-detail/components/ProjectGallery";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Hansol Ji Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Hansol Ji Portfolio`,
      description: project.description,
      images: project.images ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = getProject((await params).id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ProjectHeader project={project} />
        <ProjectInfo project={project} />
        <TechStack project={project} />
        <Features project={project} />
        <Challenges project={project} />
        <ProjectGallery project={project} />
      </div>
    </div>
  );
}
