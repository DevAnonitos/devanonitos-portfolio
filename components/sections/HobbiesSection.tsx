'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { HOBBIES } from '@/constants/hobbies'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

const HobbiesSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='hobbies' className='bg-background relative overflow-hidden py-24'>
      {/* Background Ornaments */}
      <div className='bg-primary/5 absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]' />
      <div className='absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-16'
        >
          {/* Header */}
          <div className='mx-auto max-w-3xl space-y-6 text-center'>
            <motion.div variants={FADE_IN_UP} className='flex justify-center'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Life Outside Code
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              Beyond the{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text font-black text-transparent'>
                Architecture
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground text-lg leading-relaxed md:text-xl'
            >
              When I&apos;m not architecting systems, I&apos;m exploring new perspectives,
              disciplines, and cultures that fuel my creativity.
            </motion.p>
          </div>

          {/* Hobbies Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {HOBBIES.map((hobby, index) => (
              <HobbyCard key={index} hobby={hobby} index={index} />
            ))}
          </div>

          {/* Bottom Footnote */}
          <motion.div variants={FADE_IN_UP} className='pt-8 text-center'>
            <p className='text-muted-foreground/30 font-mono text-[10px] font-bold tracking-[0.5em] uppercase'>
              Balance // Creativity // Perspective
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

const HobbyCard = ({ hobby, index }: { hobby: any; index: number }) => {
  const Icon = hobby.icon

  return (
    <motion.div className='group border-border/50 bg-card/30 relative h-[400px] overflow-hidden rounded-[3rem] border backdrop-blur-xl'>
      {/* Dynamic Background Mesh */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-700 group-hover:opacity-100',
          hobby.color,
        )}
      />

      {/* Content Container */}
      <div className='relative z-10 flex h-full flex-col justify-between p-10'>
        {/* Icon & Decor */}
        <div className='flex items-start justify-between'>
          <div className='bg-background/50 border-border/50 group-hover:bg-primary group-hover:text-primary-foreground rounded-2xl border p-4 backdrop-blur-md transition-all duration-500 group-hover:scale-110'>
            <Icon className='size-6' />
          </div>
          <span className='text-foreground/5 group-hover:text-primary/10 pointer-events-none text-4xl font-black transition-colors duration-500'>
            0{index + 1}
          </span>
        </div>

        {/* Text Details */}
        <div className='space-y-4'>
          <h3 className='text-foreground text-2xl font-bold tracking-tight transition-transform group-hover:translate-x-1'>
            {hobby.title}
          </h3>
          <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
            {hobby.description}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 pt-2'>
            {hobby.tags.map((tag: string, tidx: number) => (
              <span
                key={tidx}
                className='bg-background/30 border-border/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-all'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Reveal Glow */}
      <div className='bg-primary/20 absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 opacity-0 blur-[60px] transition-opacity group-hover:opacity-100' />
    </motion.div>
  )
}

export default HobbiesSection
