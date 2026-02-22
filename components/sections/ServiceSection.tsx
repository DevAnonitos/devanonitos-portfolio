"use client"

import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/constants/animations"
import { SERVICES } from "@/constants/services"
import { useScrollReveal } from "@/hooks"
import { cn } from "@/lib/utils"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const ServiceSection = () => {
  const { ref, controls } = useScrollReveal({ amount: 0.1 })

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <motion.div variants={FADE_IN_UP}>
              <Badge variant="outline" className="rounded-full px-6 py-2 text-primary border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase">
                Specialized Services
              </Badge>
            </motion.div>
            <motion.h2 variants={FADE_IN_UP} className="text-4xl md:text-7xl font-bold tracking-tight">
              Values I bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">to the table</span>
            </motion.h2>
            <motion.p variants={FADE_IN_UP} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Tailored digital solutions blending technical expertise with creative problem-solving
              to help you build, scale, and innovate.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service: Service, index) => (
              <motion.div
                key={service.id}
                variants={FADE_IN_UP}
                className="group relative p-8 md:p-12 rounded-[3rem] border border-border/50 bg-card/20 backdrop-blur-xl hover:border-primary/30 hover:bg-card/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="space-y-8">
                  {/* Service Icon */}
                  <div className={cn(
                    "size-16 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    service.bg,
                    service.color
                  )}>
                    <service.icon className="size-8" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags/List */}
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/40 text-[10px] md:text-xs font-bold tracking-wider uppercase text-foreground/80"
                      >
                        <CheckCircle2 className={cn("size-3", service.color)} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                    <span>Discuss Project</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>

                {/* Aesthetic Corner Number */}
                <div className="absolute bottom-10 right-10 text-6xl font-black italic tracking-tighter text-muted-foreground/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                   0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ServiceSection
