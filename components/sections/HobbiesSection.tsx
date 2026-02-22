"use client"

import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { HOBBIES } from "@/constants/hobbies"
import { useScrollReveal } from "@/hooks"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const HobbiesSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="hobbies" className="py-24 relative overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Life Outside Code
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 font-black">Architecture</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              When I&apos;m not architecting systems, I&apos;m exploring new perspectives,
              disciplines, and cultures that fuel my creativity.
            </motion.p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOBBIES.map((hobby, index) => (
              <HobbyCard key={index} hobby={hobby} index={index} />
            ))}
          </div>

          {/* Bottom Footnote */}
          <motion.div
            variants={FADE_IN_UP}
            className="text-center pt-8"
          >
             <p className="text-[10px] font-mono font-bold tracking-[0.5em] text-muted-foreground/30 uppercase">
               Balance // Creativity // Perspective
             </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

const HobbyCard = ({ hobby, index }: { hobby: any; index: number }) => {
  const Icon = hobby.icon

  return (
    <motion.div
      className="group relative h-[400px] rounded-[3rem] overflow-hidden border border-border/50 bg-card/30 backdrop-blur-xl"
    >
      {/* Dynamic Background Mesh */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br transition-opacity duration-700 opacity-40 group-hover:opacity-100",
        hobby.color
      )} />

      {/* Content Container */}
      <div className="relative h-full p-10 flex flex-col justify-between z-10">
        {/* Icon & Decor */}
        <div className="flex justify-between items-start">
          <div className="p-4 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-md group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <Icon className="size-6" />
          </div>
          <span className="text-4xl font-black text-foreground/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
            0{index + 1}
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:translate-x-1 transition-transform">
            {hobby.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm font-medium">
            {hobby.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {hobby.tags.map((tag: string, tidx: number) => (
              <span
                key={tidx}
                className="px-3 py-1 rounded-full bg-background/30 border border-border/50 text-[10px] uppercase font-bold tracking-wider text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Reveal Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

export default HobbiesSection
