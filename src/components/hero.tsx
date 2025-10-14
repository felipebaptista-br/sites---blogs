"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, FileText, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

      <div className="min-h-[calc(100vh-30rem)] relative mx-auto max-w-[1050px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <ScrollReveal className="w-full space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Presença Digital Estratégica
            </div>

            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground lg:text-6xl xl:text-7xl">
              Sites & Blogs
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Corporativos
              </span>
            </h1>

            <p className="text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Descubra como sites e blogs trabalham juntos para criar uma presença digital completa, engajar seu público
              e construir autoridade no mercado.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
