"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({ children, reverse = false, pauseOnHover = true, className, speed = "normal" }: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed]

  return (
    <div className={cn("group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)]",
          speedClass,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)]",
          speedClass,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
