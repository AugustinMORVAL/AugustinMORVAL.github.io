import type { SKILLS } from "@/data/skills-data";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Array<{ name: keyof typeof SKILLS }>;
    backend: Array<{ name: keyof typeof SKILLS }>;
    database: Array<{ name: keyof typeof SKILLS }>;
  };
  live: string;
  github?: string;
  features: string[];
}

