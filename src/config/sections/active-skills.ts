import type { SKILLS } from "@/data/skills-data";

export const activeSkills: readonly { name: keyof typeof SKILLS; level: 1 | 2 | 3 }[] = [
  // Languages
  { name: "python", level: 3 },
  { name: "sql", level: 2 },
  { name: "javascript", level: 1 },
  { name: "typescript", level: 1 },

  // Data Processing
  { name: "numpy", level: 3 },
  { name: "pandas", level: 3 },
  { name: "scipy", level: 2 },

  // Machine Learning
  { name: "scikit-learn", level: 3 },
  { name: "yolo", level: 3 },
  { name: "opencv", level: 2 },
  { name: "paddle-ocr", level: 2 },
  { name: "whisper", level: 3 },
  { name: "pyannote", level: 2 },

  // Visualization
  { name: "matplotlib", level: 3 },
  { name: "plotly", level: 3 },
  { name: "seaborn", level: 3 },

  // Tools
  { name: "streamlit", level: 3 },
  { name: "gradio", level: 2 },
  { name: "jupyter", level: 3 },
  { name: "git", level: 3 },

  // MLOps
  { name: "docker", level: 2 },
  { name: "mlflow", level: 1 },

  // DevOps
  { name: "github-actions", level: 1 },

  // Cloud
  { name: "google-cloud", level: 1 },

  // Databases
  { name: "mongodb", level: 2 },
  { name: "mysql", level: 2 },
  { name: "redis", level: 1 },

  // Backend
  { name: "flask", level: 3 },
  { name: "fastapi", level: 3 },

  // LLM Apps
  { name: "langchain", level: 3 },
  { name: "llamaindex", level: 2 },
  { name: "ollama", level: 3 },
  { name: "huggingface", level: 3 },
  { name: "openai", level: 3 },
  { name: "groq", level: 2 },
  { name: "chromadb", level: 2 },

  // Frontend
  { name: "react", level: 1 },
  { name: "vite", level: 1 },
  { name: "html", level: 2 },
  { name: "css", level: 2 },
] as const;

