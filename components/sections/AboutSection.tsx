"use client"

import React from 'react';
import Container from '@/components/layout/Container';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { DEVELOPER_INFO } from '@/constants';
import { useScrollReveal } from '@/hooks';
import { FADE_IN_UP, STAGGER_CONTAINER, REVEAL_LEFT, REVEAL_RIGHT } from '@/constants/animations';
import { Code2, Cpu, Globe, Rocket, User, Sparkles } from 'lucide-react';
import Image from 'next/image';

const STATS = [
  { label: 'Years of Experience', value: '5+', icon: Cpu },
  { label: 'Project Completed', value: '50+', icon: Rocket },
  { label: 'Happy Clients', value: '30+', icon: User },
  { label: 'Global Reach', value: '10+', icon: Globe },
];

const AboutSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image/Visual Element */}
          <motion.div variants={REVEAL_LEFT} className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-3xl -rotate-6 scale-105" />
            <div className="absolute inset-0 bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
               {/* Replace with actual image if available, using placeholder for now */}
               <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center relative">
                  <User className="size-32 text-muted-foreground/20" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-none">Solving Problems</p>
                        <p className="text-xs text-muted-foreground mt-1 text-nowrap">One line of code at a time</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Floating decoration elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-3 rounded-2xl bg-background shadow-xl border border-border/50 hidden md:block"
            >
              <Code2 className="size-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Right: Content Section */}
          <div className="space-y-8">
            <motion.div variants={FADE_IN_UP} className="space-y-4 text-center lg:text-left">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Reality</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hi, I&apos;m <span className="text-foreground font-medium">{DEVELOPER_INFO.name}</span>. {DEVELOPER_INFO.bio}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                With a strong foundation in modern web technologies, I focus on building scalable, 
                user-centric applications that solve real-world problems. I believe in clean code, 
                thoughtful design, and continuous learning.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={FADE_IN_UP}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
            >
              {STATS.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-2xl bg-card border border-border/50 text-center space-y-2 transition-colors hover:border-primary/30"
                >
                  <div className="flex justify-center">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground leading-none">{stat.value}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={FADE_IN_UP} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 text-sm font-medium">
               <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full bg-primary" />
                 <span>UI/UX Enthusiast</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full bg-primary" />
                 <span>Problem Solver</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full bg-primary" />
                 <span>Continuous Learner</span>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
