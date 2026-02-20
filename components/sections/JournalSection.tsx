"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { JOURNAL_POSTS } from "@/constants/journal"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const JournalSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="journal" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-6">
              <motion.div variants={FADE_IN_UP}>
                <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                  Insights & Thoughts
                </Badge>
              </motion.div>
              <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
                The Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Journal</span>
              </motion.h2>
              <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg leading-relaxed">
                Exploring the boundaries of web engineering, data science, and modern architecture 
                through deep dives and case studies.
              </motion.p>
            </div>
            
            <motion.div variants={FADE_IN_UP}>
                <Link href="/journal" className="group flex items-center gap-3 py-4 px-8 rounded-full border border-border/50 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all shadow-sm">
                    <span className="text-sm font-bold tracking-widest uppercase">View All Posts</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </motion.div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {JOURNAL_POSTS.map((post) => (
              <motion.div
                key={post.id}
                variants={FADE_IN_UP}
                className="group relative flex flex-col h-full rounded-[2.5rem] border border-border/50 bg-card/20 backdrop-blur-xl overflow-hidden hover:border-primary/30 hover:bg-card/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Post Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                   />
                   <div className="absolute top-6 left-6">
                      <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/50 rounded-full px-4 py-1 text-[10px] uppercase font-bold tracking-widest">
                         {post.category}
                      </Badge>
                   </div>
                </div>

                {/* Post Content */}
                <div className="flex flex-col flex-grow p-8 space-y-6">
                   <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                         <Calendar className="size-3 text-primary" />
                         <span>{post.date}</span>
                      </div>
                      <div className="size-1 rounded-full bg-border" />
                      <div className="flex items-center gap-2">
                         <Clock className="size-3 text-primary" />
                         <span>{post.readTime}</span>
                      </div>
                   </div>

                   <h3 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                   </h3>

                   <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                   </p>

                   <div className="pt-4 mt-auto">
                      <Link 
                        href={`/journal/${post.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all"
                      >
                         Read Full Article
                         <ArrowUpRight className="size-3" />
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
