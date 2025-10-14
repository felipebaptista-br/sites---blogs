import { Card } from "@/components/ui/card"
import { RefreshCw, MessageCircle, Target, Clock, Users, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const differences = [
  {
    icon: RefreshCw,
    title: "Atualização de Conteúdo",
    site: "Atualizado esporadicamente",
    blog: "Atualizado frequentemente",
    description:
      "Sites mantêm informações estáveis, enquanto blogs publicam novos conteúdos regularmente para manter o público engajado.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação com o Público",
    site: "Comunicação unidirecional",
    blog: "Comunicação bidirecional",
    description:
      "Sites apresentam informações, blogs criam conversas através de comentários, compartilhamentos e interações.",
  },
  {
    icon: Target,
    title: "Função no Marketing Digital",
    site: "Conversão e credibilidade",
    blog: "Atração e engajamento",
    description:
      "Sites convertem visitantes em clientes, blogs atraem novos visitantes através de conteúdo relevante e SEO.",
  },
]

const benefits = [
  { icon: Clock, text: "Conteúdo sempre atualizado" },
  { icon: Users, text: "Maior engajamento do público" },
  { icon: TrendingUp, text: "Melhor posicionamento em buscadores" },
]

export function Differences() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Diferenças entre Site e Blog
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            Cada um tem seu papel estratégico na presença digital
          </p>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {differences.map((diff, index) => {
            const Icon = diff.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

                  <div className="relative grid lg:grid-cols-[auto_1fr_1fr] gap-4 sm:gap-6 p-6 sm:p-8">
                    <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                      <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-card-foreground lg:mt-4">{diff.title}</h3>
                    </div>

                    <div className="space-y-2 sm:space-y-3 border-l-2 border-primary/30 pl-4 sm:pl-6">
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">Site</div>
                      <p className="text-base sm:text-lg font-medium text-foreground">{diff.site}</p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 border-l-2 border-accent/30 pl-4 sm:pl-6">
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-accent">Blog</div>
                      <p className="text-base sm:text-lg font-medium text-foreground">{diff.blog}</p>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-2 border-t border-border/50 pt-3 sm:pt-4 lg:border-t-0 lg:pt-0">
                      <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={300} className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-accent/20 bg-accent/5 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20"
              >
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 text-accent transition-transform group-hover:scale-110" />
                <p className="text-sm sm:text-base font-medium text-foreground">{benefit.text}</p>
              </div>
            )
          })}
        </ScrollReveal>
      </div>
    </section>
  )
}
