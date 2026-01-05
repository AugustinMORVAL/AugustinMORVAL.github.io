import { SkillNames } from "./skills-data";

export const config = {
  name: "Augustin MORVAL",
  title: "Data Scientist",
  description: {
    long: "Data Scientist focused on end-to-end ML: NLP/LLMs, Computer Vision (OMR) and Audio ML. I build practical prototypes and deployment-ready pipelines, with a strong consulting + finance background and a focus on measurable impact.",
    short:
      "Data Scientist bridging ML expertise with business acumen. Building production-ready apps and deploying scalable solutions that drive measurable impact.",
  },
  email: "augustin.morval.pro@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/your-resume-id/view",
  site: "https://yourusername.github.io",
  
  social: {
    github: "https://github.com/AugustinMORVAL",
    linkedin: "https://linkedin.com/in/augustin-morval",
  },

  // Active skills with personal proficiency levels
  activeSkills: [
    // Languages
    { name: SkillNames.PYTHON, level: 3 },
    { name: SkillNames.SQL, level: 2 },
    { name: SkillNames.JAVASCRIPT, level: 1 },
    { name: SkillNames.TYPESCRIPT, level: 1 },

    // Data Processing
    { name: SkillNames.NUMPY, level: 3 },
    { name: SkillNames.PANDAS, level: 3 },
    { name: SkillNames.SCIPY, level: 2 },

    // Machine Learning
    { name: SkillNames.SCIKIT_LEARN, level: 3 },
    { name: SkillNames.YOLO, level: 3 },
    { name: SkillNames.OPENCV, level: 2 },
    {name: SkillNames.PADDLE_OCR, level: 2},
    { name: SkillNames.WHISPER, level: 3 },
    { name: SkillNames.PYANNOTE, level: 2 },

    // Visualization
    { name: SkillNames.MATPLOTLIB, level: 3 },
    { name: SkillNames.PLOTLY, level: 3 },
    { name: SkillNames.SEABORN, level: 3 },

    // Tools
    { name: SkillNames.STREAMLIT, level: 3 },
    { name: SkillNames.GRADIO, level: 2 },
    { name: SkillNames.JUPYTER, level: 3 },
    { name: SkillNames.GIT, level: 3 },

    // MLOps
    { name: SkillNames.DOCKER, level: 2 },
    { name: SkillNames.MLFLOW, level: 1 },

    // DevOps
    { name: SkillNames.GITHUB_ACTIONS, level: 1 },

    // Cloud
    { name: SkillNames.GOOGLE_CLOUD, level: 1 },

    // Databases
    { name: SkillNames.MONGODB, level: 2 },
    { name: SkillNames.MYSQL, level: 2 },
    { name: SkillNames.REDIS, level: 1 },

    // Backend
    { name: SkillNames.FLASK, level: 3 },
    { name: SkillNames.FASTAPI, level: 3 },

    // LLM Apps
    { name: SkillNames.LANGCHAIN, level: 3 },
    { name: SkillNames.LLAMAINDEX, level: 2 },
    { name: SkillNames.OLLAMA, level: 3 },
    { name: SkillNames.HUGGINGFACE, level: 3 },
    { name: SkillNames.OPENAI, level: 3 },
    { name: SkillNames.GROQ, level: 2 },
    { name: SkillNames.CHROMADB, level: 2 },

    // Frontend
    { name: SkillNames.REACT, level: 1},
    { name: SkillNames.VITE, level: 1 },
    { name: SkillNames.HTML, level: 2 },
    { name: SkillNames.CSS, level: 2 },
  ] as const,

  experience: [
    {
      company: "Artefact",
      role: "Data Consultant",
      duration: "Apr 2025 - Present",
      description: "Details coming soon.",
      achievements: [],
    },
    {
      company: "Wavestone",
      role: "Financial Services Analyst",
      duration: "Jun 2024 - Sep 2024",
      description:
        "Worked on operational procedures/control systems analysis and explored LLM benchmarking for agentic workflows in a banking context.",
      achievements: [
        "Analyzed operational procedures and control systems; identified gaps and documented discrepancies.",
        "Benchmarked open-source LLMs and compared capabilities for integration into a network of autonomous agents.",
      ],
    },
    {
      company: "Abbott",
      role: "Junior Consultant",
      duration: "Oct 2022 - Apr 2023",
      description:
        "Go-to-market strategy and analytics work for a digital healthcare solution across APAC.",
      achievements: [
        "Conducted market research across 8 APAC countries to refine go-to-market strategy.",
        "Performed quantitative/qualitative analysis and validated insights with 26 expert interviews.",
        "Delivered 7 strategic recommendations across strategy, org structure and value proposition.",
      ],
    },
    {
      company: "Groupe CréO",
      role: "M&A Analyst",
      duration: "Jan 2022 - Jun 2022",
      description:
        "Financial modeling, scenario analysis, and operational restructuring in a transaction context.",
      achievements: [
        "Built predictive financial scenarios and cost analyses to support strategic decision-making.",
        "Led supply-chain restructuring across overseas territories, reducing logistics costs by 15%.",
        "Supported buy-side valuations and sell-side diligence for a €15M divestiture.",
      ],
    },
    {
      company: "LFB",
      role: "Management Controller",
      duration: "Feb 2021 - Jul 2021",
      description:
        "Financial reporting, budgeting, and automation initiatives supporting large-scale operations.",
      achievements: [
        "Produced monthly reporting and supervised R&D budgets; supported payroll for 2300+ employees.",
        "Automated reporting analysis in Excel, doubling efficiency (2×).",
      ],
    },
  ],
}
