"use client"

import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { useScrollReveal } from "@/hooks"
import { cn } from "@/lib/utils"
import {
  Accessibility,
  CheckCircle2,
  Ear,
  Eye,
  Keyboard,
  MousePointer2,
  ScanEye,
  Type
} from "lucide-react"
import { motion } from "motion/react"

const ACCESSIBILITY_FEATURES = [
  {
    title: "Semantic HTML",
    description: "Using meaningful HTML elements to ensure screen readers can accurately interpret the structure and content.",
    icon: Type,
    tags: ["Aria-Labels", "Logical Order"],
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Keyboard Navigation",
    description: "Full site maneuverability via keyboard Tab, Enter, and Esc keys for users who can't use traditional pointers.",
    icon: Keyboard,
    tags: ["Focus States", "Skip Links"],
    color: "from-purple-500/10 to-transparent"
  },
  {
    title: "High Contrast & Colors",
    description: "Meeting WCAG 2.1 Level AA standards for color contrast to support users with visual impairments.",
    icon: Eye,
    tags: ["AA Standard", "Legibility"],
    color: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Interactive Feedback",
    description: "Clear visual and audible cues for all actions, ensuring every user knowsExactly what happened.",
    icon: MousePointer2,
    tags: ["Motion Safety", "Micro-copy"],
    color: "from-amber-500/10 to-transparent"
  }
]

const AccessibilitySection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <motion.div variants={FADE_IN_UP}>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.2em]">
                Inclusive Design
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-6xl font-bold tracking-tight font-heading">
              Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">for Everyone</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              I believe the web should be accessible to everyone, regardless of ability or circumstances.
              My portfolio is built following the Web Content Accessibility Guidelines (WCAG).
            </motion.p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {ACCESSIBILITY_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className="group relative p-8 rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br transition-opacity opacity-0 group-hover:opacity-100 duration-700", feature.color)} />

                <div className="relative z-10 space-y-6">
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/50 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <feature.icon className="size-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-background/30 border border-border/50 text-muted-foreground/80 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statement Card */}
          <motion.div
            variants={FADE_IN_UP}
            className="rounded-[3rem] border border-primary/20 bg-primary/5 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Accessibility className="size-48" />
            </div>

            <div className="max-w-2xl space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Statement of Commitment</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg italic">
                  &ldquo;Great design is invisible, but accessibility is felt. I am committed to continuously
                  auditing and improving this platform to ensure it remains a welcoming digital space
                  for all users.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["WCAG 2.1 Compliant", "Screen Reader Ready", "Screen Safe Colors", "No Auto-play Media"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 size-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Helpful Icons Footer */}
          <motion.div
            variants={FADE_IN_UP}
            className="flex flex-wrap items-center justify-center gap-12 pt-12 grayscale opacity-30"
          >
            <div className="flex flex-col items-center gap-2">
              <Ear className="size-8" />
              <span className="text-[10px] uppercase font-black tracking-widest">Hearing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ScanEye className="size-8" />
              <span className="text-[10px] uppercase font-black tracking-widest">Visual</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Accessibility className="size-8" />
              <span className="text-[10px] uppercase font-black tracking-widest">Motor</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AccessibilitySection
