"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Globe } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1050px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Globe className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">Sites & Blogs</span>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
