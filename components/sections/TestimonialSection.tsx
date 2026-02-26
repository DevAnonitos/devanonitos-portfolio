'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { TESTIMONIALS } from '@/constants'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { Testimonial } from '@/types'
import { Quote, Star } from 'lucide-react'
import { motion } from 'motion/react'

const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: Testimonial
  className?: string
}) => (
  <div
    className={cn(
      'bg-card/30 border-border/50 hover:border-primary/40 hover:bg-card/50 group relative w-[350px] flex-shrink-0 overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-xl transition-all duration-500 md:w-[450px]',
      className,
    )}
  >
    {/* Background Quote Icon Decoration */}
    <Quote className='absolute -top-4 -right-4 size-32 rotate-12 opacity-[0.03] transition-opacity group-hover:opacity-[0.05]' />

    <div className='relative space-y-6'>
      <div className='flex items-center gap-1 text-amber-500'>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className='size-4 fill-current' />
        ))}
      </div>

      <p className='text-muted-foreground group-hover:text-foreground line-clamp-4 text-lg leading-relaxed italic transition-colors'>
        &quot;{testimonial.content}&quot;
      </p>

      <div className='border-border/40 flex items-center gap-4 border-t pt-4'>
        <div className='relative'>
          <div className='border-primary/20 bg-primary/10 size-12 overflow-hidden rounded-2xl border-2'>
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className='h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0'
            />
          </div>
          <div className='border-background absolute -right-1 -bottom-1 size-4 rounded-full border-2 bg-emerald-500' />
        </div>

        <div>
          <h4 className='text-foreground font-bold tracking-tight'>{testimonial.name}</h4>
          <p className='text-muted-foreground/80 text-xs font-medium tracking-widest uppercase'>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
)

const TestimonialSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  // Divide testimonials into two rows for the marquee
  const firstRow = TESTIMONIALS.slice(0, 3)
  const secondRow = TESTIMONIALS.slice(3, 6)

  return (
    <section id='testimonials' className='bg-background relative overflow-hidden py-24'>
      {/* Decorative Ornaments */}
      <div className='bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]' />

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
                className='text-primary border-primary/20 bg-primary/5 rounded-full px-4 py-1'
              >
                Social Proof
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-6xl'
            >
              Trusted by{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                Visionaries
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed'
            >
              Don&apos;t just take my word for it. Here&apos;s what industry leaders and colleagues
              have to say about our collaborations.
            </motion.p>
          </div>

          {/* Infinite Marquee Rows */}
          <div className='relative space-y-8'>
            {/* Fade Gradients for Edges */}
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l to-transparent' />

            {/* Row 1 - Direct */}
            <div className='flex overflow-hidden'>
              <motion.div
                animate={{ x: [0, -1350] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='flex gap-8 pr-8'
              >
                {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Reverse */}
            <div className='flex overflow-hidden'>
              <motion.div
                animate={{ x: [-1350, 0] }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='flex gap-8 pr-8'
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
            className='flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale transition-opacity hover:opacity-60'
          >
            {['TechFlow', 'InsightAI', 'StartupX', 'CreativeDesign', 'CloudSolutions'].map(
              (brand) => (
                <span
                  key={brand}
                  className='text-xl font-black tracking-tighter whitespace-nowrap uppercase'
                >
                  {brand}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TestimonialSection
