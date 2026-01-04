import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Next.js": <SiNextdotjs />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Git: <SiGit />,
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
            Hover over a skill to see details
          </p>
        </motion.div>

        {/* 3D-like Keyboard Grid */}
        <div className="perspective-1000">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transform-style-3d">
            {config.skills.map((skill, index) => {
              const icon = skillIcons[skill.name];
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
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
              );
            })}
          </div>
        </div>

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
