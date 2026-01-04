import { ReactNode } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";

export type Skill = {
  title: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  live: string;
  github?: string;
  features: string[];
};

const PROJECT_SKILLS = {
  react: {
    title: "React",
    icon: <SiReact />,
  },
  typescript: {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  nextjs: {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  tailwind: {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  node: {
    title: "Node.js",
    icon: <SiNodedotjs />,
  },
  express: {
    title: "Express",
    icon: <SiExpress />,
  },
  mongodb: {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  postgresql: {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  prisma: {
    title: "Prisma",
    icon: <SiPrisma />,
  },
  firebase: {
    title: "Firebase",
    icon: <SiFirebase />,
  },
};

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform with admin dashboard, shopping cart, payment integration, and real-time inventory management.",
    src: "/assets/projects/ecommerce.jpg",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg", "screenshot3.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongodb,
      ],
    },
    live: "https://example.com",
    github: "https://github.com/yourusername/ecommerce",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Admin dashboard for inventory management",
      "Payment integration with Stripe",
      "Order tracking and history",
    ],
  },
  {
    id: "task-manager",
    title: "Task Management App",
    category: "Productivity",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    src: "/assets/projects/taskmanager.jpg",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.prisma],
    },
    live: "https://example.com",
    github: "https://github.com/yourusername/task-manager",
    features: [
      "Real-time collaboration with multiple users",
      "Drag-and-drop task organization",
      "Project and team management",
      "Due dates and priority levels",
      "Activity timeline and notifications",
      "Dark mode support",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Personal",
    description:
      "A beautiful and modern portfolio website with smooth animations, interactive elements, and responsive design.",
    src: "/assets/projects/portfolio.jpg",
    screenshots: ["screenshot1.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://yourusername.github.io",
    github: "https://github.com/yourusername/portfolio",
    features: [
      "Smooth scroll animations with GSAP",
      "Interactive particle background",
      "Responsive design for all devices",
      "Dark/Light theme toggle",
      "Contact form with email integration",
      "Optimized for performance (90+ Lighthouse score)",
    ],
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    category: "Analytics",
    description:
      "An analytics dashboard for tracking social media metrics across multiple platforms with beautiful charts and insights.",
    src: "/assets/projects/dashboard.jpg",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgresql,
      ],
    },
    live: "https://example.com",
    features: [
      "Multi-platform integration (Twitter, Instagram, Facebook)",
      "Real-time metrics and analytics",
      "Beautiful data visualizations",
      "Customizable dashboard widgets",
      "Export reports in PDF/CSV",
      "Scheduled post analytics",
    ],
  },
];

export default projects;
