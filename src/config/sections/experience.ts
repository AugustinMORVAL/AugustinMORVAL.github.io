import type { Experience } from "@/interfaces/experience";

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Data Scientist / AI Engineer",
    duration: "November 2025 – Present",
    description:
      "Developing and deploying advanced AI solutions for clients, focusing on production-ready pipelines and real-world applications.",
    achievements: [
      "Developed a medical OCR pipeline to extract information from prescriptions, identify consultation types, and recommend an appropriate time slot (98.6% accuracy, ~3 sec/document on CPU, validated on 500 prescriptions).",
    ],
    skills: [
      "OCR",
      "Computer Vision",
    ],
  },
  {
    company: "Artefact",
    role: "Data Consultant",
    duration: "January 2025 – November 2025",
    description:
      "Set up Data & AI governance and acted as AI Product Owner on multiple projects, delivering production-ready AI solutions for enterprise clients.",
    achievements: [
      "Set up Data & AI governance to support the industrialization of AI & GenAI products for a large enterprise client.",
      "Acted as AI Product Owner on 2 projects: business scoping, use-case prioritization, facilitation of business & IT workshops, roadmap definition, delivery coordination and tracking.",
      "Prototyped a POC deployed on GCP: a Gemini-powered project management application (analysis, business requirements qualification support, project tracking) — approved by the Executive Committee.",
    ],
    skills: [
      "AI Governance",
      "Product Ownership",
      "GenAI",
      "GCP",
      "Project Management",
    ],
  },
  {
    company: "Wavestone",
    role: "Financial Services Consultant",
    duration: "June 2024 – September 2024",
    description:
      "Conducted technical benchmarking of LLMs and analyzed internal processes and control frameworks in a banking context.",
    achievements: [
      "Conducted a technical benchmark of open-source LLMs for integration into an autonomous multi-agent network in a banking context.",
      "Analyzed internal processes and control frameworks at a major bank; identified gaps and delivered operational recommendations.",
    ],
    skills: [
      "LLM Benchmarking",
      "Agentic Workflows",
      "Process Analysis",
      "Banking",
    ],
  },
];

