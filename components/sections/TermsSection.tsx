'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import {
  ScrollText,
  Gavel,
  Copyright,
  Ban,
  Scale,
  Briefcase,
  AlertCircle,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { Separator } from '@/components/ui/separator'

const TERMS_PILLARS = [
  {
    icon: Copyright,
    title: 'Intellectual Property',
    content:
      'All code, designs, and content displayed are personal intellectual property unless stated otherwise. Commercial use requires explicit permission.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: ScrollText,
    title: 'Service Scope',
    content:
      'The services provided via this portfolio are for demonstration and professional engagement purposes only, subject to specific project contracts.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Ban,
    title: 'Prohibited Conduct',
    content:
      'Users are strictly prohibited from reverse engineering, data scraping, or attempting to compromise the security of this technical environment.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
  {
    icon: Briefcase,
    title: 'Professionalism',
    content:
      'All communications must adhere to professional guidelines. We reserve the right to terminate any interaction that violates digital ethics.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
]

const TermsSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='terms' className='bg-background relative overflow-hidden py-24'>
      {/* Dynamic Aesthetic Decoration */}
      <div className='bg-primary/5 absolute top-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]' />
      <div className='absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='mx-auto max-w-5xl space-y-20'
        >
          {/* Header Section */}
          <div className='space-y-6 text-center'>
            <motion.div variants={FADE_IN_UP} className='flex justify-center'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Usage Agreement
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              Terms of{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                Service
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl'
            >
              Clear boundaries and professional standards for interacting with our digital services
              and intellectual artifacts.
            </motion.p>
          </div>

          {/* Core Pillars Grid */}
          <div className='grid gap-8 pt-8 md:grid-cols-2'>
            {TERMS_PILLARS.map((pillar, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className='group border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 rounded-[2.5rem] border p-8 shadow-sm backdrop-blur-xl transition-all duration-500'
              >
                <div className='flex items-start gap-6'>
                  <div
                    className={`rounded-2xl p-4 ${pillar.bg} ${pillar.color} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <pillar.icon className='size-6' />
                  </div>
                  <div className='space-y-3'>
                    <h3 className='group-hover:text-primary text-xl font-bold tracking-tight transition-colors'>
                      {pillar.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
                      {pillar.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Terms Framework */}
          <motion.div
            variants={FADE_IN_UP}
            className='border-border/50 bg-card/10 space-y-12 rounded-[3rem] border p-10 backdrop-blur-md md:p-16'
          >
            <div className='text-primary flex items-center gap-4'>
              <Gavel className='size-8' />
              <h3 className='text-foreground text-3xl font-bold tracking-tight'>
                Legal Foundation
              </h3>
            </div>

            <div className='text-muted-foreground space-y-12 leading-relaxed'>
              {/* Section 01 */}
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-3 text-xl font-bold'>
                  <span className='bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-mono text-xs'>
                    01
                  </span>
                  Acceptance of Terms
                </h4>
                <p>
                  By accessing and using this Portfolio (the &quot;Site&quot;), you agree to be
                  bound by these Terms of Service and all applicable laws and regulations. If you do
                  not agree with any of these terms, you are prohibited from using or accessing this
                  site.
                </p>
              </section>

              <Separator className='bg-border/50' />

              {/* Section 02 */}
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-3 text-xl font-bold'>
                  <span className='bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-mono text-xs'>
                    02
                  </span>
                  Use License & Restrictions
                </h4>
                <div className='space-y-4'>
                  <p>
                    Permission is granted to temporarily view the materials on this site for
                    personal, non-commercial transitory viewing only. This is the grant of a
                    license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className='grid gap-3 pl-2 sm:grid-cols-1'>
                    {[
                      'Modify or copy the codebase or design assets',
                      'Use materials for any commercial purpose or public display',
                      'Remove any copyright or other proprietary notations',
                      "Transfer the materials to another person or 'mirror' the materials",
                    ].map((item, i) => (
                      <li key={i} className='flex items-center gap-3 text-sm font-medium'>
                        <ArrowRight className='text-primary size-3' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <Separator className='bg-border/50' />

              {/* Section 03 */}
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-3 text-xl font-bold'>
                  <span className='bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-mono text-xs'>
                    03
                  </span>
                  Disclaimer & Liability
                </h4>
                <div className='flex gap-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6'>
                  <AlertCircle className='mt-1 size-6 flex-shrink-0 text-rose-500' />
                  <p className='text-sm'>
                    The materials on this site are provided on an 'as is' basis. We make no
                    warranties, expressed or implied, and hereby disclaim and negate all other
                    warranties including, without limitation, implied warranties or conditions of
                    merchantability, fitness for a particular purpose.
                  </p>
                </div>
              </section>

              <Separator className='bg-border/50' />

              {/* Section 04 */}
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-3 text-xl font-bold'>
                  <span className='bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-mono text-xs'>
                    04
                  </span>
                  Governing Law
                </h4>
                <p>
                  Any claim relating to this site shall be governed by the laws of Vietnam without
                  regard to its conflict of law provisions. Any legal action or proceeding related
                  to your access to, or use of, the Site shall be instituted in a court in Ho Chi
                  Minh City, VN.
                </p>
              </section>
            </div>

            {/* Footer Stamp */}
            <div className='border-border/50 border-t pt-12 text-center'>
              <div className='bg-secondary/30 text-muted-foreground/60 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase'>
                <Scale className='size-3' />
                Last Sync: Feb 2026 // Terms v1.1.0
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TermsSection
