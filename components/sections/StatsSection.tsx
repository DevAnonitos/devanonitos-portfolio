"use client"

import React, { useEffect, useRef, useState } from "react"
import Container from "@/components/layout/Container"
import { motion, useSpring, useTransform, useInView } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Code2, 
  Users2, 
  Globe2, 
  Zap,
  Cpu
} from "lucide-react"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { cn } from "@/lib/utils"

// Component: Animated Counter Number
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  })
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

const STATS = [
  {
    label: "Years of Experience",
    value: 5,
    suffix: "+",
    icon: Trophy,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "Building scalable digital solutions"
  },
  {
    label: "Projects Completed",
    value: 120,
    suffix: "+",
    icon: Code2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description: "From MVPs to Enterprise Apps"
  },
  {
    label: "Global Clients",
    value: 45,
    suffix: "+",
    icon: Users2,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    description: "Across 15+ different countries"
  },
  {
    label: "Lines of Code",
    value: 850,
    suffix: "k+",
    icon: Zap,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    description: "Written with precision and care"
  }
]

const StatsSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-background">
      {/* Premium Technical Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] -z-10" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Success Metrics
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-6xl font-bold tracking-tight">
              Numbers that define <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 font-black">Performance</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Behind every line of code resides a commitment to excellence, 
              delivering tangible results through measurable impact.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[3rem] border border-border/50 bg-card/20 backdrop-blur-xl hover:border-primary/30 hover:bg-card/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="space-y-6 text-center lg:text-left">
                  {/* Icon Indicator */}
                  <div className={cn(
                    "size-14 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                    stat.bg,
                    stat.color
                  )}>
                    <stat.icon className="size-7" />
                  </div>

                  {/* Main Value */}
                  <div className="space-y-1">
                    <h3 className="text-5xl font-black tracking-tighter text-foreground font-mono">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                      {stat.label}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground/80 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>

                {/* Aesthetic Corner Stamp */}
                <div className="absolute top-8 right-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                   <Cpu className="size-10" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Badge Decoration */}
          <motion.div 
            variants={FADE_IN_UP}
            className="pt-12 flex flex-col items-center gap-6"
          >
             <div className="h-16 w-px bg-gradient-to-b from-primary/50 to-transparent" />
             <p className="text-[10px] font-mono font-bold tracking-[0.5em] text-muted-foreground/30 uppercase text-center px-4">
               Continuous Improvement Cycle // Efficiency Optimized V4.2
             </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default StatsSection