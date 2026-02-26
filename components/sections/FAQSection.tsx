'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { FAQS } from '@/constants'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import { MessageCircleQuestion } from 'lucide-react'
import { motion } from 'motion/react'
import { Container } from '../layout'

const FAQSection = () => {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.section
      ref={ref}
      id='faq'
      initial='hidden'
      animate={controls}
      variants={FADE_IN_UP}
      className='bg-card/30 py-24'
    >
      <Container>
        <div className='flex flex-col gap-16 md:flex-row'>
          {/* Header Section */}
          <motion.div variants={STAGGER_CONTAINER} className='w-full space-y-4 md:w-1/3'>
            <motion.div variants={FADE_IN_UP}>
              <Badge
                variant='outline'
                className='text-primary border-primary/20 bg-primary/5 rounded-full px-4 py-1'
              >
                Support
              </Badge>
            </motion.div>
            <motion.h2
              variants={FADE_IN_UP}
              className='text-3xl font-bold tracking-tight md:text-4xl'
            >
              Common Questions
            </motion.h2>
            <motion.p
              variants={FADE_IN_UP}
              className='text-muted-foreground text-lg leading-relaxed'
            >
              Find answers to the most frequently asked questions about my services and development
              process.
            </motion.p>
            <motion.div
              variants={FADE_IN_UP}
              className='text-foreground/80 hidden items-center gap-3 pt-6 text-sm font-medium md:flex'
            >
              <div className='bg-primary/10 rounded-full p-2'>
                <MessageCircleQuestion className='text-primary size-5' />
              </div>
              <span>Need more help? Contact me directly.</span>
            </motion.div>
          </motion.div>

          {/* Accordion Section */}
          <motion.div variants={FADE_IN_UP} className='w-full md:w-2/3'>
            <Accordion type='single' collapsible className='w-full space-y-4'>
              {FAQS.map((faq: FAQ, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='bg-background border-border/50 hover:border-primary/30 data-[state=open]:border-primary/50 rounded-xl border px-6 transition-all data-[state=open]:shadow-sm'
                >
                  <AccordionTrigger className='py-6 text-base font-semibold hover:no-underline md:text-lg'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground pb-6 text-base leading-relaxed'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

export default FAQSection
