import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FcScatterPlot } from "react-icons/fc";
import {
  SiFlask,
  SiGithubactions,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPython,
  SiScikitlearn,
  SiScipy,
  SiStreamlit,
  SiTensorflow,
  SiReact,
  SiGit,
  SiCodesandbox,
  SiMlflow,
  SiLangchain,
  SiOllama,
  SiOpenai,
  SiPytorch,
  SiHuggingface,
} from "react-icons/si";
import * as Tabs from "@radix-ui/react-tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { gsap } from "gsap";

const skillIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  Python: <SiPython />,
  "Google Cloud": <SiGooglecloud />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  "scikit-learn": <SiScikitlearn />,
  SciPy: <SiScipy />,
  TensorFlow: <SiTensorflow />,
  Matplotlib: <FcScatterPlot />,
  NumPy: <SiNumpy />,
  Pandas: <SiPandas />,
  Plotly: <SiPlotly />,
  MLflow: <SiMlflow />,
  Git: <SiGit />,
  "GitHub Actions": <SiGithubactions />,
  Streamlit: <SiStreamlit />,
  Flask: <SiFlask />,
  LangChain: <SiLangchain />,
  Ollama: <SiOllama />,
  MCP: <SiHuggingface />,
  Whisper: <SiOpenai />,
  PyTorch: <SiPytorch />,
  YOLO: <span className="font-bold">YOLO</span>,
};

// Group skills by category
const groupedSkills = config.skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof config.skills>);

const categories = Object.keys(groupedSkills);

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotateX: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [activeTab]);

  return (
    <SectionWrapper id="skills" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg">
            Hover over a skill to see proficiency details
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Tabs.Trigger
                key={category}
                value={category}
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=inactive]:bg-slate-800/50 data-[state=inactive]:text-slate-400 data-[state=inactive]:hover:bg-slate-700/50 data-[state=inactive]:hover:text-white border border-slate-700/50"
              >
                {category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Tab Content */}
          {categories.map((category) => (
            <Tabs.Content key={category} value={category}>
              <div className="perspective-1000">
                <div
                  ref={cardsRef}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transform-style-3d"
                >
                  {groupedSkills[category].map((skill) => {
                    const icon = skillIcons[skill.name] ?? <SiCodesandbox />;
                    const isHovered = hoveredSkill === skill.name;
                    
                    const levelDetails = {
                      Advanced: {
                        description: "Expert level proficiency",
                        years: "3+ years",
                        color: "text-green-400",
                      },
                      Intermediate: {
                        description: "Solid working knowledge",
                        years: "1-3 years",
                        color: "text-yellow-400",
                      },
                      Beginner: {
                        description: "Learning and growing",
                        years: "< 1 year",
                        color: "text-blue-400",
                      },
                    }[skill.level];

                    return (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ 
                              y: -10, 
                              rotateY: 5,
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className="group relative cursor-pointer"
                          >
                            {/* Keycap effect */}
                            <div className="relative">
                              {/* Shadow layer */}
                              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl transform translate-y-2 blur-sm" />
                              
                              {/* Main keycap */}
                              <div className={`
                                relative bg-gradient-to-br from-slate-800 to-slate-900 
                                border border-slate-700/50 rounded-xl p-6 
                                transform transition-all duration-300
                                ${isHovered ? 'translate-y-0' : 'translate-y-1'}
                              `}>
                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-xl" />
                                
                                {/* Icon */}
                                <div className={`
                                  text-5xl mb-4 transition-all duration-300
                                  ${isHovered ? 'text-blue-400 scale-110' : 'text-slate-400'}
                                `}>
                                  {icon}
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-lg font-semibold text-white mb-2">
                                  {skill.name}
                                </h3>

                                {/* Category Badge */}
                                <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 inline-block">
                                  {skill.category}
                                </span>

                                {/* Level Indicator */}
                                <div className="mt-3 flex gap-1">
                                  {[...Array(3)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                                        i < (skill.level === "Advanced" ? 3 : skill.level === "Intermediate" ? 2 : 1)
                                          ? isHovered 
                                            ? "bg-blue-400"
                                            : skill.level === "Advanced"
                                            ? "bg-green-500"
                                            : skill.level === "Intermediate"
                                            ? "bg-yellow-500"
                                            : "bg-blue-500"
                                          : "bg-slate-700"
                                      }`}
                                    />
                                  ))}
                                </div>

                                {/* Glow effect on hover */}
                                {isHovered && (
                                  <motion.div
                                    className="absolute inset-0 bg-blue-500/20 rounded-xl -z-10 blur-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  />
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <div className="space-y-2">
                            <p className={`font-semibold ${levelDetails?.color}`}>
                              {skill.level} Level
                            </p>
                            <p className="text-sm text-slate-300">
                              {levelDetails?.description}
                            </p>
                            <p className="text-xs text-slate-400">
                              Experience: {levelDetails?.years}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 rounded-full bg-green-500" />
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 rounded-full bg-yellow-500" />
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <span>Beginner</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
