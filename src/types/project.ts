export interface ProjectDetail {
  title: string;
  period: string;
  team: string;
  role: string;
  description: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
  challenges: {
    problem: string;
    solution: string;
    learned: string;
  }[];
  outcome: {
    achievements: string[];
    improvements: string[];
    future: string[];
  };
  image: string;
  github?: string;
  demo?: string;
}
