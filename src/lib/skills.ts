import type { Skill, ActiveSkill } from "@/interfaces/skills";
import { SKILLS } from "@/data/skills-data";

export const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#F59E0B",        // Amber
  Data: "#10B981",             // Emerald
  Databases: "#F43F5E",        // Rose
  "Machine Learning": "#8B5CF6", // Violet
  GenAI: "#D946EF",            // Fuchsia
  "App Development": "#3B82F6", // Blue
  "MLOps & Cloud": "#6366F1",  // Indigo
};

export const CATEGORY_ORDER = [
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

export const SKILL_LEVEL_MAP: Record<1 | 2 | 3, "Beginner" | "Intermediate" | "Advanced"> = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
} as const;

// Helper function to convert number to skill level string
export const getSkillLevel = (level: 1 | 2 | 3): "Beginner" | "Intermediate" | "Advanced" => {
  return SKILL_LEVEL_MAP[level];
};

// Helper to get all skills as array
export const getAllSkills = (): Skill[] => Object.values(SKILLS);

// Helper to get skills by category
export const getSkillsByCategory = (category: string): Skill[] =>
  Object.values(SKILLS).filter((skill) => skill.category === category);

// Helper to get all unique categories
export const getCategories = (): string[] =>
  sortCategories([...new Set(Object.values(SKILLS).map((skill) => skill.category))]);

// Helper to get skill by name
export const getSkillByName = (name: keyof typeof SKILLS): Skill => SKILLS[name];

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

// Helper to get active skills with levels from config format
export const getActiveSkills = (
  activeSkillsConfig: readonly { name: keyof typeof SKILLS; level: 1 | 2 | 3 }[]
): ActiveSkill[] => {
  return activeSkillsConfig
    .map(({ name, level }) => {
      const skill = SKILLS[name];
      return { ...skill, level };
    });
};

// Helper to get active skills grouped by category
export const getActiveSkillsByCategory = (
  activeSkillsConfig: readonly { name: keyof typeof SKILLS; level: 1 | 2 | 3 }[]
): Record<string, ActiveSkill[]> => {
  const activeSkills = getActiveSkills(activeSkillsConfig);
  return activeSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, ActiveSkill[]>);
};

// Helper to get categories from active skills only
export const getActiveCategories = (
  activeSkillsConfig: readonly { name: keyof typeof SKILLS; level: 1 | 2 | 3 }[]
): string[] => {
  const activeSkills = getActiveSkills(activeSkillsConfig);
  return sortCategories([...new Set(activeSkills.map((skill) => skill.category))]);
};
