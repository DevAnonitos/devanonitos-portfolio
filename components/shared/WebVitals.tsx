"use client"

import { cn } from "@/lib/utils"
import { Activity, BarChart3, Gauge, ShieldCheck, X, Zap } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useReportWebVitals } from "next/web-vitals"
import { useState } from "react"

interface Metric {
  id: string
  name: string
  label: string
  value: number
}

const WebVitals = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({})
  const [isOpen, setIsOpen] = useState(false)

  // Tracking Core Web Vitals
  useReportWebVitals((metric) => {
    setMetrics((prev) => ({
      ...prev,
      [metric.name]: metric.value,
    }))

    // Also log in development for debugging
    if (process.env.NODE_ENV === "development") {
      console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value * 100) / 100)
    }
  })

  const getMetricColor = (name: string, value: number) => {
    // Basic thresholds for "Good" status
    const thresholds: Record<string, number> = {
      FCP: 1800, // First Contentful Paint < 1.8s
      LCP: 2500, // Largest Contentful Paint < 2.5s
      CLS: 0.1,  // Cumulative Layout Shift < 0.1
      FID: 100,  // First Input Delay < 100ms
      TTFB: 600, // Time to First Byte < 600ms
    }

    if (!thresholds[name]) return "text-primary"
    return value <= thresholds[name] ? "text-emerald-500" : "text-amber-500"
  }

  const formatValue = (name: string, value: number) => {
    if (name === "CLS") return value.toFixed(3)
    return `${Math.round(value)}ms`
  }

  return (
    <>
      {/* Floating Indicator (Pulse) */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[100] group flex items-center gap-3 rounded-full bg-background/80 p-2 pr-4 shadow-2xl backdrop-blur-md border border-border/50 hover:bg-background transition-all"
        aria-label="Site Performance Status"
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <Activity className="size-5" />
          <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Site Status</span>
          <span className="text-xs font-black text-emerald-500 uppercase">Optimized</span>
        </div>
      </motion.button>

      {/* Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg rounded-[2.5rem] border border-border/50 bg-card/80 p-8 shadow-3xl backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Gauge className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Core Web Vitals</h2>
                    <p className="text-xs text-muted-foreground font-medium">Real-time performance metrics</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-muted/50 text-muted-foreground transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(metrics).length > 0 ? (
                  Object.entries(metrics).map(([name, value]) => (
                    <div key={name} className="p-5 rounded-3xl bg-background/40 border border-border/40 space-y-3">
                      <div className="flex items-center gap-2">
                        {name === "LCP" ? <Zap className="size-3.5 text-amber-500" /> : <BarChart3 className="size-3.5 text-blue-500" />}
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{name}</span>
                      </div>
                      <div className={cn("text-2xl font-black tabular-nums tracking-tight", getMetricColor(name, value))}>
                        {formatValue(name, value)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center space-y-4">
                    <Activity className="size-12 text-muted/20 mx-auto animate-pulse" />
                    <p className="text-sm text-muted-foreground font-medium italic">Warming up engines... Just a second.</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">System Healthy</span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/50">Next.js v15.x // Client Edge</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WebVitals
