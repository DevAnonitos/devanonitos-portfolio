'use client'

import Container from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/constants/animations'
import { useScrollReveal } from '@/hooks'
import { cn } from '@/lib/utils'
import { Project } from '@/types'
import { ArrowUpRight, ExternalLink, Github, Layers } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

// Component: Individual Project Card
const ProjectCardItem = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className='group border-border/50 bg-card/20 hover:border-primary/40 hover:shadow-primary/5 relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border shadow-sm backdrop-blur-md transition-all duration-500 hover:shadow-2xl'
    >
      {/* Project Image Container */}
      <div className='relative aspect-[16/10] overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        {/* Overlay on hover */}
        <div className='from-background via-background/20 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
          <div className='flex gap-4'>
            <Link
              href={project.links.github}
              target='_blank'
              className='bg-background/80 hover:bg-primary hover:text-primary-foreground border-border/50 rounded-2xl border p-3 shadow-xl backdrop-blur-md transition-all'
            >
              <Github className='size-5' />
            </Link>
            <Link
              href={project.links.demo}
              target='_blank'
              className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl p-3 shadow-xl transition-all'
            >
              <ExternalLink className='size-5' />
            </Link>
          </div>
        </div>

        {/* Category Badge on Image */}
        <div className='absolute top-6 left-6'>
          <Badge className='bg-background/80 blur-0 text-foreground border-border/50 rounded-full px-4 py-1 backdrop-blur-md'>
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className='flex flex-grow flex-col space-y-4 p-8'>
        <div className='flex items-start justify-between'>
          <h3 className='group-hover:text-primary text-2xl font-bold tracking-tight transition-colors'>
            {project.title}
          </h3>
          <ArrowUpRight className='text-muted-foreground/30 group-hover:text-primary size-5 transition-colors duration-500' />
        </div>

        <p className='text-muted-foreground flex-grow text-sm leading-relaxed'>
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className='flex flex-wrap gap-2 pt-4'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='text-muted-foreground/60 bg-secondary/30 group-hover:text-primary/70 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Component: Projects Grid Wrapper
const ProjectCardList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      <AnimatePresence mode='popLayout'>
        {projects.map((project) => (
          <ProjectCardItem key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  )
}

const ProjectSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id='projects' className='bg-background relative overflow-hidden py-24'>
      {/* Technical Glow Ornaments */}
      <div className='bg-primary/5 absolute top-1/4 -right-20 -z-10 h-[600px] w-[600px] animate-pulse rounded-full blur-[120px]' />
      <div className='absolute bottom-1/4 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]' />

      <Container>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={STAGGER_CONTAINER}
          className='space-y-20'
        >
          {/* Section Header */}
          <div className='flex flex-col justify-between gap-12 lg:flex-row lg:items-end'>
            <div className='max-w-3xl space-y-6'>
              <motion.div variants={FADE_IN_UP}>
                <Badge
                  variant='outline'
                  className='text-primary border-primary/30 bg-primary/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'
                >
                  Portfolio Gallery
                </Badge>
              </motion.div>
              <motion.h2
                variants={FADE_IN_UP}
                className='text-4xl font-bold tracking-tight md:text-7xl'
              >
                Featured{' '}
                <span className='from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent'>
                  Digital Artifacts
                </span>
              </motion.h2>
              <motion.p
                variants={FADE_IN_UP}
                className='text-muted-foreground text-lg leading-relaxed md:text-xl'
              >
                A selection of my most challenging and impactful engineering works, blending clean
                code with cutting-edge user experiences.
              </motion.p>
            </div>

            {/* Quick Stats Indicator */}
            <motion.div
              variants={FADE_IN_UP}
              className='hidden items-center gap-12 font-mono lg:flex'
            >
              <div className='space-y-1'>
                <p className='text-3xl font-bold'>12+</p>
                <p className='text-muted-foreground text-[10px] font-bold tracking-widest uppercase'>
                  Live Apps
                </p>
              </div>
              <div className='bg-border/50 h-10 w-px' />
              <div className='space-y-1'>
                <p className='text-3xl font-bold'>45+</p>
                <p className='text-muted-foreground text-[10px] font-bold tracking-widest uppercase'>
                  Open Repos
                </p>
              </div>
            </motion.div>
          </div>

          {/* Filtering System */}
          <motion.div
            variants={FADE_IN_UP}
            className='bg-card/20 border-border/50 mx-auto flex w-fit flex-wrap items-center gap-3 rounded-[2rem] border p-2 backdrop-blur-md lg:mx-0'
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-full px-6 py-2 text-xs font-bold tracking-wider transition-all duration-300',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-primary/20 scale-105 shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50',
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Display */}
          <motion.div variants={FADE_IN_UP}>
            <ProjectCardList projects={filteredProjects} />
          </motion.div>

          {/* Discover More CTA */}
          <motion.div variants={FADE_IN_UP} className='flex flex-col items-center gap-6 pt-12'>
            <p className='text-muted-foreground flex items-center gap-2 font-medium'>
              Interested in more of my work?
              <Layers className='size-4 animate-bounce' />
            </p>
            <Link
              href='https://github.com/DevAnonitos'
              target='_blank'
              className='group border-border/50 bg-card/20 hover:border-primary/40 hover:shadow-primary/5 flex items-center gap-4 rounded-full border px-10 py-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-2xl'
            >
              <div className='bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground rounded-2xl p-3 transition-all'>
                <Github className='size-5' />
              </div>
              <div className='text-left'>
                <p className='text-muted-foreground group-hover:text-primary text-xs font-bold tracking-widest uppercase transition-colors'>
                  GitHub Engine
                </p>
                <p className='text-lg font-bold'>Expore Open Source</p>
              </div>
              <ArrowUpRight className='ml-4 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ProjectSection
