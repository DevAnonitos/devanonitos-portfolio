import { Alignment } from "./common";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: Alignment;
}

export interface GridBackgroundProps {
  className?: string;
  dotColor?: string;
  gridColor?: string;
  variant?: "dot" | "grid" | "mesh";
}

export interface PageTransitionProps {
  children: React.ReactNode;
}
