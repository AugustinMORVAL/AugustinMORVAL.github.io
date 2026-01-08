import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { gsap } from "gsap";
import { SKILLS } from "@/data/skills-data";
import { 
  CATEGORY_COLORS,
  getActiveCategories, 
  getActiveSkillsByCategory,
  SKILL_LEVEL_MAP,
} from "@/lib/skills";
import { SkillIcon } from "@/components/skill-icon";
import { config } from "@/config/config";

export default function SkillsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => getActiveCategories(config.activeSkills),
    []
  );
  const groupedSkills = useMemo(
    () => getActiveSkillsByCategory(config.activeSkills),
    []
  );

  const [activeTab, setActiveTab] = useState(categories[0]);

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
    <SectionWrapper id="skills" className="min-h-screen relative">
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
            Technologies I work with
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const categoryColor = CATEGORY_COLORS[category];
              return (
                <Tabs.Trigger
                  key={category}
                  value={category}
                  className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-700/50"
                  style={{
                    backgroundColor: activeTab === category ? categoryColor : undefined,
                    color: activeTab === category ? "#fff" : undefined,
                    borderColor: activeTab === category ? categoryColor : undefined,
                  }}
                  data-state={activeTab === category ? "active" : "inactive"}
                >
                  <span
                    className={
                      activeTab !== category
                        ? "text-slate-400 hover:text-white transition-colors"
                        : ""
                    }
                  >
                    {category}
                  </span>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {/* Tab Content */}
          {categories.map((category) => (
            <Tabs.Content key={category} value={category}>
              <div className="perspective-1000">
                <div
                  ref={activeTab === category ? cardsRef : null}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transform-style-3d"
                >
                  {groupedSkills[category]?.map((skill) => {
                    const categoryColor = CATEGORY_COLORS[skill.category];

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="group relative"
                      >
                        {/* Keycap effect */}
                        <div className="relative">
                          {/* Shadow layer */}
                          <div 
                            className="absolute inset-0 rounded-xl transform translate-y-2 blur-sm opacity-50"
                            style={{ backgroundColor: categoryColor }}
                          />
                          
                          {/* Main keycap */}
                          <div 
                            className="relative bg-gradient-to-br from-slate-800 to-slate-900 
                              border rounded-xl p-6 transform transition-all duration-300 translate-y-1
                              h-[280px] flex flex-col"
                            style={{
                              borderColor: "rgba(71, 85, 105, 0.5)",
                            }}
                          >
                            <div 
                              className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-30"
                              style={{ 
                                background: `linear-gradient(to right, transparent, ${categoryColor}60, transparent)`,
                              }}
                            />
                            
                            {/* Icon */}
                            <div 
                              className="w-16 h-16 mb-4 flex items-center justify-center flex-shrink-0"
                              style={{
                                filter: "grayscale(30%) opacity(0.85)",
                              }}
                            >
                              <SkillIcon skillName={skill.name as keyof typeof SKILLS} />
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-lg font-semibold text-white mb-2 flex-shrink-0">
                              {skill.label}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-400 mb-3 flex-grow line-clamp-3">
                              {skill.shortDescription}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3 flex-shrink-0 min-h-[24px]">
                              {skill.tags && skill.tags.length > 0 && (
                                skill.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="text-xs px-3 py-1 rounded-full inline-block"
                                    style={{
                                      backgroundColor: `${categoryColor}30`,
                                      color: "#cbd5e1",
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))
                              )}
                            </div>

                            {/* Level with text and indicator - pushed to bottom */}
                            <div className="mt-auto flex-shrink-0">
                              <div className="flex items-center justify-between mb-2">
                                <span 
                                  className="text-xs font-medium"
                                  style={{
                                    color: skill.level === 3
                                      ? "#22c55e"
                                      : skill.level === 2
                                      ? "#eab308"
                                      : "#3b82f6"
                                  }}
                                >
                                  {SKILL_LEVEL_MAP[skill.level]}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="h-1 flex-1 rounded-full"
                                    style={{
                                      backgroundColor: 
                                        i < skill.level
                                          ? skill.level === 3
                                            ? "#22c55e"
                                            : skill.level === 2
                                            ? "#eab308"
                                            : "#3b82f6"
                                          : "#334155"
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </SectionWrapper>
  );
}
