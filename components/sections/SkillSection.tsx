"use client"

import Container from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/constants';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations';
import { useScrollReveal } from '@/hooks';
import { cn } from '@/lib/utils';
import { CategoryConfig } from '@/types';
import {
  ArrowRight,
  Atom,
  Binary,
  Brain,
  Cloud,
  Code2,
  Cpu,
  DatabaseZap,
  GitBranch,
  Layers,
  Layout,
  MonitorSmartphone,
  Palette,
  Server,
  Sparkles,
  Target,
  Terminal,
  Trophy,
  Users2,
  Workflow
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

const ICON_MAP: Record<string, React.ElementType> = {
  react: Atom,
  nextjs: Layers,
  typescript: Code2,
  tailwind: Palette,
  motion: Sparkles,
  state: Layers,
  nodejs: Server,
  python: Binary,
  database: DatabaseZap,
  docker: Cpu,
  cloud: Cloud,
  brain: Brain,
  chart: Target,
  sparkles: Sparkles,
  git: GitBranch,
  terminal: Terminal,
  users: Users2,
  'git-branch': Workflow,
  figma: Layout,
  layers: Layers,
};

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  "Frontend Development": {
    icon: MonitorSmartphone,
    color: "text-blue-500",
    glow: "bg-blue-500/10"
  },
  "Backend & Infrastructure": {
    icon: Server,
    color: "text-violet-500",
    glow: "bg-violet-500/10"
  },
  "Data Science & AI": {
    icon: Brain,
    color: "text-emerald-500",
    glow: "bg-emerald-500/10"
  },
  "Tools & Professional": {
    icon: Terminal,
    color: "text-amber-500",
    glow: "bg-amber-500/10"
  },
};

const SkillSection = () => {
  const { ref, controls, isInView } = useScrollReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.03)_0%,transparent_100%)]" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-24"
        >
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <motion.div variants={FADE_IN_UP}>
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                Expertise Matrix
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-6xl font-bold tracking-tight">
              A comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">Technical</span>
            </motion.h2>
          </div>

          {/* Horizontal List Cards */}
          <div className="flex flex-col gap-6">
            {SKILLS.map((category, index) => {
              const config = CATEGORY_CONFIG[category.category] || CATEGORY_CONFIG["Tools & Professional"];
              const CategoryIcon = config.icon;

              return (
                <motion.div
                  key={index}
                  variants={FADE_IN_UP}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={cn(
                    "group relative rounded-[2.5rem] bg-card/30 border border-border/50 backdrop-blur-md p-8 lg:p-12 transition-all duration-500 overflow-hidden",
                    hoveredCard === index ? "border-primary/40 shadow-2xl shadow-primary/5" : ""
                  )}
                >
                  {/* Category Glow */}
                  <div className={cn(
                    "absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] opacity-0 transition-opacity duration-1000",
                    hoveredCard === index ? "opacity-100" : "",
                    config.glow
                  )} />

                  <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side: Category Branding */}
                    <div className="lg:w-1/4 space-y-6">
                      <div className={cn("p-5 rounded-3xl bg-background border border-border/50 w-fit shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3")}>
                        <CategoryIcon className={cn("size-8", config.color)} />
                      </div>
                      <div className="space-y-2">
                         <h3 className="text-2xl font-bold tracking-tight">{category.category}</h3>
                         <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                            {category.items.length} Production Modules
                         </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed hidden lg:block">
                        Advanced proficiency in core technologies and industry standard practices.
                      </p>
                    </div>

                    {/* Right Side: Skills Grid */}
                    <div className="lg:w-3/4">
                       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10">
                          {category.items.map((skill, sIdx) => {
                             const SkillIcon = ICON_MAP[skill.icon] || Code2;
                             return (
                               <div key={sIdx} className="space-y-3">
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                       <div className="p-1.5 rounded-lg bg-secondary/50">
                                          <SkillIcon className="size-4 text-primary" />
                                       </div>
                                       <span className="text-sm font-semibold text-foreground/90">{skill.name}</span>
                                    </div>
                                    <span className="font-mono text-[10px] text-primary">{skill.level}%</span>
                                 </div>

                                 {/* Minimalist Progress */}
                                 <div className="h-1 w-full bg-secondary/30 rounded-full overflow-hidden relative">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                      transition={{ duration: 1.5, delay: 0.1 + (index * 0.1) + (sIdx * 0.05), ease: "easeOut" }}
                                      className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                    />
                                 </div>
                               </div>
                             )
                          })}
                       </div>
                    </div>
                  </div>

                  {/* Aesthetic Arrow Decor */}
                  <div className="absolute bottom-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors hidden lg:block">
                     <ArrowRight className="size-16 rotate-45" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Trust Indicators */}
          <motion.div variants={FADE_IN_UP} className="pt-12 flex flex-wrap justify-center gap-12 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.3em]">
             <div className="flex items-center gap-3">
                <Trophy className="size-4 text-primary" />
                <span>Industry Standard Compliance</span>
             </div>
             <div className="flex items-center gap-3">
                <Target className="size-4 text-primary" />
                <span>High Performance Execution</span>
             </div>
             <div className="flex items-center gap-3">
                <Sparkles className="size-4 text-primary" />
                <span>Pixel Perfect UX</span>
             </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SkillSection;


