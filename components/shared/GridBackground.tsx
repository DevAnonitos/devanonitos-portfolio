"use client"

import { cn } from "@/lib/utils"

import { GridBackgroundProps } from "@/types"

const GridBackground = ({
  className,
  variant = "grid"
}: GridBackgroundProps) => {
  return (
    <div className={cn(
      "pointer-events-none absolute inset-0 -z-20 overflow-hidden",
      className
    )}>
      {/* Background radial gradient check for smoother edges */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {variant === "grid" && (
        <div
          className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        />
      )}

      {variant === "dot" && (
        <div
          className="absolute inset-0 h-full w-full bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:24px_24px]"
        />
      )}

      {variant === "mesh" && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]">
          <defs>
            <pattern
              id="mesh-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      )}

      {/* Subtle Glows to break the monotony */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] translate-x-1/2 translate-y-1/2" />
    </div>
  )
}

export default GridBackground
