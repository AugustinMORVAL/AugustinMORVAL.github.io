import type { ReactNode } from "react";
import {
  SiGithubactions,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiScipy,
  SiTensorflow,
  SiFlask,
  SiGit,
  SiStreamlit,
  SiOpenai,
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
  python: { title: "Python", icon: <SiPython /> },
  numpy: { title: "NumPy", icon: <SiNumpy /> },
  pandas: { title: "Pandas", icon: <SiPandas /> },
  scipy: { title: "SciPy", icon: <SiScipy /> },
  sklearn: { title: "scikit-learn", icon: <SiScikitlearn /> },
  tensorflow: { title: "TensorFlow", icon: <SiTensorflow /> },
  plotly: { title: "Plotly", icon: <SiPlotly /> },
  streamlit: { title: "Streamlit", icon: <SiStreamlit /> },
  flask: { title: "Flask", icon: <SiFlask /> },
  mongodb: { title: "MongoDB", icon: <SiMongodb /> },
  mysql: { title: "MySQL", icon: <SiMysql /> },
  gcp: { title: "Google Cloud", icon: <SiGooglecloud /> },
  githubActions: { title: "GitHub Actions", icon: <SiGithubactions /> },
  git: { title: "Git", icon: <SiGit /> },
  react: { title: "React", icon: <SiReact /> },
  langchain: { title: "LangChain", icon: <span className="font-bold">LC</span> },
  llamaindex: { title: "LlamaIndex", icon: <span className="font-bold">LI</span> },
  mcp: { title: "MCP", icon: <span className="font-bold">MCP</span> },
  whisper: { title: "Whisper", icon: <SiOpenai /> },
  pyannote: { title: "PyAnnote", icon: <span className="font-bold">PyA</span> },
  yolo: { title: "YOLO", icon: <span className="font-bold">YOLO</span> },
};

const projects: Project[] = [
  {
    id: "multitask-chatbot",
    title: "Multitask Chatbot (RAG + Document Processing)",
    category: "LLM Apps",
    description:
      "A Streamlit LLM application combining chat, multi-format document ingestion (PDF/PPT/Excel), and vector search/RAG with model selection.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.mcp,
        PROJECT_SKILLS.mongodb,
      ],
    },
    live: "https://github.com/AugustinMORVAL/Multitask_Chatbot",
    github: "https://github.com/AugustinMORVAL/Multitask_Chatbot",
    features: [
      "Multi-format ingestion (PDF, PPT, Excel)",
      "Vector search / RAG over uploaded documents",
      "LLM orchestration workflows (agents/tools)",
      "Interactive UI built with Streamlit",
    ],
  },
  {
    id: "audio-transcriptor",
    title: "Audio Transcriptor (Whisper + Diarization)",
    category: "Audio ML",
    description:
      "A transcription pipeline using Whisper with speaker diarization (PyAnnote) to generate speaker-attributed transcripts.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.whisper, PROJECT_SKILLS.pyannote],
    },
    live: "https://github.com/AugustinMORVAL/Audio-Transcriptor",
    github: "https://github.com/AugustinMORVAL/Audio-Transcriptor",
    features: [
      "Automatic speech-to-text with Whisper",
      "Speaker diarization for speaker attribution",
      "Exportable, readable transcripts",
    ],
  },
  {
    id: "pictomusic",
    title: "PicToMusic (Computer Vision / OMR)",
    category: "Computer Vision",
    description:
      "Deep learning project to analyze music score sheets (OMR) and generate played audio by combining computer vision and music generation components.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.yolo, PROJECT_SKILLS.tensorflow],
    },
    live: "https://github.com/AugustinMORVAL/PicToMusic",
    github: "https://github.com/AugustinMORVAL/PicToMusic",
    features: [
      "OMR-oriented CV pipeline for score analysis",
      "Fine-tuning workflow for detection/recognition components",
      "End-to-end demo app",
    ],
  },
  {
    id: "quantium-case",
    title: "Quantium Case (Analytics Notebook)",
    category: "Analytics",
    description:
      "Notebook-based analysis project working with transaction and customer behavior data to produce insights and recommendations.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy, PROJECT_SKILLS.plotly],
    },
    live: "https://github.com/AugustinMORVAL/Quantium-Case",
    github: "https://github.com/AugustinMORVAL/Quantium-Case",
    features: [
      "Data cleaning and exploratory analysis",
      "Behavior segmentation and insight generation",
      "Visualization and reporting in notebooks",
    ],
  },
];

export default projects;
