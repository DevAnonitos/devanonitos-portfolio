"use client"

import React, { useState, useMemo } from 'react';
import Container from '@/components/layout/Container';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants';
import { useScrollReveal } from '@/hooks';
import { 
  FADE_IN_UP, 
  STAGGER_CONTAINER, 
} from '@/constants/animations';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Code2, 
  Sparkles,
  Search,
  ArrowUpRight,
  Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Component: Individual Project Card
const ProjectCardItem = ({ project }: { project: typeof PROJECTS[0] }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col h-full rounded-[2.5rem] border border-border/50 bg-card/20 backdrop-blur-md overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
           <div className="flex gap-4">
              <Link 
                href={project.links.github} 
                target="_blank" 
                className="p-3 rounded-2xl bg-background/80 hover:bg-primary hover:text-primary-foreground backdrop-blur-md transition-all border border-border/50 shadow-xl"
              >
                <Github className="size-5" />
              </Link>
              <Link 
                href={project.links.demo} 
                target="_blank" 
                className="p-3 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all"
              >
                <ExternalLink className="size-5" />
              </Link>
           </div>
        </div>
        
        {/* Category Badge on Image */}
        <div className="absolute top-6 left-6">
           <Badge className="bg-background/80 blur-0 backdrop-blur-md text-foreground border-border/50 rounded-full px-4 py-1">
              {project.category}
           </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-8 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="size-5 text-muted-foreground/30 group-hover:text-primary transition-colors duration-500" />
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 px-3 py-1 bg-secondary/30 rounded-full group-hover:text-primary/70 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Component: Projects Grid Wrapper
const ProjectCardList = ({ projects }: { projects: typeof PROJECTS }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCardItem key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ProjectSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Technical Glow Ornaments */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl space-y-6">
              <motion.div variants={FADE_IN_UP}>
                <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                  Portfolio Gallery
                </Badge>
              </motion.div>
              <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Artifacts</span>
              </motion.h2>
              <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                A selection of my most challenging and impactful engineering works, 
                blending clean code with cutting-edge user experiences.
              </motion.p>
            </div>

            {/* Quick Stats Indicator */}
            <motion.div variants={FADE_IN_UP} className="hidden lg:flex items-center gap-12 font-mono">
               <div className="space-y-1">
                  <p className="text-3xl font-bold">12+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Live Apps</p>
               </div>
               <div className="h-10 w-px bg-border/50" />
               <div className="space-y-1">
                  <p className="text-3xl font-bold">45+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Open Repos</p>
               </div>
            </motion.div>
          </div>

          {/* Filtering System */}
          <motion.div 
            variants={FADE_IN_UP}
            className="flex flex-wrap items-center gap-3 p-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-[2rem] w-fit mx-auto lg:mx-0"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300",
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Display */}
          <motion.div variants={FADE_IN_UP}>
            <ProjectCardList projects={filteredProjects} />
          </motion.div>

          {/* Discover More CTA */}
          <motion.div variants={FADE_IN_UP} className="flex flex-col items-center gap-6 pt-12">
            <p className="text-muted-foreground font-medium flex items-center gap-2">
              Interested in more of my work? 
              <Layers className="size-4 animate-bounce" />
            </p>
            <Link 
              href="https://github.com/DevAnonitos" 
              target="_blank"
              className="group flex items-center gap-4 py-4 px-10 rounded-full border border-border/50 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="p-3 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Github className="size-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">GitHub Engine</p>
                <p className="text-lg font-bold">Expore Open Source</p>
              </div>
              <ArrowUpRight className="ml-4 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectSection;
