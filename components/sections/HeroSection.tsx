'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DEVELOPER_INFO } from '@/constants'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { Container } from '../layout'
import { SocialLinks } from '../shared'

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative flex min-h-[90vh] w-full items-center overflow-hidden pt-32 pb-20'
    >
      {/* Decorative Background Elements */}
      <div className='pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='bg-primary/20 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full blur-[120px]'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className='absolute right-[-10%] bottom-[-10%] h-[30%] w-[30%] rounded-full bg-blue-500/20 blur-[100px]'
        />
      </div>

      <Container className='relative'>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-4xl space-y-8 text-center'
        >
          {/* Status Badge */}
          <motion.div variants={FADE_IN_UP} className='flex justify-center'>
            <Badge
              variant='secondary'
              className='bg-card/50 border-border/50 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-md'
            >
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
              </span>
              Available for new opportunities
            </Badge>
          </motion.div>

          <div className='space-y-4'>
            <motion.h1
              variants={FADE_IN_UP}
              className='font-heading text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl'
            >
              Crafting{' '}
              <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                Digital Experiences
              </span>
            </motion.h1>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl'
            >
              I&apos;m <span className='text-foreground font-semibold'>{DEVELOPER_INFO.name}</span>,
              a {DEVELOPER_INFO.role} based in {DEVELOPER_INFO.location}.{DEVELOPER_INFO.bio}
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            variants={FADE_IN_UP}
            className='flex flex-col items-center justify-center gap-4 sm:flex-row'
          >
            <Button
              size='lg'
              className='shadow-primary/20 group h-14 rounded-full px-8 text-base shadow-lg'
            >
              View My Work
              <ArrowUpRight className='ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-background/50 h-14 rounded-full px-8 text-base backdrop-blur-sm'
            >
              <Download className='mr-2 size-5' />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links Component Integration */}
          <motion.div
            variants={FADE_IN_UP}
            className='border-border/50 mx-auto flex max-w-sm flex-col items-center gap-4 border-t pt-8'
          >
            <p className='text-muted-foreground/50 text-[10px] font-bold tracking-[0.3em] uppercase'>
              Connect with me
            </p>
            <SocialLinks variant='ghost' iconSize={24} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
