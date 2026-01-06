import type { ReactNode } from "react";
import React from "react";

// Category color palette
export const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#F59E0B",        // Amber
  Data: "#10B981",             // Emerald
  Databases: "#F43F5E",        // Rose
  "Machine Learning": "#8B5CF6", // Violet
  GenAI: "#D946EF",            // Fuchsia
  "App Development": "#3B82F6", // Blue
  "MLOps & Cloud": "#6366F1",  // Indigo
};

// Desired category order
const CATEGORY_ORDER = [
  "Languages",
  "Data",
  "Machine Learning",
  "GenAI",
  "Databases",
  "MLOps & Cloud",
  "App Development",
] as const;

const sortCategories = (categories: string[]): string[] => {
  const orderIndex = new Map<string, number>(
    CATEGORY_ORDER.map((c, i) => [c, i])
  );

  return [...categories].sort((a, b) => {
    const ai = orderIndex.get(a);
    const bi = orderIndex.get(b);
    if (ai !== undefined && bi !== undefined) return ai - bi;
    if (ai !== undefined) return -1;
    if (bi !== undefined) return 1;
    return a.localeCompare(b);
  });
};

export const SkillNames = {
  // Languages
  PYTHON: "python",
  R: "r",
  SQL: "sql",
  JAVASCRIPT: "javascript",
  TYPESCRIPT: "typescript",

  // Data Processing
  NUMPY: "numpy",
  PANDAS: "pandas",
  SCIPY: "scipy",
  POLARS: "polars",
  DASK: "dask",
  APACHE_SPARK: "apache-spark",

  // Machine Learning
  SCIKIT_LEARN: "scikit-learn",
  TENSORFLOW: "tensorflow",
  PYTORCH: "pytorch",
  KERAS: "keras",
  XGBOOST: "xgboost",
  LIGHTGBM: "lightgbm",
  CATBOOST: "catboost",
  OPTUNA: "optuna",
  YOLO: "yolo",
  OPENCV: "opencv",
  PADDLE_OCR: "paddle-ocr",
  WHISPER: "whisper",
  PYANNOTE: "pyannote",

  // Visualization
  MATPLOTLIB: "matplotlib",
  PLOTLY: "plotly",
  SEABORN: "seaborn",
  BOKEH: "bokeh",
  DASH: "dash",

  // Tools & Frameworks
  STREAMLIT: "streamlit",
  GRADIO: "gradio",
  JUPYTER: "jupyter",
  VSCODE: "vscode",
  GIT: "git",

  // MLOps
  MLFLOW: "mlflow",
  KUBEFLOW: "kubeflow",
  WEIGHTS_BIASES: "weights-biases",
  DVC: "dvc",
  DOCKER: "docker",
  KUBERNETES: "kubernetes",

  // DevOps
  GITHUB_ACTIONS: "github-actions",
  JENKINS: "jenkins",
  TERRAFORM: "terraform",
  ANSIBLE: "ansible",

  // Cloud
  GOOGLE_CLOUD: "google-cloud",
  AWS: "aws",
  AZURE: "azure",
  VERCEL: "vercel",

  // Databases
  MONGODB: "mongodb",
  MYSQL: "mysql",
  POSTGRESQL: "postgresql",
  REDIS: "redis",
  ELASTICSEARCH: "elasticsearch",

  // Backend
  FLASK: "flask",
  FASTAPI: "fastapi",
  DJANGO: "django",
  NODEJS: "nodejs",
  EXPRESS: "express",

  // LLM Apps
  LANGCHAIN: "langchain",
  LLAMAINDEX: "llamaindex",
  OLLAMA: "ollama",
  MCP: "mcp",
  HUGGINGFACE: "huggingface",
  OPENAI: "openai",
  ANTHROPIC: "anthropic",
  GROQ: "groq",
  CHROMADB: "chromadb",

  // Frontend
  REACT: "react",
  NEXTJS: "nextjs",
  VUE: "vue",
  HTML: "html",
  CSS: "css",
  TAILWIND: "tailwind",
  VITE: "vite",
} as const;

export type SkillName = (typeof SkillNames)[keyof typeof SkillNames];

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  category: string;
  tags?: string[];
  color: string;
  icon: string;
};

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export const SKILL_LEVEL_MAP: Record<number, SkillLevel> = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
} as const;

