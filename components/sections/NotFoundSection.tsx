'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, ArrowLeft, Terminal, AlertTriangle, RotateCcw, Zap, Cpu } from 'lucide-react'
import Link from 'next/link'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'

const NotFoundSection = () => {
  return (
    <section className='bg-background relative flex min-h-screen items-center justify-center overflow-hidden'>
      {/* Premium Background Ornaments - Less Cluttered */}
      <div className='pointer-events-none absolute top-0 left-0 h-full w-full opacity-20'>
        <div className='bg-primary/20 absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full blur-[120px]' />
        <div className='absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]' />
      </div>

      {/* Modern Grid Overlay */}
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] bg-[size:40px_40px]' />

      <Container>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={STAGGER_CONTAINER}
          className='relative mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center'
        >
          {/* Subtle Background 404 - Refined Stroke Styling */}
          <motion.div
            variants={FADE_IN_UP}
            className='stroke-primary/30 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] leading-none font-bold tracking-tighter text-transparent opacity-[0.03] select-none md:text-[25rem] dark:opacity-[0.07]'
            style={{ WebkitTextStroke: '1px currentColor' }}
          >
            404
          </motion.div>

          {/* Icon Orb - Professional Replacement for Ghost */}
          <motion.div variants={FADE_IN_UP} className='relative mb-4'>
            <div className='bg-primary/20 absolute inset-0 scale-150 animate-pulse rounded-full blur-2xl' />
            <div className='bg-card border-primary/20 group relative flex size-24 items-center justify-center rounded-[2.5rem] border shadow-2xl backdrop-blur-xl md:size-32'>
              <AlertTriangle className='text-primary size-10 transition-transform duration-500 group-hover:rotate-12 md:size-12' />
              <div className='bg-primary text-primary-foreground absolute -top-2 -right-2 rounded-xl p-2 shadow-lg'>
                <Zap className='size-4 animate-bounce' />
              </div>
            </div>
          </motion.div>

          {/* Error Information */}
          <div className='relative z-10 space-y-6'>
            <motion.div variants={FADE_IN_UP}>
              <Badge
                variant='outline'
                className='text-primary border-primary/20 bg-primary/5 rounded-full px-6 py-2 text-[10px] font-bold tracking-[0.4em] uppercase backdrop-blur-md'
              >
                Routing Error Detected
              </Badge>
            </motion.div>

            <motion.h1
              variants={FADE_IN_UP}
              className='text-4xl leading-tight font-black tracking-tight md:text-8xl'
            >
              <span className='from-primary bg-gradient-to-r via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
                404 Not Found
              </span>
            </motion.h1>

            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed font-medium md:text-xl'
            >
              The resource you are attempting to access has been de-indexed or moved to an
              unreachable directory. Let&apos;s restore your session.
            </motion.p>
          </div>

          {/* Refined Actions */}
          <motion.div
            variants={FADE_IN_UP}
            className='relative z-10 flex w-full flex-col items-center justify-center gap-4 pt-4 sm:flex-row md:w-auto'
          >
            <Button
              asChild
              size='lg'
              className='shadow-primary/20 group h-16 w-full rounded-2xl px-10 text-base font-bold shadow-2xl sm:w-auto'
            >
              <Link href='/'>
                <Home className='mr-3 size-5 transition-transform group-hover:scale-110' />
                Repair & Home
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-border/50 bg-card/20 hover:bg-card/40 group h-16 w-full rounded-2xl px-10 text-base font-bold backdrop-blur-md transition-all sm:w-auto'
            >
              <Link href='/contact'>
                <Terminal className='mr-3 size-5 transition-transform group-hover:translate-x-1' />
                System Support
              </Link>
            </Button>
          </motion.div>

          {/* Technical Diagnostics - Clean Footer */}
          <motion.div variants={FADE_IN_UP} className='flex flex-col items-center gap-6 pt-12'>
            <div className='border-border/50 bg-card/10 flex items-center gap-8 rounded-full border px-8 py-3 backdrop-blur-sm'>
              <div className='text-muted-foreground/60 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase'>
                <Cpu className='text-primary/50 size-3' />
                Module: Error_v3.2
              </div>
              <div className='bg-border/50 h-3 w-px' />
              <div className='flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-emerald-500 uppercase'>
                <div className='size-1.5 animate-pulse rounded-full bg-emerald-500' />
                Base_Stable
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default NotFoundSection
