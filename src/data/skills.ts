import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML/CSS/SCSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue", category: "frontend" },
  
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Python", category: "backend" },
  { name: ".NET", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  
  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Android", category: "mobile" },
  { name: "Swift", category: "mobile" },
  
  // Tools & Technologies
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Jenkins", category: "tools" },
  { name: "SonarQube", category: "tools" },
  
  // AI Tools
  { name: "Copilot", category: "ai" },
  { name: "Bolt.new", category: "ai" },
  { name: "ChatGPT", category: "ai" },
  { name: "Deepseek", category: "ai" }
];

export const groupedSkills = {
  frontend: skills.filter(skill => skill.category === "frontend"),
  backend: skills.filter(skill => skill.category === "backend"),
  mobile: skills.filter(skill => skill.category === "mobile"),
  tools: skills.filter(skill => skill.category === "tools"),
  ai: skills.filter(skill => skill.category === "ai")
};