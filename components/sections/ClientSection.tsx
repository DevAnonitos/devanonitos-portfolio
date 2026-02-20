"use client"

import React from "react"
import Container from "@/components/layout/Container"
import { motion } from "motion/react"
import { CLIENTS } from "@/constants/clients"
import { useScrollReveal } from "@/hooks"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"

const ClientSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="clients" className="py-20 relative overflow-hidden bg-background/50 border-y border-border/20">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-12"
        >
          <motion.p 
            variants={FADE_IN_UP}
            className="text-center text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground/40"
          >
            Trusted by Industry Leaders
          </motion.p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 group transition-all duration-700">
            {CLIENTS.map((client) => (
              <motion.div 
                key={client.id}
                variants={FADE_IN_UP}
                className="group/client"
              >
                  {/* Since we don't have real logos, we use styled text as placeholders */}
                  <span className="text-xl md:text-3xl font-black tracking-tighter uppercase whitespace-nowrap group-hover/client:text-primary transition-colors duration-500">
                    {client.name}
                  </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ClientSection
