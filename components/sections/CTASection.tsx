"use client"

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER, FADE_IN_SCALE } from '@/constants/animations'
import { Mail, Send } from 'lucide-react'
import { SOCIAL_LINKS } from '@/constants'
import Link from 'next/link'

const CTASection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={FADE_IN_SCALE}
          className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-16 lg:p-20 border border-border/50 shadow-2xl"
        >
          {/* Main Backdrop Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10 -z-10" />
          <div className="absolute inset-0 bg-card/40 backdrop-blur-xl -z-20" />
          
          <motion.div 
            variants={STAGGER_CONTAINER}
            className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto"
          >
            {/* Tagline */}
            <motion.div 
              variants={FADE_IN_UP}
              className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
            >
              Let&apos;s Build Something Together
            </motion.div>

            {/* Headline */}
            <motion.h2 
              variants={FADE_IN_UP}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Ready to bring your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">digital vision</span> to life?
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={FADE_IN_UP}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Whether you have a specific project in mind or just want to explore the possibilities, 
              I&apos;m here to help you build something extraordinary.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={FADE_IN_UP}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold group w-full sm:w-auto">
                Start a Conversation
                <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm w-full sm:w-auto">
                <Link href={`mailto:${SOCIAL_LINKS.email}`}>
                  <Mail className="mr-2 size-4" />
                  Email Me Directly
                </Link>
              </Button>
            </motion.div>

            {/* Meta Info */}
            <motion.p 
              variants={FADE_IN_UP}
              className="text-xs text-muted-foreground pt-4 flex items-center gap-2"
            >
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Currently taking on new projects for 2024
            </motion.p>
          </motion.div>

          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none hidden lg:block">
             <div className="size-32 rounded-full border-[16px] border-primary/20" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-20 pointer-events-none hidden lg:block">
             <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
             <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-2" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection