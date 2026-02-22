import { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  description: string;
}

export interface AboutStat {
  label: string;
  value: string;
  icon: LucideIcon;
}
