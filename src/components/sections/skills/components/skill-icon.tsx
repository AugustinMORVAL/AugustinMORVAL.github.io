import { SKILLS } from "@/data/skills-data";

export const SkillIcon = ({ skillName }: { skillName: keyof typeof SKILLS }) => {
  const skill = SKILLS[skillName];
  
  return (
    <img
      src={skill.icon}
      alt={skill.label}
      className="w-full h-full object-contain"
      loading="lazy"
      style={{
        imageRendering: "crisp-edges",
      }}
    />
  );
};

