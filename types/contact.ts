import { LucideIcon } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  color: string;
  bg: string;
}
