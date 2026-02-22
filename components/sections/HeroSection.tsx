"use client"

import React from 'react';
import { Container } from '../layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DEVELOPER_INFO, SOCIAL_LINKS } from '@/constants';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full pt-32 pb-20 overflow-hidden flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px]" 
        />
      </div>

      <Container className="relative">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={FADE_IN_UP} className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-card/50 backdrop-blur-md border border-border/50 text-xs font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </Badge>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 variants={FADE_IN_UP} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Experiences</span>
            </motion.h1>
            <motion.p variants={FADE_IN_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;m <span className="text-foreground font-semibold">{DEVELOPER_INFO.name}</span>, a {DEVELOPER_INFO.role} based in {DEVELOPER_INFO.location}. 
              {DEVELOPER_INFO.bio}
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div variants={FADE_IN_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 h-14 px-8 text-base group">
              View My Work
              <ArrowUpRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm">
              <Download className="mr-2 size-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links & Trust Indicators */}
          <motion.div variants={FADE_IN_UP} className="pt-8 border-t border-border/50 max-w-xs mx-auto">
            <div className="flex items-center justify-center gap-6">
              <Link href={SOCIAL_LINKS.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Github className="size-6" />
              </Link>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin className="size-6" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Twitter className="size-6" />
              </Link>
              <Link href={`mailto:${SOCIAL_LINKS.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Mail className="size-6" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
