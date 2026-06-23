import type {
  NavLink,
  SkillCategory,
  Project,
  Experience,
  Achievement,
  GitHubStat,
  ContactInfo,
} from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [{ name: "Flask" }, { name: "FastAPI" }, { name: "REST APIs" }],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    skills: [
      { name: "OpenCV" },
      { name: "Scikit-Learn" },
      { name: "TensorFlow" },
      { name: "YOLO" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Jira" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Fire Detection & Automatic Water Suppression System",
    description:
      "Developed an intelligent fire detection system using YOLO-based computer vision, temporal validation, and sensor fusion to reduce false alarms and trigger automated suppression mechanisms.",
    technologies: ["Python", "OpenCV", "YOLOv8", "Scikit-Learn"],
    features: [
      { text: "Real-time fire and smoke detection" },
      { text: "False positive reduction" },
      { text: "Automated suppression logic" },
      { text: "Computer vision pipeline" },
    ],
    github: "#",
    demo: "#",
    image: "",
  },
  {
    id: 2,
    title: "Smart PRISM Worklet Management System",
    description:
      "Built a worklet management platform with secure authentication, project tracking, and dashboard analytics for streamlined workflow management.",
    technologies: ["React", "Flask", "REST APIs"],
    features: [
      { text: "OAuth Authentication" },
      { text: "Worklet Tracking" },
      { text: "Dashboard Analytics" },
      { text: "User Management" },
    ],
    github: "https://github.com/ThrishanthaNS/PrismWorklet.git",
    demo: "#",
    image: "",
  },
  {
    id: 3,
    title: "Automated Recruitment Management System",
    description:
      "Developed a recruitment platform capable of resume screening, candidate ranking, and job matching using natural language processing techniques.",
    technologies: ["Python", "PostgreSQL", "NLP"],
    features: [
      { text: "Resume Analysis" },
      { text: "Candidate Ranking" },
      { text: "Automated Screening" },
      { text: "Recruitment Dashboard" },
    ],
    github: "https://github.com/ThrishanthaNS/Resume-Screening-.git",
    demo: "https://resume-screening-aj8k.onrender.com",
    image: "",
  },
  {
    id: 4,
    title: "Rosetta – AI-Powered Personalized Learning Platform",
    description:
      "Built an adaptive AI tutoring platform that personalizes learning using interest-based concept translation, misconception detection, and multimodal assessments to improve student understanding.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Groq",
      "Gemini AI",
      "OpenRouter"
    ],
    features: [
      { text: "Two-Layer Misconception Engine" },
      { text: "Interest-Based Learning Adaptation" },
      { text: "Adaptive Teaching Modes" },
      { text: "Voice, Sketch & Text Assessment" },
      { text: "Student Progress Dashboard" },
      { text: "Authentication & Gamification" }
    ],
    github: "https://github.com/whimsicalwolf3007/CtrlAltDefeat.git",
    demo: "https://ctrl-alt-defeat-ihdnadgvk-vivekma23cse-2469s-projects.vercel.app/",
    image: "",
  },
];

export const experience: Experience[] = [
  {
    title: "Virtual Intern",
    company: "Samsung PRISM",
    period: "2024",
    description: [
      "Collaborated on software development projects within Samsung's PRISM program",
      "Worked on real-world problem-solving and project implementation",
      "Gained practical industry exposure in software engineering workflows",
      "Applied modern development practices to deliver project milestones",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "250+ DSA Problems Solved",
    description:
      "Consistently practiced and solved over 250 Data Structures and Algorithms problems across competitive platforms.",
    icon: "trophy",
  },
  {
    title: "NPTEL Certified",
    description:
      "Completed NPTEL Certification: Getting Started with Competitive Programming.",
    icon: "award",
  },
  {
    title: "Samsung PRISM Intern",
    description:
      "Selected for the Samsung PRISM Virtual Internship program and delivered project outcomes.",
    icon: "briefcase",
  },
  {
    title: "Multiple Projects Completed",
    description:
      "Built and shipped multiple software and machine learning projects from ideation to deployment.",
    icon: "rocket",
  },
];

export const githubStats: GitHubStat[] = [
  { label: "Contributions", value: "500+", icon: "git-commit-horizontal" },
  { label: "Repositories", value: "20+", icon: "folder-git-2" },
  { label: "Languages Used", value: "8+", icon: "code-2" },
  { label: "Coding Streak", value: "Active", icon: "flame" },
];

export const contactInfo: ContactInfo[] = [
  {
    type: "Email",
    value: "thrishantha02ns@gmail.com",
    href: "mailto:[EMAIL_ADDRESS]",
    icon: "mail",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/ThrishanthaNS",
    href: "https://www.linkedin.com/in/thrishantha-ns-949b3b2bb/",
    icon: "linkedin",
  },
  {
    type: "GitHub",
    value: "github.com/ThrishanthaNS",
    href: "https://github.com/ThrishanthaNS",
    icon: "github",
  },
  {
    type: "Location",
    value: "Bangalore, Karnataka, India",
    href: "#",
    icon: "map-pin",
  },
];