// Helper function to convert number to SkillLevel
export const getSkillLevel = (level: number | SkillLevel): SkillLevel => {
  if (typeof level === "number") {
    return SKILL_LEVEL_MAP[level] || "Beginner";
  }
  return level;
};

// Auto-incrementing ID helper
let skillIdCounter = 1;
const getNextId = () => skillIdCounter++;

export const SKILLS: Record<SkillName, Skill> = {
  // Languages
  [SkillNames.PYTHON]: {
    id: getNextId(),
    name: "python",
    label: "Python",
    shortDescription: "Versatile language for data science, ML, and web development",
    category: "Languages",
    color: CATEGORY_COLORS["Languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.R]: {
    id: getNextId(),
    name: "r",
    label: "R",
    shortDescription: "Statistical language for data analysis and visualization",
    category: "Languages",
    color: CATEGORY_COLORS["Languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  [SkillNames.SQL]: {
    id: getNextId(),
    name: "sql",
    label: "SQL",
    shortDescription: "Query language for managing relational databases",
    category: "Languages",
    color: CATEGORY_COLORS["Languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.JAVASCRIPT]: {
    id: getNextId(),
    name: "javascript",
    label: "JavaScript",
    shortDescription: "Scripting language for interactive web development",
    category: "Languages",
    color: CATEGORY_COLORS["Languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TYPESCRIPT]: {
    id: getNextId(),
    name: "typescript",
    label: "TypeScript",
    shortDescription: "Typed JavaScript with static type checking",
    category: "Languages",
    color: CATEGORY_COLORS["Languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  
  // Data Processing
  [SkillNames.NUMPY]: {
    id: getNextId(),
    name: "numpy",
    label: "NumPy",
    shortDescription: "Python library for numerical computing with arrays",
    category: "Data",
    tags: ["Manipulation"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: getNextId(),
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data manipulation library with DataFrame structures",
    category: "Data",
    tags: ["Manipulation"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.SCIPY]: {
    id: getNextId(),
    name: "scipy",
    label: "SciPy",
    shortDescription: "Scientific computing library for optimization and statistics",
    category: "Data",
    tags: ["Manipulation"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
  },
  [SkillNames.POLARS]: {
    id: getNextId(),
    name: "polars",
    label: "Polars",
    shortDescription: "Fast DataFrame library written in Rust",
    category: "Data",
    tags: ["Manipulation"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg",
  },
  [SkillNames.DASK]: {
    id: getNextId(),
    name: "dask",
    label: "Dask",
    shortDescription: "Parallel computing for scaling data workflows",
    category: "Data",
    tags: ["Pipelines"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://dask.org/_images/dask_horizontal_white_no_pad.svg",
  },
  [SkillNames.APACHE_SPARK]: {
    id: getNextId(),
    name: "apache-spark",
    label: "Apache Spark",
    shortDescription: "Distributed analytics engine for big data processing",
    category: "Data",
    tags: ["Pipelines"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  },
  
  // Machine Learning
  [SkillNames.SCIKIT_LEARN]: {
    id: getNextId(),
    name: "scikit-learn",
    label: "scikit-learn",
    shortDescription: "Python ML library for classification, regression, and clustering",
    category: "Machine Learning",
    tags: ["Modeling"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: getNextId(),
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's deep learning framework for neural networks",
    category: "Machine Learning",
    tags: ["Deep Learning"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: getNextId(),
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep learning framework with dynamic computation graphs",
    category: "Machine Learning",
    tags: ["Deep Learning"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.KERAS]: {
    id: getNextId(),
    name: "keras",
    label: "Keras",
    shortDescription: "High-level neural network API for rapid prototyping",
    category: "Machine Learning",
    tags: ["Deep Learning"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  [SkillNames.XGBOOST]: {
    id: getNextId(),
    name: "xgboost",
    label: "XGBoost",
    shortDescription: "Fast gradient boosting framework for ML",
    category: "Machine Learning",
    tags: ["Modeling"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png",
  },
  [SkillNames.LIGHTGBM]: {
    id: getNextId(),
    name: "lightgbm",
    label: "LightGBM",
    shortDescription: "Fast gradient boosting with low memory usage",
    category: "Machine Learning",
    tags: ["Modeling"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://lightgbm.readthedocs.io/en/latest/_static/LightGBM_logo_black_text.svg",
  },
  [SkillNames.CATBOOST]: {
    id: getNextId(),
    name: "catboost",
    label: "CatBoost",
    shortDescription: "Gradient boosting with categorical feature handling",
    category: "Machine Learning",
    tags: ["Modeling"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://catboost.ai/images/catboost_logo.png",
  },
  [SkillNames.OPTUNA]: {
    id: getNextId(),
    name: "optuna",
    label: "Optuna",
    shortDescription: "Hyperparameter optimization using Bayesian methods",
    category: "Machine Learning",
    tags: ["Modeling"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://optuna.org/assets/img/optuna-logo.png",
  },
  [SkillNames.YOLO]: {
    id: getNextId(),
    name: "yolo",
    label: "YOLO",
    shortDescription: "Real-time object detection for images and videos",
    category: "Machine Learning",
    tags: ["Computer Vision", "Object Detection"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://github.com/ultralytics/assets/raw/main/partners/logo-ultralytics-hub.png",
  },
  [SkillNames.OPENCV]: {
    id: getNextId(),
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Computer vision library for image and video processing",
    category: "Machine Learning",
    tags: ["Computer Vision"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
  },
  [SkillNames.PADDLE_OCR]: {
    id: getNextId(),
    name: "paddle-ocr",
    label: "PaddleOCR",
    shortDescription: "OCR toolkit for text detection and recognition",
    category: "Machine Learning",
    tags: ["Computer Vision", "OCR"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/paddlepaddle-h0xvwmozuafp36ydway3a.png/paddlepaddle-evae599ztfizd4nrmjikii.png?_a=DATAg1AAZAA0",
  },
  [SkillNames.WHISPER]: {
    id: getNextId(),
    name: "whisper",
    label: "Whisper",
    shortDescription: "Speech recognition model for audio transcription",
    category: "Machine Learning",
    tags: ["Audio Processing"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://openai.com/favicon.svg",
  },
  [SkillNames.PYANNOTE]: {
    id: getNextId(),
    name: "pyannote",
    label: "PyAnnote",
    shortDescription: "Toolkit for speaker diarization and audio analysis",
    category: "Machine Learning",
    tags: ["Audio Processing"],
    color: CATEGORY_COLORS["Machine Learning"],
    icon: "https://avatars.githubusercontent.com/u/7559051?s=200&v=4",
  },
  
  // Visualization
  [SkillNames.MATPLOTLIB]: {
    id: getNextId(),
    name: "matplotlib",
    label: "Matplotlib",
    shortDescription: "Python plotting library for data visualization",
    category: "Data",
    tags: ["Visualization"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  },
  [SkillNames.PLOTLY]: {
    id: getNextId(),
    name: "plotly",
    label: "Plotly",
    shortDescription: "Interactive graphing library for web visualizations",
    category: "Data",
    tags: ["Visualization"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg",
  },
  [SkillNames.SEABORN]: {
    id: getNextId(),
    name: "seaborn",
    label: "Seaborn",
    shortDescription: "Statistical visualization library built on matplotlib",
    category: "Data",
    tags: ["Visualization"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  },
  [SkillNames.BOKEH]: {
    id: getNextId(),
    name: "bokeh",
    label: "Bokeh",
    shortDescription: "Interactive visualization library for dashboards",
    category: "Data",
    tags: ["Visualization"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://bokeh.org/static/images/bokeh-transparent.png",
  },
  [SkillNames.DASH]: {
    id: getNextId(),
    name: "dash",
    label: "Dash",
    shortDescription: "Python framework for analytical web dashboards",
    category: "Data",
    tags: ["Visualization"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://dash.plotly.com/assets/images/dash-logo-stripe.svg",
  },
  
  // Tools & Frameworks
  [SkillNames.STREAMLIT]: {
    id: getNextId(),
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "Python framework for data science web apps",
    category: "App Development",
    tags: ["Data Apps"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  [SkillNames.GRADIO]: {
    id: getNextId(),
    name: "gradio",
    label: "Gradio",
    shortDescription: "Library for creating ML demos with web interfaces",
    category: "App Development",
    tags: ["Demos", "Data Apps"],
    color: CATEGORY_COLORS["App Development"],
    icon: "/assets/logos/gradio-logo.svg",
  },
  [SkillNames.JUPYTER]: {
    id: getNextId(),
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Interactive notebook environment for data science",
    category: "Data",
    tags: ["Notebooks"],
    color: CATEGORY_COLORS["Data"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: getNextId(),
    name: "vscode",
    label: "VS Code",
    shortDescription: "Lightweight code editor with extensive extensions",
    category: "MLOps & Cloud",
    tags: ["IDE"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.GIT]: {
    id: getNextId(),
    name: "git",
    label: "Git",
    shortDescription: "Version control system for code collaboration",
    category: "MLOps & Cloud",
    tags: ["Version Control"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  
  // MLOps
  [SkillNames.MLFLOW]: {
    id: getNextId(),
    name: "mlflow",
    label: "MLflow",
    shortDescription: "Platform for managing ML lifecycle and experiments",
    category: "MLOps & Cloud",
    tags: ["MLOps"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://www.mlflow.org/img/mlflow-black.svg",
  },
  [SkillNames.KUBEFLOW]: {
    id: getNextId(),
    name: "kubeflow",
    label: "Kubeflow",
    shortDescription: "Kubernetes platform for ML workflow management",
    category: "MLOps & Cloud",
    tags: ["MLOps"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://www.kubeflow.org/images/logo.svg",
  },
  [SkillNames.WEIGHTS_BIASES]: {
    id: getNextId(),
    name: "weights-biases",
    label: "Weights & Biases",
    shortDescription: "ML experiment tracking and model management",
    category: "MLOps & Cloud",
    tags: ["MLOps"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://wandb.ai/logo.svg",
  },
  [SkillNames.DVC]: {
    id: getNextId(),
    name: "dvc",
    label: "DVC",
    shortDescription: "Version control for ML datasets and models",
    category: "MLOps & Cloud",
    tags: ["MLOps"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://dvc.org/img/logo.svg",
  },
  [SkillNames.DOCKER]: {
    id: getNextId(),
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform for application packaging",
    category: "MLOps & Cloud",
    tags: ["Containers"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: getNextId(),
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Container orchestration for automated deployment",
    category: "MLOps & Cloud",
    tags: ["Containers"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  
  // DevOps
  [SkillNames.GITHUB_ACTIONS]: {
    id: getNextId(),
    name: "github-actions",
    label: "GitHub Actions",
    shortDescription: "CI/CD platform for workflow automation",
    category: "MLOps & Cloud",
    tags: ["CI/CD"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.JENKINS]: {
    id: getNextId(),
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "Automation server for CI/CD pipelines",
    category: "MLOps & Cloud",
    tags: ["CI/CD"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  [SkillNames.TERRAFORM]: {
    id: getNextId(),
    name: "terraform",
    label: "Terraform",
    shortDescription: "Infrastructure as Code for cloud provisioning",
    category: "MLOps & Cloud",
    tags: ["Infrastructure"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  [SkillNames.ANSIBLE]: {
    id: getNextId(),
    name: "ansible",
    label: "Ansible",
    shortDescription: "Configuration management and automation tool",
    category: "MLOps & Cloud",
    tags: ["Infrastructure"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  },
  
  // Cloud
  [SkillNames.GOOGLE_CLOUD]: {
    id: getNextId(),
    name: "google-cloud",
    label: "Google Cloud",
    shortDescription: "Google's cloud platform with ML and analytics",
    category: "MLOps & Cloud",
    tags: ["Platform"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.AWS]: {
    id: getNextId(),
    name: "aws",
    label: "AWS",
    shortDescription: "Amazon's cloud platform with computing and ML",
    category: "MLOps & Cloud",
    tags: ["Platform"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  [SkillNames.AZURE]: {
    id: getNextId(),
    name: "azure",
    label: "Azure",
    shortDescription: "Microsoft's cloud platform with ML services",
    category: "MLOps & Cloud",
    tags: ["Platform"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: getNextId(),
    name: "vercel",
    label: "Vercel",
    shortDescription: "Platform for deploying frontend apps and serverless",
    category: "MLOps & Cloud",
    tags: ["deployment"],
    color: CATEGORY_COLORS["MLOps & Cloud"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  
  // Databases
  [SkillNames.MONGODB]: {
    id: getNextId(),
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document database with horizontal scaling",
    category: "Databases",
    tags: ["NoSQL"],
    color: CATEGORY_COLORS["Databases"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: getNextId(),
    name: "mysql",
    label: "MySQL",
    shortDescription: "Open-source relational database using SQL",
    category: "Databases",
    tags: ["SQL"],
    color: CATEGORY_COLORS["Databases"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.POSTGRESQL]: {
    id: getNextId(),
    name: "postgresql",
    label: "PostgreSQL",
    shortDescription: "Advanced open-source relational database",
    category: "Databases",
    tags: ["SQL"],
    color: CATEGORY_COLORS["Databases"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.REDIS]: {
    id: getNextId(),
    name: "redis",
    label: "Redis",
    shortDescription: "In-memory data store for caching and messaging",
    category: "Databases",
    tags: ["Caching"],
    color: CATEGORY_COLORS["Databases"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.ELASTICSEARCH]: {
    id: getNextId(),
    name: "elasticsearch",
    label: "Elasticsearch",
    shortDescription: "Distributed search engine for full-text search",
    category: "Databases",
    tags: ["Search"],
    color: CATEGORY_COLORS["Databases"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  },
  
  // Backend
  [SkillNames.FLASK]: {
    id: getNextId(),
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight Python web framework for APIs",
    category: "App Development",
    tags: ["Backend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: getNextId(),
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Modern Python framework for high-performance APIs",
    category: "App Development",
    tags: ["Backend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: getNextId(),
    name: "django",
    label: "Django",
    shortDescription: "High-level Python web framework with ORM",
    category: "App Development",
    tags: ["Backend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: getNextId(),
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for server-side development",
    category: "App Development",
    tags: ["Backend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: getNextId(),
    name: "express",
    label: "Express",
    shortDescription: "Minimal Node.js framework for APIs and servers",
    category: "App Development",
    tags: ["Backend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  
  // LLM Apps
  [SkillNames.LANGCHAIN]: {
    id: getNextId(),
    name: "langchain",
    label: "LangChain",
    shortDescription: "Framework for building LLM applications",
    category: "GenAI",
    tags: ["Agentic Framework"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.37.0/files/dark/langchain-color.png",
  },
  [SkillNames.OLLAMA]: {
    id: getNextId(),
    name: "ollama",
    label: "Ollama",
    shortDescription: "Tool for running LLMs locally",
    category: "GenAI",
    tags: ["LLM Inference"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://ollama.com/public/ollama.png",
  },
  [SkillNames.MCP]: {
    id: getNextId(),
    name: "mcp",
    label: "MCP",
    shortDescription: "Protocol for connecting AI to data sources",
    category: "GenAI",
    tags: ["Frameworks"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anthropic/anthropic-original.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: getNextId(),
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "Platform hosting ML models and datasets",
    category: "GenAI",
    tags: ["Model Provider", "MCP"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  [SkillNames.OPENAI]: {
    id: getNextId(),
    name: "openai",
    label: "OpenAI",
    shortDescription: "GPT models and APIs provider",
    category: "GenAI",
    tags: ["LLM Inference"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://openai.com/favicon.svg",
  },
  [SkillNames.ANTHROPIC]: {
    id: getNextId(),
    name: "anthropic",
    label: "Anthropic",
    shortDescription: "AI company providing Claude models and APIs",
    category: "GenAI",
    tags: ["LLM Inference"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anthropic/anthropic-original.svg",
  },
  [SkillNames.LLAMAINDEX]: {
    id: getNextId(),
    name: "llamaindex",
    label: "LlamaIndex",
    shortDescription: "Framework for building RAG applications",
    category: "GenAI",
    tags: ["RAG", "Agentic Framework"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4",
  },
  [SkillNames.GROQ]: {
    id: getNextId(),
    name: "groq",
    label: "Groq",
    shortDescription: "High-performance LLM inference API",
    category: "GenAI",
    tags: ["LLM Inference"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://groq.com/favicon.ico",
  },
  [SkillNames.CHROMADB]: {
    id: getNextId(),
    name: "chromadb",
    label: "ChromaDB",
    shortDescription: "Open-source vector database for embeddings",
    category: "GenAI",
    tags: ["Vector DB", "RAG"],
    color: CATEGORY_COLORS["GenAI"],
    icon: "https://www.trychroma.com/favicon.ico",
  },
  
  // Frontend
  [SkillNames.REACT]: {
    id: getNextId(),
    name: "react",
    label: "React",
    shortDescription: "JavaScript library for building UIs",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: getNextId(),
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React framework with SSR and static generation",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.VUE]: {
    id: getNextId(),
    name: "vue",
    label: "Vue",
    shortDescription: "Progressive JavaScript framework for UIs",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.HTML]: {
    id: getNextId(),
    name: "html",
    label: "HTML",
    shortDescription: "Markup language for structuring web content",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: getNextId(),
    name: "css",
    label: "CSS",
    shortDescription: "Style sheets for web page styling and layout",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: getNextId(),
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS framework for rapid UI development",
    category: "App Development",
    tags: ["Frontend"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.VITE]: {
    id: getNextId(),
    name: "vite",
    label: "Vite",
    shortDescription: "Fast build tool and dev server with HMR",
    category: "App Development",
    tags: ["Build Tool"],
    color: CATEGORY_COLORS["App Development"],
    icon: "https://vitejs.dev/logo.svg",
  },
};

// Helper to get all skills as array
export const getAllSkills = (): Skill[] => Object.values(SKILLS);

// Helper to get skills by category
export const getSkillsByCategory = (category: string): Skill[] =>
  Object.values(SKILLS).filter((skill) => skill.category === category);

// Helper to get all unique categories
export const getCategories = (): string[] =>
  sortCategories([...new Set(Object.values(SKILLS).map((skill) => skill.category))]);

// Helper to get skill by name (case-insensitive)
export const getSkillByName = (name: string): Skill | undefined =>
  Object.values(SKILLS).find((skill) => skill.name.toLowerCase() === name.toLowerCase());


// Helper to search skills by keyword
export const searchSkills = (keyword: string): Skill[] => {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(SKILLS).filter(
    (skill) =>
      skill.name.toLowerCase().includes(lowerKeyword) ||
      skill.label.toLowerCase().includes(lowerKeyword) ||
      skill.shortDescription.toLowerCase().includes(lowerKeyword) ||
      skill.category.toLowerCase().includes(lowerKeyword)
  );
};

// Type for skill with personal level
export type SkillWithLevel = Skill & { level: SkillLevel };

// Helper to get active skills with levels from config format
export const getActiveSkills = (
  activeSkillsConfig: readonly { name: string; level: SkillLevel | number }[]
): SkillWithLevel[] => {
  return activeSkillsConfig
    .map(({ name, level }) => {
      const skill = SKILLS[name as SkillName];
      const skillLevel = getSkillLevel(level);
      return skill ? { ...skill, level: skillLevel } : null;
    })
    .filter((skill): skill is SkillWithLevel => skill !== null);
};

// Helper to get active skills grouped by category
export const getActiveSkillsByCategory = (
  activeSkillsConfig: readonly { name: string; level: SkillLevel | number }[]
): Record<string, SkillWithLevel[]> => {
  const activeSkills = getActiveSkills(activeSkillsConfig);
  return activeSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillWithLevel[]>);
};

// Helper to get categories from active skills only
export const getActiveCategories = (
  activeSkillsConfig: readonly { name: string; level: SkillLevel | number }[]
): string[] => {
  const activeSkills = getActiveSkills(activeSkillsConfig);
  return sortCategories([...new Set(activeSkills.map((skill) => skill.category))]);
};

// Helper to get skill icon
const DEFAULT_ICON_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";

export const getSkillIcon = (skillName: string): ReactNode => {
  const skill = getSkillByName(skillName);
  const iconUrl = skill?.icon ?? DEFAULT_ICON_URL;
  
  return React.createElement("img", {
    src: iconUrl,
    alt: skill?.label ?? skillName,
    className: "w-full h-full object-contain",
    loading: "lazy",
    style: {
      imageRendering: "crisp-edges",
    } as React.CSSProperties,
  });
};
