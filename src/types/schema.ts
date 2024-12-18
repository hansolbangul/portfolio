import { z } from "zod";

// Tech stack schema
export const techStackSchema = z.record(z.string(), z.array(z.string()));

// Challenge schema
export const challengeSchema = z.object({
  problem: z.string(),
  solutions: z.array(z.string()),
  learned: z.array(z.string()),
});

// Outcome schema
export const outcomeSchema = z.object({
  achievements: z.array(z.string()),
  improvements: z.array(z.string()),
});

// Project detail schema
export const projectDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  period: z.string(),
  team: z.string(),
  role: z.string(),
  techStack: techStackSchema,
  features: z.array(z.string()),
  challenges: z.array(challengeSchema),
  outcome: outcomeSchema,
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  thumbnail: z.string(),
  images: z.array(z.string()).optional(),
});

// Project schema (simplified version for list)
export const projectSchema = projectDetailSchema.pick({
  id: true,
  title: true,
  description: true,
  techStack: true,
  thumbnail: true,
  demo: true,
  images: true,
});

// Portfolio data schema
export const portfolioDataSchema = z.object({
  name: z.string(),
  role: z.string(),
  description: z.string(),
  projects: z.array(projectDetailSchema),
  contact: z.object({
    email: z.string().email(),
    github: z.string().url(),
    linkedin: z.string().url().optional(),
  }),
});

// Infer types from schemas
export type TechStack = z.infer<typeof techStackSchema>;
export type Challenge = z.infer<typeof challengeSchema>;
export type Outcome = z.infer<typeof outcomeSchema>;
export type ProjectDetail = z.infer<typeof projectDetailSchema>;
export type Project = z.infer<typeof projectSchema>;
export type PortfolioData = z.infer<typeof portfolioDataSchema>;
