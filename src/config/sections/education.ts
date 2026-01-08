import type { Education } from "@/interfaces/education";

export const education: Education[] = [
  {
    institution: "Artefact School of Data",
    program: "Data Science",
    duration: "Jan 2025 - Mar 2025",
    description:
      "12-week intensive, full-time program focused on building production-minded ML: framing problems, shipping reliable models and deploying them as usable services.",
    highlights: [
      "Delivered end-to-end ML projects with an engineering mindset: reproducible experiments, clear evaluation and deployment-ready packaging",
      "Built and optimized supervised/unsupervised models (feature engineering, tuning, pipelines) with measurable performance improvements",
      "Applied deep learning (CNN/RNN/Transformers) to real CV & NLP cases, focusing on robustness and practical constraints",
      "Production & MLOps fundamentals: Docker, MLflow, FastAPI, CI/CD and cloud deployment patterns for maintainable systems",
      "Data foundations: SQL + Python (NumPy/Pandas) and clear storytelling via visualization (Matplotlib/Plotly)",
    ],
    skills: ["Python", "Machine Learning", "Deep Learning", "MLOps", "Databases"],
  },
  {
    institution: "ESSEC Asia-Pacific",
    program: "Master in Strategy and Management of International Business",
    duration: "Sep 2022 - Apr 2023",
    description:
      "Strategy and international business program focused on turning ambiguity into decisions: market analysis, stakeholder alignment and execution in an APAC context.",
    highlights: [
      "Built a strong strategy toolkit: business development, innovation, cost analysis and market/geo context (APAC)",
      "Strengthened negotiation and cross-cultural communication through projects and stakeholder-heavy work",
    ],
    skills: [
      "Business Strategy",
      "International Business",
      "Cross-cultural Communication",
      "Project Management",
    ],
  },
  {
    institution: "ESSCA",
    program: "Master in Corporate Finance",
    duration: "Sep 2017 - Jun 2022",
    description:
      "Corporate finance program focused on rigorous analysis and decision support: valuation, financial modeling and M&A fundamentals.",
    highlights: [
      "Built strong fundamentals in valuation and modeling used in real-world investment and transaction contexts",
      "Developed a structured approach to financial analysis: assumptions, scenario thinking and decision-ready outputs",
    ],
    skills: [
      "Corporate Finance",
      "Financial Modeling",
      "Business Valuation",
      "Mergers & Acquisitions (M&A)",
      "Investments",
    ],
  },
];

