export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools" | "ai";
}

export interface Project {
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