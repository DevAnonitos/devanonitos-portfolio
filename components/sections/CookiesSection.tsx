"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  ShieldCheck, 
  Info, 
  MousePointer2,
  Lock,
  RefreshCcw
} from "lucide-react"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { Separator } from "@/components/ui/separator"

const COOKIE_TYPES = [
  {
    icon: ShieldCheck,
    title: "Essential Cookies",
    content: "Crucial for basic site functionality. These allow you to navigate the site and use essential features like secure sessions and preference memory.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    content: "Help us understand how visitors interact with our portfolio by collecting and reporting information anonymously. We use this to improve performance.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    content: "Enable the site to remember information that changes the way the site behaves or looks, such as your preferred theme (Dark/Light) or region.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: MousePointer2,
    title: "User Control",
    content: "You have the absolute right to manage your cookie preferences through your browser settings or our dedicated cookie management interface.",
    color: "text-violet-500",
    bg: "bg-violet-500/10"
  }
]

const CookiesSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="cookies" className="py-24 relative overflow-hidden bg-background">
      {/* Premium Background Ornaments */}
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
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={FADE_IN_UP} className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Privacy Transparency
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Protocol</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              How we use small data fragments to enhance your interaction with our 
              digital environment while maintaining absolute privacy.
            </motion.p>
          </div>

          {/* Cookie Types Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {COOKIE_TYPES.map((type, index) => (
              <motion.div
                key={index}
                variants={FADE_IN_UP}
                className="group p-8 rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-500 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl ${type.bg} ${type.color} transition-transform group-hover:scale-110 duration-500`}>
                    <type.icon className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {type.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Policy Content */}
          <motion.div 
            variants={FADE_IN_UP}
            className="rounded-[3rem] border border-border/50 bg-card/10 backdrop-blur-md p-10 md:p-16 space-y-12"
          >
            <div className="flex items-center gap-4 text-primary">
              <Info className="size-8" />
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Usage Details</h3>
            </div>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">01.</span> What are Cookies?
                </h4>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
              </section>

              <Separator className="bg-border/50" />

              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">02.</span> How we use them
                </h4>
                <p>
                  On this portfolio, we use cookies to recognize your device and remember your preferences (like choosing between dark and light mode). We also use them for internal analytics to see which sections are most popular, helping us optimize the user experience for everyone.
                </p>
              </section>

              <Separator className="bg-border/50" />

              <section className="space-y-4">
                <h4 className="text-foreground font-bold text-xl flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">03.</span> Managing your preferences
                </h4>
                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary font-bold">
                       <RefreshCcw className="size-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60">System Toggle</p>
                        <p className="text-foreground font-semibold">Reset Cookie Preferences</p>
                    </div>
                  </div>
                  <button className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                    <Lock className="size-4" />
                    Manage Settings
                  </button>
                </div>
                <p className="text-sm italic">
                  Note: Disabling certain cookies may impact the visual consistency and interactive features of the portfolio.
                </p>
              </section>
            </div>

            <div className="pt-8 text-center">
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase font-bold">
                 Protocol Version: 1.0.2 // Zero-Data Tracking Compliant
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CookiesSection