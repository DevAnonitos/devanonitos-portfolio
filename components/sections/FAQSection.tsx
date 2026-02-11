"use client"

import React from 'react';
import { Container } from '../layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { MessageCircleQuestion } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQS } from '@/constants';
import { useScrollReveal } from '@/hooks';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations';

const FAQSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.section 
      ref={ref}
      id="faq" 
      initial="hidden"
      animate={controls}
      variants={FADE_IN_UP}
      className="py-24 bg-card/30"
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-16">
          {/* Header Section */}
          <motion.div variants={STAGGER_CONTAINER} className="w-full md:w-1/3 space-y-4">
            <motion.div variants={FADE_IN_UP}>
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                Support
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-3xl md:text-4xl font-bold tracking-tight">
              Common Questions
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg leading-relaxed">
              Find answers to the most frequently asked questions about my services and development process.
            </motion.p>
            <motion.div variants={FADE_IN_UP} className="hidden md:flex items-center gap-3 pt-6 text-sm font-medium text-foreground/80">
              <div className="p-2 rounded-full bg-primary/10">
                <MessageCircleQuestion className="size-5 text-primary" />
              </div>
              <span>Need more help? Contact me directly.</span>
            </motion.div>
          </motion.div>

          {/* Accordion Section */}
          <motion.div variants={FADE_IN_UP} className="w-full md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-xl px-6 transition-all hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-base md:text-lg hover:no-underline py-6 font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQSection;
