'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { DEVELOPER_INFO } from '@/constants'
import { FADE_IN_UP, REVEAL_LEFT, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import { AboutStat } from '@/types'
import { Code2, Cpu, Globe, Rocket, Sparkles, User } from 'lucide-react'
import { motion } from 'motion/react'

const STATS: AboutStat[] = [
  { label: 'Years of Experience', value: '5+', icon: Cpu },
  { label: 'Project Completed', value: '50+', icon: Rocket },
  { label: 'Happy Clients', value: '30+', icon: User },
  { label: 'Global Reach', value: '10+', icon: Globe },
]

const AboutSection = () => {
  const { ref, controls } = useScrollReveal()

  return (
    <section id='about' className='bg-background relative overflow-hidden py-24'>
      {/* Decorative background circle */}
      <div className='bg-primary/5 absolute top-1/2 right-0 -z-10 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='grid items-center gap-16 lg:grid-cols-2'
        >
          {/* Left: Image/Visual Element */}
          <motion.div
            variants={REVEAL_LEFT}
            className='relative mx-auto aspect-square max-w-md lg:mx-0'
          >
            <div className='from-primary/20 absolute inset-0 scale-105 -rotate-6 rounded-3xl bg-gradient-to-tr to-blue-600/20' />
            <div className='bg-card border-border/50 absolute inset-0 overflow-hidden rounded-3xl border shadow-2xl'>
              {/* Replace with actual image if available, using placeholder for now */}
              <div className='relative flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800'>
                <User className='text-muted-foreground/20 size-32' />
                <div className='bg-background/80 border-border/50 absolute right-6 bottom-6 left-6 rounded-xl border p-4 backdrop-blur-md'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-primary/10 rounded-lg p-2'>
                      <Sparkles className='text-primary size-5' />
                    </div>
                    <div>
                      <p className='text-foreground text-sm leading-none font-semibold'>
                        Solving Problems
                      </p>
                      <p className='text-muted-foreground mt-1 text-xs text-nowrap'>
                        One line of code at a time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='bg-background border-border/50 absolute -top-6 -right-6 hidden rounded-2xl border p-3 shadow-xl md:block'
            >
              <Code2 className='text-primary size-6' />
            </motion.div>
          </motion.div>

          {/* Right: Content Section */}
          <div className='space-y-8'>
            <motion.div variants={FADE_IN_UP} className='space-y-4 text-center lg:text-left'>
              <Badge
                variant='outline'
                className='text-primary border-primary/20 bg-primary/5 rounded-full px-4 py-1'
              >
                About Me
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight md:text-5xl'>
                Transforming Ideas into{' '}
                <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                  Reality
                </span>
              </h2>
              <p className='text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed lg:mx-0'>
                Hi, I&apos;m{' '}
                <span className='text-foreground font-medium'>{DEVELOPER_INFO.name}</span>.{' '}
                {DEVELOPER_INFO.bio}
              </p>
              <p className='text-muted-foreground mx-auto max-w-xl text-base leading-relaxed lg:mx-0'>
                With a strong foundation in modern web technologies, I focus on building scalable,
                user-centric applications that solve real-world problems. I believe in clean code,
                thoughtful design, and continuous learning.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={FADE_IN_UP}
              className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className='bg-card border-border/50 hover:border-primary/30 space-y-2 rounded-2xl border p-4 text-center transition-colors'
                >
                  <div className='flex justify-center'>
                    <stat.icon className='text-primary size-5' />
                  </div>
                  <h4 className='text-foreground text-2xl leading-none font-bold'>{stat.value}</h4>
                  <p className='text-muted-foreground text-[10px] font-bold tracking-widest uppercase'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={FADE_IN_UP}
              className='flex flex-wrap justify-center gap-4 pt-4 text-sm font-medium lg:justify-start'
            >
              <div className='flex items-center gap-2'>
                <div className='bg-primary size-1.5 rounded-full' />
                <span>UI/UX Enthusiast</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='bg-primary size-1.5 rounded-full' />
                <span>Problem Solver</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='bg-primary size-1.5 rounded-full' />
                <span>Continuous Learner</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutSection
