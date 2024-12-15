import { projectDetailSchema, type ProjectDetail } from "@/types/schema";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js, featuring a space theme and interactive animations.",
    period: "2023.12 - Present",
    team: "Personal Project",
    role: "Full Stack Developer",
    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      Tools: ["Git", "GitHub"],
    },
    features: [
      "Interactive space-themed background with parallax effect",
      "Full-page scrolling with smooth transitions",
      "Project showcase with modal views",
      "PDF download functionality",
      "Responsive design for all devices"
    ],
    challenges: [
      {
        problem: "Implementing smooth parallax scrolling effect with optimal performance",
        solution: "Used Framer Motion for efficient animation handling and implemented throttling for scroll events",
        learned: "Performance optimization techniques for scroll-based animations and proper state management"
      },
      {
        problem: "Creating a PDF generation system that accurately captures the website's visual style",
        solution: "Implemented a custom PDF generation solution using html2canvas and jsPDF",
        learned: "Advanced PDF generation techniques and handling of complex DOM structures"
      }
    ],
    outcome: {
      achievements: [
        "Created a visually stunning portfolio that effectively showcases projects",
        "Implemented responsive design that works seamlessly across all devices",
        "Achieved optimal performance scores in Lighthouse audits"
      ],
      improvements: [
        "Add more interactive elements to enhance user engagement",
        "Implement dark/light theme switching",
        "Add blog section for technical writing"
      ]
    },
    github: "https://github.com/hansolbangul/portfolio",
    demo: "https://hansolbangul.vercel.app/",
    thumbnail: "/images/portfolio-thumbnail.png"
  }
] as const;

// Validate projects data against schema
export const validatedProjects = projects.map(project => {
  const result = projectDetailSchema.safeParse(project);
  if (!result.success) {
    console.error(`Invalid project data for ${project.title}:`, result.error);
    throw new Error(`Invalid project data for ${project.title}`);
  }
  return result.data;
});

export type ValidatedProject = typeof validatedProjects[number];
