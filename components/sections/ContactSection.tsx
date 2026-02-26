'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DEVELOPER_INFO, SOCIAL_LINKS } from '@/constants'
import { REVEAL_LEFT, REVEAL_RIGHT, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
  Twitter,
} from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const ContactSection = () => {
  const { ref, controls } = useScrollReveal()

  const CONTACT_INFO: ContactInfoItem[] = [
    {
      icon: Mail,
      label: 'Email Me',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: DEVELOPER_INFO.location,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: MessageSquare,
      label: 'Open for',
      value: 'Freelance & Full-time',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
  ]

  return (
    <section id='contact' className='bg-background relative overflow-hidden py-24'>
      {/* Decorative Ornaments */}
      <div className='bg-primary/5 absolute top-1/2 left-0 -z-10 h-64 w-64 -translate-y-1/2 rounded-full blur-[100px]' />
      <div className='absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='grid gap-16 lg:grid-cols-2 lg:gap-24'
        >
          {/* Left Side: Info & Socials */}
          <motion.div variants={REVEAL_LEFT} className='space-y-12'>
            <div className='space-y-6'>
              <Badge
                variant='outline'
                className='text-primary border-primary/20 bg-primary/5 rounded-full px-4 py-1'
              >
                Get In Touch
              </Badge>
              <h2 className='text-4xl font-bold tracking-tight md:text-6xl'>
                Let&apos;s Build Something{' '}
                <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                  Legendary
                </span>
              </h2>
              <p className='text-muted-foreground max-w-md text-lg leading-relaxed'>
                Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always
                open to new opportunities and creative collaborations.
              </p>
            </div>

            <div className='grid gap-6'>
              {CONTACT_INFO.map((item, index) => (
                <Link
                  key={index}
                  href={item.href || '#'}
                  className={item.href ? 'group' : 'pointer-events-none'}
                >
                  <div className='border-border/50 bg-card/30 group-hover:border-primary/30 group-hover:bg-card/50 flex items-center gap-6 rounded-3xl border p-4 backdrop-blur-sm transition-all duration-300'>
                    <div
                      className={`rounded-2xl p-4 ${item.bg} ${item.color} transition-transform group-hover:scale-110`}
                    >
                      <item.icon className='size-6' />
                    </div>
                    <div>
                      <p className='text-muted-foreground/60 mb-1 text-xs font-bold tracking-widest uppercase'>
                        {item.label}
                      </p>
                      <p className='text-foreground/90 text-lg font-semibold'>{item.value}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className='space-y-6'>
              <p className='text-muted-foreground/40 text-sm font-bold tracking-[0.2em] uppercase'>
                Connect with me
              </p>
              <div className='flex items-center gap-4'>
                {[
                  { icon: Github, href: SOCIAL_LINKS.github },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target='_blank'
                    className='bg-card border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 rounded-2xl border p-4 shadow-sm transition-all hover:-translate-y-1'
                  >
                    <social.icon className='size-6' />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div variants={REVEAL_RIGHT} className='relative'>
            <div className='from-primary/10 absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br to-blue-500/10 blur-2xl' />
            <div className='bg-card border-border/50 group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-2xl md:p-12'>
              {/* Form Decoration */}
              <div className='absolute top-0 right-0 p-8 opacity-[0.03] transition-opacity group-hover:opacity-[0.07]'>
                <Sparkles className='size-32 -rotate-12' />
              </div>

              <form className='relative space-y-6' onSubmit={(e) => e.preventDefault()}>
                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <label className='ml-1 text-sm font-semibold'>Your Name</label>
                    <Input
                      placeholder='John Doe'
                      className='bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-2xl transition-all'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='ml-1 text-sm font-semibold'>Email Address</label>
                    <Input
                      type='email'
                      placeholder='john@example.com'
                      className='bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-2xl transition-all'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='ml-1 text-sm font-semibold'>Subject</label>
                  <Input
                    placeholder='Project Inquiry'
                    className='bg-background/50 border-border/50 focus:border-primary/50 h-12 rounded-2xl transition-all'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='ml-1 text-sm font-semibold'>Message</label>
                  <Textarea
                    placeholder='Tell me about your project...'
                    className='bg-background/50 border-border/50 focus:border-primary/50 min-h-[160px] resize-none rounded-2xl transition-all'
                  />
                </div>

                <Button className='shadow-primary/20 group h-14 w-full rounded-2xl text-base font-bold shadow-lg'>
                  Send Message
                  <Send className='ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                </Button>

                <p className='text-muted-foreground/60 pt-2 text-center text-[10px] font-medium tracking-widest uppercase'>
                  Average response time: &lt; 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactSection
