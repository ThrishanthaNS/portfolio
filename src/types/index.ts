export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectFeature {
  text: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: ProjectFeature[];
  github: string;
  demo: string;
  image: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface GitHubStat {
  label: string;
  value: string;
  icon: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  href: string;
  icon: string;
}
