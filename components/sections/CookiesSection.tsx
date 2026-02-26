'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import {
  Cookie,
  Settings,
  BarChart3,
  ShieldCheck,
  Info,
  MousePointer2,
  Lock,
  RefreshCcw,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { Separator } from '@/components/ui/separator'

const COOKIE_TYPES = [
  {
    icon: ShieldCheck,
    title: 'Essential Cookies',
    content:
      'Crucial for basic site functionality. These allow you to navigate the site and use essential features like secure sessions and preference memory.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: BarChart3,
    title: 'Analytics Cookies',
    content:
      'Help us understand how visitors interact with our portfolio by collecting and reporting information anonymously. We use this to improve performance.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Settings,
    title: 'Preference Cookies',
    content:
      'Enable the site to remember information that changes the way the site behaves or looks, such as your preferred theme (Dark/Light) or region.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: MousePointer2,
    title: 'User Control',
    content:
      'You have the absolute right to manage your cookie preferences through your browser settings or our dedicated cookie management interface.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
]

const CookiesSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='cookies' className='bg-background relative overflow-hidden py-24'>
      {/* Premium Background Ornaments */}
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
          {/* Header */}
          <div className='space-y-6 text-center'>
            <motion.div variants={FADE_IN_UP} className='flex justify-center'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
              >
                Privacy Transparency
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              Cookie{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                Protocol
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl'
            >
              How we use small data fragments to enhance your interaction with our digital
              environment while maintaining absolute privacy.
            </motion.p>
          </div>

          {/* Cookie Types Grid */}
          <div className='grid gap-8 pt-8 md:grid-cols-2'>
            {COOKIE_TYPES.map((type, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className='group border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 rounded-[2.5rem] border p-8 shadow-sm backdrop-blur-xl transition-all duration-500'
              >
                <div className='flex items-start gap-6'>
                  <div
                    className={`rounded-2xl p-4 ${type.bg} ${type.color} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <type.icon className='size-6' />
                  </div>
                  <div className='space-y-3'>
                    <h3 className='group-hover:text-primary text-xl font-bold tracking-tight transition-colors'>
                      {type.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
                      {type.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Policy Content */}
          <motion.div
            variants={FADE_IN_UP}
            className='border-border/50 bg-card/10 space-y-12 rounded-[3rem] border p-10 backdrop-blur-md md:p-16'
          >
            <div className='text-primary flex items-center gap-4'>
              <Info className='size-8' />
              <h3 className='text-foreground text-3xl font-bold tracking-tight'>Usage Details</h3>
            </div>

            <div className='text-muted-foreground space-y-12 leading-relaxed'>
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>01.</span> What are Cookies?
                </h4>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device
                  when you visit a website. They are widely used to make websites work, or work more
                  efficiently, as well as to provide information to the owners of the site.
                </p>
              </section>

              <Separator className='bg-border/50' />

              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>02.</span> How we use them
                </h4>
                <p>
                  On this portfolio, we use cookies to recognize your device and remember your
                  preferences (like choosing between dark and light mode). We also use them for
                  internal analytics to see which sections are most popular, helping us optimize the
                  user experience for everyone.
                </p>
              </section>

              <Separator className='bg-border/50' />

              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>03.</span> Managing your
                  preferences
                </h4>
                <div className='bg-primary/5 border-primary/20 flex flex-col items-center justify-between gap-8 rounded-2xl border p-8 md:flex-row'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-primary/10 text-primary rounded-xl p-3 font-bold'>
                      <RefreshCcw className='size-5' />
                    </div>
                    <div>
                      <p className='text-primary/60 text-xs font-bold tracking-widest uppercase'>
                        System Toggle
                      </p>
                      <p className='text-foreground font-semibold'>Reset Cookie Preferences</p>
                    </div>
                  </div>
                  <button className='bg-primary text-primary-foreground shadow-primary/20 flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-bold shadow-lg transition-transform hover:scale-105'>
                    <Lock className='size-4' />
                    Manage Settings
                  </button>
                </div>
                <p className='text-sm italic'>
                  Note: Disabling certain cookies may impact the visual consistency and interactive
                  features of the portfolio.
                </p>
              </section>
            </div>

            <div className='pt-8 text-center'>
              <p className='text-muted-foreground/40 font-mono text-[10px] font-bold tracking-widest uppercase'>
                Protocol Version: 1.0.2 // Zero-Data Tracking Compliant
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CookiesSection
