
export interface Skill {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  category: string;
  tags?: string[];
  icon: string;
}

export interface ActiveSkill extends Skill {
level: 1 | 2 | 3;
}
