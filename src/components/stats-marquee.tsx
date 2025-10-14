"use client"

import { Marquee } from "@/components/marquee"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TrendingUp, Users, Globe, Zap, Target, BarChart } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "70%",
    label: "Aumento em conversões com blog ativo",
  },
  {
    icon: Users,
    value: "3x",
    label: "Mais engajamento com conteúdo regular",
  },
  {
    icon: Globe,
    value: "90%",
    label: "Das empresas têm presença digital",
  },
  {
    icon: Zap,
    value: "5s",
    label: "Para formar primeira impressão online",
  },
  {
    icon: Target,
    value: "67%",
    label: "Mais leads com marketing de conteúdo",
  },
  {
    icon: BarChart,
    value: "13x",
    label: "Mais ROI com estratégia de blog",
  },
]

export function StatsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-gradient-to-b from-background via-primary/5 to-background py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
              Números que{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Impressionam
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Estatísticas que comprovam o poder de uma presença digital bem estruturada
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {/* First marquee - moving right */}
          <Marquee speed="slow" className="py-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex min-w-[300px] items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-pretty">{stat.label}</div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Second marquee - moving left */}
          <Marquee speed="slow" reverse className="py-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex min-w-[300px] items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 transition-transform group-hover:scale-110">
                  <stat.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-pretty">{stat.label}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Dados baseados em estudos de marketing digital e comportamento do consumidor
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
