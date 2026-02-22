import { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface CategoryConfig {
  icon: LucideIcon;
  color: string;
  glow: string;
}
