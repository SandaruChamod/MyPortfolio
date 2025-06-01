export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools" | "ai";
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  technologies: string[];
  image: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface OpenSourceProject {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  tags: string[];
}

export interface Experience {
  company: string;
  location: string;
  positions: {
    title: string;
    period: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  achievements?: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
}