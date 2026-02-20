"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Cookie, 
  UserCheck, 
  Mail,
  Scale
} from "lucide-react"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { Separator } from "@/components/ui/separator"

const PRIVACY_CONTENT = [
  {
    icon: ShieldCheck,
    title: "Data Protection",
    content: "We take the security of your data seriously. All information processed through this portfolio is encrypted and handled with the highest standards of digital hygiene.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Eye,
    title: "Information Collection",
    content: "We only collect minimal technical data necessary for site optimization and security, such as anonymized IP addresses and usage patterns through sustainable analytics.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    content: "Our site uses persistent cookies solely to remember your preferences (like dark mode) and to provide a seamless browsing experience across sessions.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the full right to access, rectify, or request the deletion of any personal information you may have provided via our contact forms at any time.",
    color: "text-violet-500",
    bg: "bg-violet-500/10"
  }
]

const PrivacySection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="privacy" className="py-24 relative overflow-hidden bg-background">
      {/* Premium Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20 max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Legal Compliance
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Protocol</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Transparent rules on how we handle and protect your digital footprint 
              while you explore our technical artifacts.
            </motion.p>
          </div>

          {/* Key Principles Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {PRIVACY_CONTENT.map((item, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className="group p-8 rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-500 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl ${item.bg} ${item.color} transition-transform group-hover:scale-110 duration-500`}>
                    <item.icon className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Legal Text Area */}
          <motion.div 
            variants={FADE_IN_UP}
            className="rounded-[3rem] border border-border/50 bg-card/10 backdrop-blur-md p-10 md:p-16 space-y-12"
          >
            <div className="flex items-center gap-4 text-primary">
              <Scale className="size-8" />
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Detailed Framework</h3>
            </div>
            
            <div className="grid lg:grid-cols-1 gap-12 text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">01.</span> Introduction
                </h4>
                <p>
                  This Privacy Policy describes how [Your Name/DevAnonitos] (the &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from [Your Portfolio URL] (the &quot;Site&quot;) or otherwise communicate with us (collectively, the &quot;Services&quot;).
                </p>
              </section>

              <Separator className="bg-border/50" />

              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">02.</span> Use of Personal Information
                </h4>
                <p>
                  We use your personal information to provide you with the Services, which includes: technical maintenance, responding to inquiries via the contact form, and improving the site navigation based on anonymized traffic analytics. We do not sell or trade your data with third-party marketing entities.
                </p>
              </section>

              <Separator className="bg-border/50" />

              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">03.</span> Security Measures
                </h4>
                <p>
                  Please note that no security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security&quot;. In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.
                </p>
              </section>

              <Separator className="bg-border/50" />

              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">04.</span> Contact & Queries
                </h4>
                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary font-bold">
                       <Mail className="size-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Email Support</p>
                        <p className="text-foreground font-semibold">legal@devanonitos.com</p>
                    </div>
                  </div>
                  <button className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    Contact Legal Desk
                  </button>
                </div>
              </section>
            </div>

            <div className="pt-8 text-center">
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase font-bold">
                Last Encryption Check: Feb 2026 // v2.0.4 Security Update
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default PrivacySection