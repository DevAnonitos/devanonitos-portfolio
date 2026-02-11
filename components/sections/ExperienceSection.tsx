"use client"

import React from 'react';
import Container from '@/components/layout/Container';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/constants';
import { useScrollReveal } from '@/hooks';
import { 
  FADE_IN_UP, 
  STAGGER_CONTAINER, 
  FADE_IN_SCALE 
} from '@/constants/animations';
import { 
  Briefcase, 
  Calendar, 
  Checkpoint, 
  Building2, 
  Trophy,
  ArrowUpRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ExperienceSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <motion.div variants={FADE_IN_UP}>
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                Career Roadmap
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-6xl font-bold tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">Professional Journey</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg leading-relaxed">
              A timeline of my professional experience, showcasing my growth, 
              key achievements, and the high-impact projects I&apos;ve led.
            </motion.p>
          </div>

          {/* Timeline Experience Cards */}
          <div className="relative space-y-8">
            {/* The Timeline Line (Only visible on larger screens) */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-[25px] top-6 hidden md:flex items-center justify-center -translate-x-1/2">
                  <motion.div 
                    variants={FADE_IN_SCALE}
                    className="size-12 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10"
                  >
                    <Briefcase className="size-5" />
                  </motion.div>
                  {/* Outer glow ring */}
                  <div className="absolute size-12 rounded-2xl bg-primary/20 animate-ping -z-10 scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Card */}
                <div className="rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-md p-8 md:p-10 transition-all duration-500 group-hover:border-primary/20 group-hover:bg-card/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div className="space-y-4">
                      {/* Period Badge */}
                      <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider">
                        <Calendar className="size-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors cursor-default">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                          <Building2 className="size-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta stats / Decoration */}
                    <div className="hidden lg:flex items-center gap-4">
                       <div className="h-12 w-px bg-border/50" />
                       <div className="flex flex-col text-right">
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-mono">Status</span>
                          <span className="text-xs font-bold text-emerald-500">Verified Exp 0x{index + 1}</span>
                       </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-4xl">
                    {exp.description}
                  </p>

                  {/* Achievements Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, aIdx) => (
                      <div 
                        key={aIdx} 
                        className="flex items-start gap-3 p-4 rounded-2xl bg-background/50 border border-border/40 hover:border-primary/30 transition-all group/item"
                      >
                        <div className="mt-1 flex-shrink-0">
                           <Star className="size-4 text-primary opacity-50 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80 leading-snug">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic Corner Stamp */}
                  <div className="absolute bottom-4 right-10 text-[8px] font-mono tracking-widest text-muted-foreground/20 uppercase font-bold hidden md:block">
                     Experience Logic Module // 2024.v1
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust CTA / Summary */}
          <motion.div variants={FADE_IN_UP} className="flex justify-center pt-8">
             <div className="flex items-center gap-8 py-6 px-10 rounded-full border border-border/50 bg-card/20 backdrop-blur-sm shadow-inner group cursor-default">
                <div className="flex items-center gap-3">
                   <Trophy className="size-5 text-amber-500" />
                   <span className="text-sm font-bold">Years of Innovation</span>
                </div>
                <div className="h-6 w-px bg-border/50" />
                <div className="flex items-center gap-2">
                   <ShieldCheck className="size-5 text-emerald-500" />
                   <span className="text-sm font-bold">Standard Certified</span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
             </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
