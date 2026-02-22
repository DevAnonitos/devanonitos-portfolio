"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"

import { PageTransitionProps } from "@/types"

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
