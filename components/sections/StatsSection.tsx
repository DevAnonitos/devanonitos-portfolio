'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { Stat } from '@/types'
import { Code2, Cpu, Trophy, Users2, Zap } from 'lucide-react'
import { motion, useInView, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

// Component: Animated Counter Number
const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  })

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString())

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  return (
    <span ref={ref} className='tabular-nums'>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

const STATS: Stat[] = [
  {
    label: 'Years of Experience',
    value: 5,
    suffix: '+',
    icon: Trophy,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description: 'Building scalable digital solutions',
  },
  {
    label: 'Projects Completed',
    value: 120,
    suffix: '+',
    icon: Code2,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description: 'From MVPs to Enterprise Apps',
  },
  {
    label: 'Global Clients',
    value: 45,
    suffix: '+',
    icon: Users2,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    description: 'Across 15+ different countries',
  },
  {
    label: 'Lines of Code',
    value: 850,
    suffix: 'k+',
    icon: Zap,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    description: 'Written with precision and care',
  },
]

const StatsSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='stats' className='bg-background relative overflow-hidden py-24'>
      {/* Premium Technical Ornaments */}
      <div className='bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]' />
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] bg-[size:64px_64px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-20'
        >
          {/* Header */}
          <div className='mx-auto max-w-3xl space-y-6 text-center'>
            <motion.div variants={FADE_IN_UP} className='flex justify-center'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Success Metrics
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-6xl'
            >
              Numbers that define{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text font-black text-transparent'>
                Performance
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed'
            >
              Behind every line of code resides a commitment to excellence, delivering tangible
              results through measurable impact.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className='group border-border/50 bg-card/20 hover:border-primary/30 hover:bg-card/40 hover:shadow-primary/5 relative rounded-[3rem] border p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl'
              >
                <div className='space-y-6 text-center lg:text-left'>
                  {/* Icon Indicator */}
                  <div
                    className={cn(
                      'mx-auto flex size-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 lg:mx-0',
                      stat.bg,
                      stat.color,
                    )}
                  >
                    <stat.icon className='size-7' />
                  </div>

                  {/* Main Value */}
                  <div className='space-y-1'>
                    <h3 className='text-foreground font-mono text-5xl font-black tracking-tighter'>
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className='text-muted-foreground group-hover:text-primary text-sm font-bold tracking-widest uppercase transition-colors'>
                      {stat.label}
                    </p>
                  </div>

                  {/* Description */}
                  <p className='text-muted-foreground/80 text-xs leading-relaxed font-medium'>
                    {stat.description}
                  </p>
                </div>

                {/* Aesthetic Corner Stamp */}
                <div className='text-primary/5 group-hover:text-primary/10 absolute top-8 right-8 transition-colors'>
                  <Cpu className='size-10' />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Badge Decoration */}
          <motion.div variants={FADE_IN_UP} className='flex flex-col items-center gap-6 pt-12'>
            <div className='from-primary/50 h-16 w-px bg-gradient-to-b to-transparent' />
            <p className='text-muted-foreground/30 px-4 text-center font-mono text-[10px] font-bold tracking-[0.5em] uppercase'>
              Continuous Improvement Cycle // Efficiency Optimized V4.2
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default StatsSection
