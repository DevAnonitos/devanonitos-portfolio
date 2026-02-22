"use client"

import { ArrowUp } from "lucide-react"
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import { useEffect, useState } from "react"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  // Smooth scroll progress for the outer ring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-background/80 shadow-2xl backdrop-blur-md transition-colors hover:bg-background cursor-pointer"
            aria-label="Back to top"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
               {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted/20"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="283"
                style={{ pathLength: scrollYProgress }}
                className="text-primary"
              />
            </svg>

            {/* Arrow Icon */}
            <ArrowUp className="relative size-6 transition-transform duration-300 group-hover:-translate-y-1" />

            {/* Hover Tooltip (Optional but pro) */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded-lg bg-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all group-hover:scale-100">
              Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
