'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { SERVICES } from '@/constants/services'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'

const ServiceSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='services' className='bg-background relative overflow-hidden py-24'>
      {/* Decorative Ornaments */}
      <div className='bg-primary/5 absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-20'
        >
          {/* Header */}
          <div className='max-w-3xl space-y-6'>
            <motion.div variants={FADE_IN_UP}>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Specialized Services
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              Values I bring{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                to the table
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground text-lg leading-relaxed md:text-xl'
            >
              Tailored digital solutions blending technical expertise with creative problem-solving
              to help you build, scale, and innovate.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className='grid gap-8 md:grid-cols-2'>
            {SERVICES.map((service: Service, index) => (
              <motion.div
                key={service.id}
                variants={FADE_IN_UP}
                className='group border-border/50 bg-card/20 hover:border-primary/30 hover:bg-card/40 hover:shadow-primary/5 relative rounded-[3rem] border p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl md:p-12'
              >
                <div className='space-y-8'>
                  {/* Service Icon */}
                  <div
                    className={cn(
                      'flex size-16 items-center justify-center rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                      service.bg,
                      service.color,
                    )}
                  >
                    <service.icon className='size-8' />
                  </div>

                  <div className='space-y-4'>
                    <h3 className='group-hover:text-primary text-2xl font-bold tracking-tight transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed md:text-base'>
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags/List */}
                  <div className='flex flex-wrap gap-3'>
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className='bg-background/50 border-border/40 text-foreground/80 flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold tracking-wider uppercase md:text-xs'
                      >
                        <CheckCircle2 className={cn('size-3', service.color)} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className='text-primary flex items-center gap-2 pt-4 text-sm font-bold opacity-0 transition-all group-hover:gap-4 group-hover:opacity-100'>
                    <span>Discuss Project</span>
                    <ArrowRight className='size-4' />
                  </div>
                </div>

                {/* Aesthetic Corner Number */}
                <div className='text-muted-foreground/5 absolute right-10 bottom-10 translate-y-4 text-6xl font-black tracking-tighter italic opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100'>
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ServiceSection
