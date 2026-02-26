'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCcw, Home, AlertOctagon, ShieldAlert, Terminal, ServerCrash } from 'lucide-react'
import Link from 'next/link'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'

interface ErrorSectionProps {
  error?: Error & { digest?: string }
  reset?: () => void
}

const ErrorSection = ({ error, reset }: ErrorSectionProps) => {
  return (
    <section className='bg-background relative flex min-h-[90vh] items-center justify-center overflow-hidden'>
      {/* Critical System Background Ornaments */}
      <div className='absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-rose-500/5 blur-[120px]' />
      <div className='absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[100px]' />

      {/* Technical Grid Overlay */}
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] bg-[size:40px_40px]' />

      <Container>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={STAGGER_CONTAINER}
          className='relative mx-auto max-w-4xl space-y-12 text-center'
        >
          {/* Main Error Illustration */}
          <div className='relative inline-block'>
            <motion.div
              variants={FADE_IN_UP}
              className='bg-card group relative mx-auto flex size-28 items-center justify-center rounded-[3rem] border border-rose-500/20 shadow-2xl backdrop-blur-xl md:size-40'
            >
              <ServerCrash className='size-16 text-rose-500 transition-transform duration-500 group-hover:scale-110 md:size-20' />
              <div className='absolute -right-2 -bottom-2 animate-pulse rounded-2xl bg-rose-600 p-3 text-white shadow-lg'>
                <AlertOctagon className='size-5' />
              </div>
            </motion.div>
          </div>

          {/* Error Message */}
          <div className='space-y-6'>
            <motion.div variants={FADE_IN_UP}>
              <Badge
                variant='outline'
                className='rounded-full border-rose-500/30 bg-rose-500/5 px-6 py-2 text-[10px] font-bold tracking-[0.4em] text-rose-500 uppercase backdrop-blur-md'
              >
                System Interrupt Detected
              </Badge>
            </motion.div>

            <motion.h1
              variants={FADE_IN_UP}
              className='text-4xl leading-tight font-black tracking-tight md:text-7xl'
            >
              Unexpected <br />
              <span className='bg-gradient-to-r from-rose-500 via-rose-600 to-amber-600 bg-clip-text text-transparent'>
                Core Failure
              </span>
            </motion.h1>

            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed font-medium md:text-xl'
            >
              The application encountered a critical runtime exception. Our recovery protocols are
              standing by to restore system stability.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            variants={FADE_IN_UP}
            className='flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row'
          >
            {reset && (
              <Button
                onClick={() => reset()}
                size='lg'
                className='group h-16 w-full rounded-2xl bg-rose-600 px-10 text-base font-bold text-white shadow-2xl shadow-rose-500/20 hover:bg-rose-700 sm:w-auto'
              >
                <RefreshCcw className='mr-3 size-5 transition-transform duration-700 group-hover:rotate-180' />
                Attempt Recovery
              </Button>
            )}

            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-border/50 bg-card/20 hover:bg-card/40 group h-16 w-full rounded-2xl px-10 text-base font-bold backdrop-blur-md transition-all sm:w-auto'
            >
              <Link href='/'>
                <Home className='mr-3 size-5 transition-transform group-hover:scale-110' />
                Return to Base
              </Link>
            </Button>
          </motion.div>

          {/* Technical Trace Info - Controlled visibility */}
          {error?.digest && (
            <motion.div variants={FADE_IN_UP} className='pt-12'>
              <div className='inline-flex items-center gap-4 rounded-2xl border border-rose-500/10 bg-rose-500/5 px-8 py-3 font-mono text-[10px] font-bold tracking-widest text-rose-500/60 uppercase'>
                <Terminal className='size-3' />
                Exception_ID: {error.digest}
              </div>
            </motion.div>
          )}

          {/* Footer Metadata */}
          <motion.div
            variants={FADE_IN_UP}
            className='flex flex-col items-center gap-4 pt-8 opacity-30'
          >
            <div className='h-12 w-px bg-gradient-to-b from-rose-500/50 to-transparent' />
            <div className='text-muted-foreground/60 flex items-center gap-6 font-mono text-[10px] font-bold tracking-[0.3em] uppercase'>
              <div className='flex items-center gap-2'>
                <ShieldAlert className='size-3' />
                Status: Isolated
              </div>
              <div className='bg-border size-1 rounded-full' />
              <div className='flex items-center gap-2'>Status_Code: 500_RUNTIME</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ErrorSection
