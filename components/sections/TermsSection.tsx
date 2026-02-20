"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { 
  ScrollText, 
  Gavel, 
  Copyright, 
  Ban, 
  Scale, 
  Briefcase,
  AlertCircle,
  ArrowRight
} from "lucide-react"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { Separator } from "@/components/ui/separator"

const TERMS_PILLARS = [
  {
    icon: Copyright,
    title: "Intellectual Property",
    content: "All code, designs, and content displayed are personal intellectual property unless stated otherwise. Commercial use requires explicit permission.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: ScrollText,
    title: "Service Scope",
    content: "The services provided via this portfolio are for demonstration and professional engagement purposes only, subject to specific project contracts.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Ban,
    title: "Prohibited Conduct",
    content: "Users are strictly prohibited from reverse engineering, data scraping, or attempting to compromise the security of this technical environment.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    content: "All communications must adhere to professional guidelines. We reserve the right to terminate any interaction that violates digital ethics.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
]

const TermsSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="terms" className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Aesthetic Decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20 max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Usage Agreement
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Service</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Clear boundaries and professional standards for interacting with 
              our digital services and intellectual artifacts.
            </motion.p>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {TERMS_PILLARS.map((pillar, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className="group p-8 rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-500 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl ${pillar.bg} ${pillar.color} transition-transform group-hover:scale-110 duration-500`}>
                    <pillar.icon className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {pillar.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Terms Framework */}
          <motion.div 
            variants={FADE_IN_UP}
            className="rounded-[3rem] border border-border/50 bg-card/10 backdrop-blur-md p-10 md:p-16 space-y-12"
          >
            <div className="flex items-center gap-4 text-primary">
              <Gavel className="size-8" />
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Legal Foundation</h3>
            </div>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              {/* Section 01 */}
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-3">
                  <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary text-xs font-mono">01</span>
                  Acceptance of Terms
                </h4>
                <p>
                  By accessing and using this Portfolio (the &quot;Site&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <Separator className="bg-border/50" />

              {/* Section 02 */}
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-3">
                  <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary text-xs font-mono">02</span>
                  Use License & Restrictions
                </h4>
                <div className="space-y-4">
                  <p>
                    Permission is granted to temporarily view the materials on this site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="grid sm:grid-cols-1 gap-3 pl-2">
                    {[
                      "Modify or copy the codebase or design assets",
                      "Use materials for any commercial purpose or public display",
                      "Remove any copyright or other proprietary notations",
                      "Transfer the materials to another person or 'mirror' the materials"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <ArrowRight className="size-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <Separator className="bg-border/50" />

              {/* Section 03 */}
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-3">
                  <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary text-xs font-mono">03</span>
                  Disclaimer & Liability
                </h4>
                <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex gap-4">
                    <AlertCircle className="size-6 text-rose-500 flex-shrink-0 mt-1" />
                    <p className="text-sm">
                      The materials on this site are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose.
                    </p>
                </div>
              </section>

              <Separator className="bg-border/50" />

              {/* Section 04 */}
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-3">
                  <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary text-xs font-mono">04</span>
                  Governing Law
                </h4>
                <p>
                  Any claim relating to this site shall be governed by the laws of Vietnam without regard to its conflict of law provisions. Any legal action or proceeding related to your access to, or use of, the Site shall be instituted in a court in Ho Chi Minh City, VN.
                </p>
              </section>
            </div>

            {/* Footer Stamp */}
            <div className="pt-12 text-center border-t border-border/50">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60">
                 <Scale className="size-3" />
                 Last Sync: Feb 2026 // Terms v1.1.0
               </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TermsSection