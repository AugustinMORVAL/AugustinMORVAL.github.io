import type { Project } from "@/interfaces/projects";

export const projects: Project[] = [
  {
    id: "pictomusic",
    title: "Picture to Music — Computer Vision & Music Generation",
    category: "Computer Vision",
    description:
      "An innovative AI project that generates audio played music from music score sheets. Using computer vision and music generation models, this tool analyzes visual elements like notes, dynamics and tempo to recreate an audio piece of a given score.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [{ name: "streamlit" }],
      backend: [
        { name: "python" },
        { name: "yolo" },
        { name: "opencv" },
        { name: "tensorflow" },
      ],
      database: [],
    },
    live: "https://sonatabene.streamlit.app/End2End_Pipeline",
    github: "https://github.com/AugustinMORVAL/PicToMusic",
    features: [
      "End-to-end Computer Vision pipeline for sheet music conversion",
      "Trained 3 CNN models for detection and classification",
      "Dataset of 50k+ annotated images",
      "YOLO for object detection and classification",
      "OpenCV for image processing",
      "Music generation from analyzed scores",
      "End-to-end Streamlit demo application",
    ],
  },
  {
    id: "audio-transcriptor",
    title: "Diarized Audio Transcription — Whisper & PyAnnote",
    category: "Audio ML",
    description:
      "Built a high-accuracy multi-speaker transcription system deployed via Gradio and Hugging Face Spaces. Integrated Whisper and PyAnnote into an audio processing pipeline: noise reduction, segmentation, diarization, post-processing.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [{ name: "gradio" }],
      backend: [
        { name: "python" },
        { name: "whisper" },
        { name: "pyannote" },
        { name: "huggingface" },
      ],
      database: [],
    },
    live: "https://huggingface.co/spaces/Tingusto/audio-transcriptor",
    github: "https://github.com/AugustinMORVAL/Audio-Transcriptor",
    features: [
      "High-accuracy multi-speaker transcription system",
      "Whisper integration for speech-to-text",
      "PyAnnote for speaker diarization",
      "Audio processing pipeline: noise reduction, segmentation, diarization, post-processing",
      "Deployed on Hugging Face Spaces via Gradio",
    ],
  },
  {
    id: "multitask-chatbot",
    title: "Multimodal Chatbot — RAG & Agentic Workflows",
    category: "LLM Apps",
    description:
      "Built a multitask AI assistant capable of handling multi-format documents (PDF, PPT, Excel, audio). Implemented RAG with a vector database, dynamic model selection, and persistent conversational memory in MongoDB.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [{ name: "streamlit" }],
      backend: [
        { name: "python" },
        { name: "langchain" },
        { name: "groq" },
        { name: "chromadb" },
      ],
      database: [{ name: "mongodb" }],
    },
    live: "https://multitask-chatbot-chatbot.streamlit.app/",
    github: "https://github.com/AugustinMORVAL/Multitask_Chatbot",
    features: [
      "Multitask AI assistant handling multi-format documents (PDF, PPT, Excel, audio)",
      "RAG implementation with vector database (ChromaDB)",
      "Dynamic model selection",
      "Persistent conversational memory in MongoDB",
      "Groq API integration for high-performance LLM inference",
      "Agentic workflows with LangChain",
      "Interactive Streamlit interface",
    ],
  },
];

