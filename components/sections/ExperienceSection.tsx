"use client"

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import { motion, AnimatePresence } from 'motion/react';
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
  Building2, 
  Trophy,
  ArrowUpRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ExperienceSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute inset-0 bg-[grid-white-500/0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-24"
        >
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Career Trajectory
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">Professional Narrative</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A record of my professional growth, key contributions, and the specialized environments 
              where I&apos;ve honed my technical and collaborative skills.
            </motion.p>
          </div>

          {/* New Interactive Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* The Timeline Central Spine */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent -translate-x-1/2" />

            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={FADE_IN_UP}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative mb-20 md:mb-32 flex flex-col md:flex-row items-start md:items-center w-full",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Node - The Step Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                     <div className="relative">
                        <motion.div 
                          initial={false}
                          animate={hoveredIndex === index ? { scale: 1.2, rotate: 90 } : { scale: 1, rotate: 0 }}
                          className={cn(
                            "size-10 md:size-14 rounded-2xl bg-background border-2 flex items-center justify-center shadow-xl transition-colors duration-500",
                            hoveredIndex === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
                          )}
                        >
                           <Briefcase className="size-5 md:size-6" />
                        </motion.div>
                        {/* Pulse Ring */}
                        <div className={cn(
                          "absolute inset-0 rounded-2xl bg-primary/20 -z-10 animate-ping opacity-0",
                          hoveredIndex === index ? "opacity-100" : ""
                        )} />
                     </div>
                  </div>

                  {/* Date Indicator (Mobile: above card, Desktop: opposite of card) */}
                  <div className={cn(
                    "w-full md:w-1/2 flex mb-4 md:mb-0 px-12 md:px-16",
                    isEven ? "justify-start md:justify-end text-right" : "justify-start text-left"
                  )}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary font-bold tracking-tighter text-xl">
                        <Calendar className="size-5 opacity-70" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/40">Verified Roadmap</div>
                    </div>
                  </div>

                  {/* The Experience Card */}
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className={cn(
                      "relative rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-xl p-8 transition-all duration-700 overflow-hidden group",
                      hoveredIndex === index ? "border-primary/40 shadow-2xl shadow-primary/5 translate-y-[-4px]" : ""
                    )}>
                      {/* Sub-Header Branding */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="space-y-2">
                           <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                            {exp.role}
                           </h3>
                           <div className="flex items-center gap-2 text-muted-foreground/80 font-semibold text-sm">
                             <Building2 className="size-4 text-primary/60" />
                             <span>{exp.company}</span>
                           </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-secondary/30 text-muted-foreground group-hover:text-primary transition-colors">
                           <ShieldCheck className="size-5" />
                        </div>
                      </div>

                      {/* Description Area */}
                      <p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        {exp.description}
                      </p>

                      {/* Tags Cloud - Integration with new data! */}
                      {exp.tags && (
                        <div className="flex flex-wrap gap-2 mb-8">
                          {exp.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] uppercase font-bold tracking-wider text-primary/70 group-hover:border-primary/30 group-hover:text-primary transition-all cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Achievements - Compact Vertical List */}
                      <div className="space-y-3">
                        {exp.achievements.map((item, aIdx) => (
                          <div 
                            key={aIdx} 
                            className="flex items-start gap-4 p-4 rounded-2xl bg-background/30 border border-transparent group-hover:border-border/40 transition-all hover:bg-background/60"
                          >
                            <div className="mt-1 flex-shrink-0">
                               <CheckCircle2 className="size-4 text-emerald-500 opacity-60" />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-foreground/70 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Card Decoration Ornament */}
                      <div className="absolute bottom-0 right-0 p-6 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                         <div className="text-8xl font-black italic tracking-tighter">0{index + 1}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Professional Finish Indicator */}
          <motion.div variants={FADE_IN_UP} className="flex flex-col items-center gap-10 pt-16">
             <div className="h-24 w-px bg-gradient-to-b from-border to-transparent" />
             
             <div className="relative group px-12 py-8 rounded-[3rem] border border-border/50 bg-card/10 backdrop-blur-md overflow-hidden text-center max-w-2xl mx-auto shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/5">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Trophy className="size-24" />
                </div>
                
                <div className="space-y-4 relative z-10">
                   <h4 className="text-2xl font-bold tracking-tight">Continuous Growth & Contribution</h4>
                   <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                      I am committed to excellence, leveraging my academic background 
                      and practical experience to drive value in any organizational context.
                   </p>
                   <div className="flex items-center justify-center gap-6 pt-4">
                      <div className="flex items-center gap-2">
                         <Star className="size-4 text-amber-500" />
                         <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Agile Mindset</span>
                      </div>
                      <div className="size-1 rounded-full bg-border" />
                      <div className="flex items-center gap-2">
                         <CheckCircle2 className="size-4 text-emerald-500" />
                         <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Reliable & Proactive</span>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
