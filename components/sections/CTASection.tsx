'use client'

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
  const { ref, controls } = useScrollReveal()

  return (
    <section id='cta' className='bg-background relative overflow-hidden py-24'>
      {/* Background Decorative Blur */}
      <div className='bg-primary/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={FADE_IN_SCALE}
          className='border-border/50 relative overflow-hidden rounded-[2.5rem] border p-8 shadow-2xl md:p-16 lg:p-20'
        >
          {/* Main Backdrop Gradient */}
          <div className='from-primary/10 via-background absolute inset-0 -z-10 bg-gradient-to-br to-blue-500/10' />
          <div className='bg-card/40 absolute inset-0 -z-20 backdrop-blur-xl' />

          <motion.div
            variants={STAGGER_CONTAINER}
            className='mx-auto flex max-w-3xl flex-col items-center space-y-8 text-center'
          >
            {/* Tagline */}
            <motion.div
              variants={FADE_IN_UP}
              className='border-primary/20 bg-primary/5 text-primary rounded-full border px-4 py-1 text-xs font-bold tracking-widest uppercase'
            >
              Let&apos;s Build Something Together
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl'
            >
              Ready to bring your{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                digital vision
              </span>{' '}
              to life?
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl'
            >
              Whether you have a specific project in mind or just want to explore the possibilities,
              I&apos;m here to help you build something extraordinary.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={FADE_IN_UP}
              className='flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row'
            >
              <Button
                size='lg'
                className='group h-14 w-full rounded-full px-8 text-base font-semibold sm:w-auto'
              >
                Start a Conversation
                <Send className='ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
              </Button>

              <Button
                size='lg'
                variant='outline'
                asChild
                className='bg-background/50 h-14 w-full rounded-full px-8 text-base font-semibold backdrop-blur-sm sm:w-auto'
              >
                <Link href={`mailto:${SOCIAL_LINKS.email}`}>
                  <Mail className='mr-2 size-4' />
                  Email Me Directly
                </Link>
              </Button>
            </motion.div>

            {/* Meta Info */}
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground flex items-center gap-2 pt-4 text-xs'
            >
              <span className='size-1.5 animate-pulse rounded-full bg-green-500' />
              Currently taking on new projects for 2024
            </motion.p>
          </motion.div>

          {/* Abstract Decorations */}
          <div className='pointer-events-none absolute top-0 right-0 hidden p-8 opacity-20 lg:block'>
            <div className='border-primary/20 size-32 rounded-full border-[16px]' />
          </div>
          <div className='pointer-events-none absolute bottom-0 left-0 hidden p-8 opacity-20 lg:block'>
            <div className='from-primary h-1 w-32 rounded-full bg-gradient-to-r to-transparent' />
            <div className='from-primary/50 mt-2 h-1 w-24 rounded-full bg-gradient-to-r to-transparent' />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
