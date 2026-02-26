'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { JOURNAL_POSTS } from '@/constants/journal'
import { useScrollReveal } from '@/hooks'
import { JournalPost } from '@/types'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const JournalSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id='journal' className='bg-background relative overflow-hidden py-24'>
      {/* Decorative Ornaments */}
      <div className='bg-primary/5 absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-20'
        >
          {/* Header */}
          <div className='flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <div className='max-w-2xl space-y-6'>
              <motion.div variants={FADE_IN_UP}>
                <Badge
                  variant='outline'
                  className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
                >
                  Insights & Thoughts
                </Badge>
              </motion.div>
              <motion.h2
                variants={FADE_IN_UP}
                className='text-4xl font-bold tracking-tight md:text-7xl'
              >
                The Technical{' '}
                <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                  Journal
                </span>
              </motion.h2>
              <motion.p
                variants={FADE_IN_UP}
                className='text-muted-foreground text-lg leading-relaxed'
              >
                Exploring the boundaries of web engineering, data science, and modern architecture
                through deep dives and case studies.
              </motion.p>
            </div>

            <motion.div variants={FADE_IN_UP}>
              <Link
                href='/journal'
                className='group border-border/50 bg-card/20 hover:border-primary/40 flex items-center gap-3 rounded-full border px-8 py-4 shadow-sm backdrop-blur-sm transition-all'
              >
                <span className='text-sm font-bold tracking-widest uppercase'>View All Posts</span>
                <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
              </Link>
            </motion.div>
          </div>

          {/* Posts Grid */}
          <div className='grid gap-8 md:grid-cols-3'>
            {JOURNAL_POSTS.map((post: JournalPost) => (
              <motion.div
                key={post.id}
                variants={FADE_IN_UP}
                className='group border-border/50 bg-card/20 hover:border-primary/30 hover:bg-card/40 hover:shadow-primary/5 relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl'
              >
                {/* Post Image */}
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0'
                  />
                  <div className='absolute top-6 left-6'>
                    <Badge className='bg-background/80 text-foreground border-border/50 rounded-full px-4 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md'>
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Post Content */}
                <div className='flex flex-grow flex-col space-y-6 p-8'>
                  <div className='text-muted-foreground flex items-center gap-4 text-xs font-bold tracking-widest uppercase'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='text-primary size-3' />
                      <span>{post.date}</span>
                    </div>
                    <div className='bg-border size-1 rounded-full' />
                    <div className='flex items-center gap-2'>
                      <Clock className='text-primary size-3' />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className='group-hover:text-primary text-2xl leading-tight font-bold tracking-tight transition-colors'>
                    {post.title}
                  </h3>

                  <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>
                    {post.excerpt}
                  </p>

                  <div className='mt-auto pt-4'>
                    <Link
                      href={`/journal/${post.slug}`}
                      className='text-primary inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all hover:gap-4'
                    >
                      Read Full Article
                      <ArrowUpRight className='size-3' />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default JournalSection
