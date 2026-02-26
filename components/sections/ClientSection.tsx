'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { CLIENTS } from '@/constants/clients'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'

const ClientSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section
      id='clients'
      className='bg-background/50 border-border/20 relative overflow-hidden border-y py-20'
    >
      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-12'
        >
          <motion.p
            variants={FADE_IN_UP}
            className='text-muted-foreground/40 text-center text-xs font-bold tracking-[0.4em] uppercase'
          >
            Trusted by Industry Leaders
          </motion.p>

          <div className='group flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale transition-all duration-700 hover:opacity-100 md:gap-24'>
            {CLIENTS.map((client) => (
              <motion.div key={client.id} variants={FADE_IN_UP} className='group/client'>
                {/* Since we don't have real logos, we use styled text as placeholders */}
                <span className='group-hover/client:text-primary text-xl font-black tracking-tighter whitespace-nowrap uppercase transition-colors duration-500 md:text-3xl'>
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ClientSection
