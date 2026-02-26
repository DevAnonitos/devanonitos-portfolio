'use client'

import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import { motion, AnimatePresence } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { EXPERIENCES } from '@/constants'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER, FADE_IN_SCALE } from '@/constants/animations'
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
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ExperienceSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id='experience' className='bg-background/50 relative overflow-hidden py-32'>
      {/* Dynamic Background Elements */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='bg-primary/5 absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full opacity-50 blur-[120px]' />
        <div className='absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 opacity-30 blur-[120px]' />
        <div className='absolute inset-0 bg-[grid-white-500/0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-24'
        >
          {/* Section Header */}
          <div className='mx-auto max-w-4xl space-y-8 text-center'>
            <motion.div variants={FADE_IN_UP} className='flex justify-center'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Career Trajectory
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              My{' '}
              <span className='from-primary bg-gradient-to-r via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
                Professional Narrative
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl'
            >
              A record of my professional growth, key contributions, and the specialized
              environments where I&apos;ve honed my technical and collaborative skills.
            </motion.p>
          </div>

          {/* New Interactive Timeline */}
          <div className='relative mx-auto max-w-5xl'>
            {/* The Timeline Central Spine */}
            <div className='from-primary/50 via-border absolute top-0 bottom-0 left-4 w-px -translate-x-1/2 bg-gradient-to-b to-transparent md:left-1/2' />

            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  variants={FADE_IN_UP}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    'relative mb-20 flex w-full flex-col items-start md:mb-32 md:flex-row md:items-center',
                    isEven ? 'md:flex-row-reverse' : '',
                  )}
                >
                  {/* Timeline Node - The Step Indicator */}
                  <div className='absolute top-8 left-4 z-20 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-1/2'>
                    <div className='relative'>
                      <motion.div
                        initial={false}
                        animate={
                          hoveredIndex === index
                            ? { scale: 1.2, rotate: 90 }
                            : { scale: 1, rotate: 0 }
                        }
                        className={cn(
                          'bg-background flex size-10 items-center justify-center rounded-2xl border-2 shadow-xl transition-colors duration-500 md:size-14',
                          hoveredIndex === index
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-card text-muted-foreground',
                        )}
                      >
                        <Briefcase className='size-5 md:size-6' />
                      </motion.div>
                      {/* Pulse Ring */}
                      <div
                        className={cn(
                          'bg-primary/20 absolute inset-0 -z-10 animate-ping rounded-2xl opacity-0',
                          hoveredIndex === index ? 'opacity-100' : '',
                        )}
                      />
                    </div>
                  </div>

                  {/* Date Indicator (Mobile: above card, Desktop: opposite of card) */}
                  <div
                    className={cn(
                      'mb-4 flex w-full px-12 md:mb-0 md:w-1/2 md:px-16',
                      isEven
                        ? 'justify-start text-right md:justify-end'
                        : 'justify-start text-left',
                    )}
                  >
                    <div className='space-y-1'>
                      <div className='text-primary flex items-center gap-2 text-xl font-bold tracking-tighter'>
                        <Calendar className='size-5 opacity-70' />
                        <span>{exp.period}</span>
                      </div>
                      <div className='text-muted-foreground/40 text-[10px] font-bold tracking-[0.3em] uppercase'>
                        Verified Roadmap
                      </div>
                    </div>
                  </div>

                  {/* The Experience Card */}
                  <div className='w-full px-4 md:w-1/2 md:px-8'>
                    <div
                      className={cn(
                        'border-border/50 bg-card/40 group relative overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-xl transition-all duration-700',
                        hoveredIndex === index
                          ? 'border-primary/40 shadow-primary/5 translate-y-[-4px] shadow-2xl'
                          : '',
                      )}
                    >
                      {/* Sub-Header Branding */}
                      <div className='mb-6 flex items-start justify-between'>
                        <div className='space-y-2'>
                          <h3 className='group-hover:text-primary text-2xl leading-tight font-bold tracking-tight transition-colors md:text-3xl'>
                            {exp.role}
                          </h3>
                          <div className='text-muted-foreground/80 flex items-center gap-2 text-sm font-semibold'>
                            <Building2 className='text-primary/60 size-4' />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className='bg-secondary/30 text-muted-foreground group-hover:text-primary rounded-2xl p-3 transition-colors'>
                          <ShieldCheck className='size-5' />
                        </div>
                      </div>

                      {/* Description Area */}
                      <p className='text-muted-foreground/90 mb-6 text-sm leading-relaxed font-medium md:text-base'>
                        {exp.description}
                      </p>

                      {/* Tags Cloud - Integration with new data! */}
                      {exp.tags && (
                        <div className='mb-8 flex flex-wrap gap-2'>
                          {exp.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className='bg-primary/5 border-primary/10 text-primary/70 group-hover:border-primary/30 group-hover:text-primary cursor-default rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-all'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Achievements - Compact Vertical List */}
                      <div className='space-y-3'>
                        {exp.achievements.map((item, aIdx) => (
                          <div
                            key={aIdx}
                            className='bg-background/30 group-hover:border-border/40 hover:bg-background/60 flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all'
                          >
                            <div className='mt-1 flex-shrink-0'>
                              <CheckCircle2 className='size-4 text-emerald-500 opacity-60' />
                            </div>
                            <span className='text-foreground/70 text-xs leading-relaxed font-semibold md:text-sm'>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Card Decoration Ornament */}
                      <div className='pointer-events-none absolute right-0 bottom-0 p-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.08]'>
                        <div className='text-8xl font-black tracking-tighter italic'>
                          0{index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Professional Finish Indicator */}
          <motion.div variants={FADE_IN_UP} className='flex flex-col items-center gap-10 pt-16'>
            <div className='from-border h-24 w-px bg-gradient-to-b to-transparent' />

            <div className='group border-border/50 bg-card/10 hover:shadow-primary/5 relative mx-auto max-w-2xl overflow-hidden rounded-[3rem] border px-12 py-8 text-center shadow-sm backdrop-blur-md transition-all hover:shadow-2xl'>
              {/* Decorative Elements */}
              <div className='absolute top-0 right-0 p-8 opacity-5'>
                <Trophy className='size-24' />
              </div>

              <div className='relative z-10 space-y-4'>
                <h4 className='text-2xl font-bold tracking-tight'>
                  Continuous Growth & Contribution
                </h4>
                <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
                  I am committed to excellence, leveraging my academic background and practical
                  experience to drive value in any organizational context.
                </p>
                <div className='flex items-center justify-center gap-6 pt-4'>
                  <div className='flex items-center gap-2'>
                    <Star className='size-4 text-amber-500' />
                    <span className='text-muted-foreground/60 text-xs font-bold tracking-widest uppercase'>
                      Agile Mindset
                    </span>
                  </div>
                  <div className='bg-border size-1 rounded-full' />
                  <div className='flex items-center gap-2'>
                    <CheckCircle2 className='size-4 text-emerald-500' />
                    <span className='text-muted-foreground/60 text-xs font-bold tracking-widest uppercase'>
                      Reliable & Proactive
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ExperienceSection
