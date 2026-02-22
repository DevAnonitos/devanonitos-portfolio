"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  RefreshCcw, 
  Home, 
  AlertOctagon, 
  ShieldAlert, 
  Terminal,
  ServerCrash
} from "lucide-react"
import Link from "next/link"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"

interface ErrorSectionProps {
  error?: Error & { digest?: string }
  reset?: () => void
}

const ErrorSection = ({ error, reset }: ErrorSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Critical System Background Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -z-10" />
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] -z-10" />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER_CONTAINER}
          className="max-w-4xl mx-auto text-center space-y-12 relative"
        >
          {/* Main Error Illustration */}
          <div className="relative inline-block">
             <motion.div
                variants={FADE_IN_UP}
                className="relative size-28 md:size-40 rounded-[3rem] bg-card border border-rose-500/20 flex items-center justify-center shadow-2xl mx-auto group backdrop-blur-xl"
             >
                <ServerCrash className="size-16 md:size-20 text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-rose-600 text-white shadow-lg animate-pulse">
                   <AlertOctagon className="size-5" />
                </div>
             </motion.div>
          </div>

          {/* Error Message */}
          <div className="space-y-6">
            <motion.div variants={FADE_IN_UP}>
               <Badge variant="outline" className="rounded-full px-6 py-2 text-rose-500 border-rose-500/30 bg-rose-500/5 backdrop-blur-md text-[10px] font-bold tracking-[0.4em] uppercase">
                  System Interrupt Detected
               </Badge>
            </motion.div>

            <motion.h1 
              variants={FADE_IN_UP}
              className="text-4xl md:text-7xl font-black tracking-tight leading-tight"
            >
              Unexpected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-600 to-amber-600">Core Failure</span>
            </motion.h1>

            <motion.p 
              variants={FADE_IN_UP}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
            >
              The application encountered a critical runtime exception. 
              Our recovery protocols are standing by to restore system stability.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            variants={FADE_IN_UP}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            {reset && (
              <Button 
                onClick={() => reset()}
                size="lg" 
                className="rounded-2xl px-10 h-16 text-base font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-2xl shadow-rose-500/20 group w-full sm:w-auto"
              >
                <RefreshCcw className="mr-3 size-5 transition-transform group-hover:rotate-180 duration-700" />
                Attempt Recovery
              </Button>
            )}
            
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-base font-bold border-border/50 bg-card/20 backdrop-blur-md hover:bg-card/40 transition-all group w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-3 size-5 transition-transform group-hover:scale-110" />
                Return to Base
              </Link>
            </Button>
          </motion.div>

          {/* Technical Trace Info - Controlled visibility */}
          {error?.digest && (
            <motion.div 
              variants={FADE_IN_UP}
              className="pt-12"
            >
               <div className="inline-flex items-center gap-4 py-3 px-8 rounded-2xl border border-rose-500/10 bg-rose-500/5 text-[10px] font-mono font-bold tracking-widest text-rose-500/60 uppercase">
                  <Terminal className="size-3" />
                  Exception_ID: {error.digest}
               </div>
            </motion.div>
          )}

          {/* Footer Metadata */}
          <motion.div 
            variants={FADE_IN_UP}
            className="pt-8 flex flex-col items-center gap-4 opacity-30"
          >
             <div className="h-12 w-px bg-gradient-to-b from-rose-500/50 to-transparent" />
             <div className="flex items-center gap-6 text-[10px] font-mono font-bold tracking-[0.3em] text-muted-foreground/60 uppercase">
                <div className="flex items-center gap-2">
                   <ShieldAlert className="size-3" />
                   Status: Isolated
                </div>
                <div className="size-1 rounded-full bg-border" />
                <div className="flex items-center gap-2">
                   Status_Code: 500_RUNTIME
                </div>
             </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ErrorSection