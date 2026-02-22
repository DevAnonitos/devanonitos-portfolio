"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Home, 
  ArrowLeft, 
  Terminal, 
  AlertTriangle,
  RotateCcw,
  Zap,
  Cpu
} from "lucide-react"
import Link from "next/link"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"

const NotFoundSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Premium Background Ornaments - Less Cluttered */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] -z-10" />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER_CONTAINER}
          className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-8"
        >
          {/* Subtle Background 404 - Refined Stroke Styling */}
          <motion.div
            variants={FADE_IN_UP}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold tracking-tighter select-none pointer-events-none leading-none opacity-[0.03] dark:opacity-[0.07] text-transparent stroke-primary/30"
            style={{ WebkitTextStroke: "1px currentColor" }}
          >
            404
          </motion.div>

          {/* Icon Orb - Professional Replacement for Ghost */}
          <motion.div variants={FADE_IN_UP} className="relative mb-4">
             <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse" />
             <div className="relative size-24 md:size-32 rounded-[2.5rem] bg-card border border-primary/20 flex items-center justify-center shadow-2xl backdrop-blur-xl group">
                <AlertTriangle className="size-10 md:size-12 text-primary group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute -top-2 -right-2 p-2 rounded-xl bg-primary text-primary-foreground shadow-lg">
                   <Zap className="size-4 animate-bounce" />
                </div>
             </div>
          </motion.div>

          {/* Error Information */}
          <div className="space-y-6 relative z-10">
            <motion.div variants={FADE_IN_UP}>
               <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/20 bg-primary/5 backdrop-blur-md text-[10px] font-bold tracking-[0.4em] uppercase">
                  Routing Error Detected
               </Badge>
            </motion.div>
            
            <motion.h1 
              variants={FADE_IN_UP}
              className="text-4xl md:text-8xl font-black tracking-tight leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">404 Not Found</span>
            </motion.h1>
            
            <motion.p 
              variants={FADE_IN_UP}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
            >
              The resource you are attempting to access has been de-indexed or moved 
              to an unreachable directory. Let&apos;s restore your session.
            </motion.p>
          </div>

          {/* Refined Actions */}
          <motion.div 
            variants={FADE_IN_UP}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10 w-full md:w-auto"
          >
            <Button asChild size="lg" className="rounded-2xl px-10 h-16 text-base font-bold shadow-2xl shadow-primary/20 group w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-3 size-5 transition-transform group-hover:scale-110" />
                Repair & Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-base font-bold border-border/50 bg-card/20 backdrop-blur-md hover:bg-card/40 transition-all group w-full sm:w-auto">
              <Link href="/contact">
                <Terminal className="mr-3 size-5 transition-transform group-hover:translate-x-1" />
                System Support
              </Link>
            </Button>
          </motion.div>

          {/* Technical Diagnostics - Clean Footer */}
          <motion.div 
            variants={FADE_IN_UP}
            className="pt-12 flex flex-col items-center gap-6"
          >
             <div className="flex items-center gap-8 py-3 px-8 rounded-full border border-border/50 bg-card/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-muted-foreground/60 uppercase">
                   <Cpu className="size-3 text-primary/50" />
                   Module: Error_v3.2
                </div>
                <div className="h-3 w-px bg-border/50" />
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-emerald-500 uppercase">
                   <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   Base_Stable
                </div>
             </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default NotFoundSection