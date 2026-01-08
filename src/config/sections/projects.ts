import type { Project } from "@/interfaces/projects";

export const projects: Project[] = [
  {
    id: "pictomusic",
    title: "Picture to Music Generator",
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
      "Computer vision pipeline for music score analysis",
      "YOLOv11 for object detection and classification",
      "OpenCV for image processing",
      "Music generation from analyzed scores",
      "End-to-end Streamlit demo application",
    ],
  },
  {
    id: "audio-transcriptor",
    title: "Diarized Audio Transcription",
    category: "Audio ML",
    description:
      "Developed an advanced audio transcription system leveraging OpenAI's Whisper model and speaker diarization techniques to provide comprehensive, speaker-attributed transcripts from multi-speaker audio sources.",
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
      "Automatic speech-to-text with OpenAI Whisper",
      "Speaker diarization using PyAnnote for multi-speaker attribution",
      "Comprehensive speaker-attributed transcripts",
      "Deployed on Hugging Face Spaces",
      "Audio processing and NLP capabilities",
    ],
  },
  {
    id: "multitask-chatbot",
    title: "Multitask Chatbot",
    category: "LLM Apps",
    description:
      "Developed a versatile chatbot leveraging the Groq API, capable of handling diverse tasks including file processing, Retrieval-Augmented Generation (RAG), audio processing, and multilingual communication. This AI-powered assistant seamlessly integrates various problem-solving capabilities to provide comprehensive support across multiple domains.",
    src: "/vite.svg",
    screenshots: [],
    skills: {
      frontend: [{ name: "streamlit" }],
      backend: [
        { name: "python" },
        { name: "langchain" },
        { name: "groq" },
      ],
      database: [{ name: "mongodb" }],
    },
    live: "https://multitask-chatbot-chatbot.streamlit.app/",
    github: "https://github.com/AugustinMORVAL/Multitask_Chatbot",
    features: [
      "Multi-format file processing (PDF, PPT, Excel, audio)",
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Groq API integration for high-performance LLM inference",
      "Multilingual communication support",
      "Interactive Streamlit interface",
      "Comprehensive problem-solving across multiple domains",
    ],
  },
];

