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
      role: "Junior Consultant",
      duration: "Jun 2024 - Sep 2024",
      description:
        "Worked on operational procedures/control systems analysis and explored LLM benchmarking for agentic workflows in a banking context.",
      achievements: [
        "Benchmarked open-source LLMs and compared capabilities for integration into a network of autonomous agents.",
        "Analyzed operational procedures and control systems; identified gaps and documented discrepancies.",
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
  ],

  education: [
    {
      institution: "Artefact School of Data",
      program: "Data Science",
      duration: "Jan 2025 - Mar 2025",
      description:
        "12-week intensive, full-time program focused on building production-minded ML: framing problems, shipping reliable models, and deploying them as usable services.",
      highlights: [
        "Delivered end-to-end ML projects with an engineering mindset: reproducible experiments, clear evaluation, and deployment-ready packaging",
        "Built and optimized supervised/unsupervised models (feature engineering, tuning, pipelines) with measurable performance improvements",
        "Applied deep learning (CNN/RNN/Transformers) to real CV & NLP cases, focusing on robustness and practical constraints",
        "Production & MLOps fundamentals: Docker, MLflow, FastAPI, CI/CD, and cloud deployment patterns for maintainable systems",
        "Data foundations: SQL + Python (NumPy/Pandas) and clear storytelling via visualization (Matplotlib/Plotly)",
      ],
      skills: ["Python", "Machine Learning", "Deep Learning", "MLOps", "Databases"],
    },
    {
      institution: "ESSEC Asia-Pacific",
      program: "Master in Strategy and Management of International Business",
      duration: "Sep 2022 - Apr 2023",
      description:
        "Strategy and international business program focused on turning ambiguity into decisions: market analysis, stakeholder alignment, and execution in an APAC context.",
      highlights: [
        "Built a strong strategy toolkit: business development, innovation, cost analysis, and market/geo context (APAC)",
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
        "Corporate finance program focused on rigorous analysis and decision support: valuation, financial modeling, and M&A fundamentals.",
      highlights: [
        "Built strong fundamentals in valuation and modeling used in real-world investment and transaction contexts",
        "Developed a structured approach to financial analysis: assumptions, scenario thinking, and decision-ready outputs",
      ],
      skills: [
        "Corporate Finance",
        "Financial Modeling",
        "Business Valuation",
        "Mergers & Acquisitions (M&A)",
        "Investments",
      ],
    },
  ],
}
