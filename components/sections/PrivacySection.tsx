'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Lock, Eye, FileText, Cookie, UserCheck, Mail, Scale } from 'lucide-react'
import { useScrollReveal } from '@/hooks'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { Separator } from '@/components/ui/separator'

const PRIVACY_CONTENT = [
  {
    icon: ShieldCheck,
    title: 'Data Protection',
    content:
      'We take the security of your data seriously. All information processed through this portfolio is encrypted and handled with the highest standards of digital hygiene.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Eye,
    title: 'Information Collection',
    content:
      'We only collect minimal technical data necessary for site optimization and security, such as anonymized IP addresses and usage patterns through sustainable analytics.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Cookie,
    title: 'Cookie Policy',
    content:
      'Our site uses persistent cookies solely to remember your preferences (like dark mode) and to provide a seamless browsing experience across sessions.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    content:
      'You have the full right to access, rectify, or request the deletion of any personal information you may have provided via our contact forms at any time.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
]

const PrivacySection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='privacy' className='bg-background relative overflow-hidden py-24'>
      {/* Premium Background Ornaments */}
      <div className='bg-primary/5 absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]' />
      <div className='absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]' />

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
                Legal Compliance
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-4xl font-bold tracking-tight md:text-7xl'
            >
              Privacy{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                Protocol
              </span>
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl'
            >
              Transparent rules on how we handle and protect your digital footprint while you
              explore our technical artifacts.
            </motion.p>
          </div>

          {/* Key Principles Grid */}
          <div className='grid gap-8 pt-8 md:grid-cols-2'>
            {PRIVACY_CONTENT.map((item, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className='group border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 rounded-[2.5rem] border p-8 shadow-sm backdrop-blur-xl transition-all duration-500'
              >
                <div className='flex items-start gap-6'>
                  <div
                    className={`rounded-2xl p-4 ${item.bg} ${item.color} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <item.icon className='size-6' />
                  </div>
                  <div className='space-y-3'>
                    <h3 className='group-hover:text-primary text-xl font-bold tracking-tight transition-colors'>
                      {item.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Legal Text Area */}
          <motion.div
            variants={FADE_IN_UP}
            className='border-border/50 bg-card/10 space-y-12 rounded-[3rem] border p-10 backdrop-blur-md md:p-16'
          >
            <div className='text-primary flex items-center gap-4'>
              <Scale className='size-8' />
              <h3 className='text-foreground text-3xl font-bold tracking-tight'>
                Detailed Framework
              </h3>
            </div>

            <div className='text-muted-foreground grid gap-12 leading-relaxed lg:grid-cols-1'>
              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>01.</span> Introduction
                </h4>
                <p>
                  This Privacy Policy describes how [Your Name/DevAnonitos] (the &quot;Site&quot;,
                  &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses
                  your personal information when you visit, use our services, or make a purchase
                  from [Your Portfolio URL] (the &quot;Site&quot;) or otherwise communicate with us
                  (collectively, the &quot;Services&quot;).
                </p>
              </section>

              <Separator className='bg-border/50' />

              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>02.</span> Use of Personal
                  Information
                </h4>
                <p>
                  We use your personal information to provide you with the Services, which includes:
                  technical maintenance, responding to inquiries via the contact form, and improving
                  the site navigation based on anonymized traffic analytics. We do not sell or trade
                  your data with third-party marketing entities.
                </p>
              </section>

              <Separator className='bg-border/50' />

              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>03.</span> Security Measures
                </h4>
                <p>
                  Please note that no security measures are perfect or impenetrable, and we cannot
                  guarantee &quot;perfect security&quot;. In addition, any information you send to
                  us may not be secure while in transit. We recommend that you do not use unsecure
                  channels to communicate sensitive or confidential information to us.
                </p>
              </section>

              <Separator className='bg-border/50' />

              <section className='space-y-4'>
                <h4 className='text-foreground flex items-center gap-2 text-xl font-bold'>
                  <span className='text-primary font-mono text-sm'>04.</span> Contact & Queries
                </h4>
                <div className='bg-primary/5 border-primary/20 flex flex-col items-center justify-between gap-6 rounded-2xl border p-6 md:flex-row'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-primary/10 text-primary rounded-xl p-3 font-bold'>
                      <Mail className='size-5' />
                    </div>
                    <div>
                      <p className='text-primary/60 text-xs font-bold tracking-widest uppercase'>
                        Email Support
                      </p>
                      <p className='text-foreground font-semibold'>legal@devanonitos.com</p>
                    </div>
                  </div>
                  <button className='bg-primary text-primary-foreground shadow-primary/20 rounded-xl px-8 py-3 text-sm font-bold shadow-lg transition-transform hover:scale-105'>
                    Contact Legal Desk
                  </button>
                </div>
              </section>
            </div>

            <div className='pt-8 text-center'>
              <p className='text-muted-foreground/40 font-mono text-[10px] font-bold tracking-widest uppercase'>
                Last Encryption Check: Feb 2026 // v2.0.4 Security Update
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default PrivacySection
