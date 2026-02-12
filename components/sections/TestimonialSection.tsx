"use client"

import React from 'react';
import Container from '@/components/layout/Container';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS } from '@/constants';
import { useScrollReveal } from '@/hooks';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ testimonial, className }: { testimonial: typeof TESTIMONIALS[0], className?: string }) => (
  <div className={cn(
    "flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-[2.5rem] bg-card/30 border border-border/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-card/50 group relative overflow-hidden",
    className
  )}>
    {/* Background Quote Icon Decoration */}
    <Quote className="absolute -right-4 -top-4 size-32 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12" />
    
    <div className="relative space-y-6">
      <div className="flex items-center gap-1 text-amber-500">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      
      <p className="text-muted-foreground leading-relaxed italic text-lg line-clamp-4 group-hover:text-foreground transition-colors">
        &quot;{testimonial.content}&quot;
      </p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-border/40">
        <div className="relative">
          <div className="size-12 rounded-2xl overflow-hidden border-2 border-primary/20 bg-primary/10">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-background" />
        </div>
        
        <div>
          <h4 className="font-bold tracking-tight text-foreground">{testimonial.name}</h4>
          <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 });

  // Divide testimonials into two rows for the marquee
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3, 6);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                Social Proof
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-6xl font-bold tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Visionaries</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg leading-relaxed mx-auto max-w-2xl">
              Don&apos;t just take my word for it. Here&apos;s what industry leaders and colleagues 
              have to say about our collaborations.
            </motion.p>
          </div>

          {/* Infinite Marquee Rows */}
          <div className="space-y-8 relative">
            {/* Fade Gradients for Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Row 1 - Direct */}
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: [0, -1350] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-8 pr-8"
              >
                {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Reverse */}
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: [-1350, 0] }}
                transition={{ 
                  duration: 45, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-8 pr-8"
              >
                {[...secondRow, ...secondRow, ...secondRow].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Trust Icons */}
          <motion.div 
            variants={FADE_IN_UP}
            className="flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale hover:opacity-60 transition-opacity"
          >
            {['TechFlow', 'InsightAI', 'StartupX', 'CreativeDesign', 'CloudSolutions'].map((brand) => (
              <span key={brand} className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">{brand}</span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
