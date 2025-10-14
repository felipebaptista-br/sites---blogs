import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Shield, Users, Search } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const reasons = [
  {
    icon: Shield,
    title: "Profissionalismo e Confiança",
    description:
      "Sites e blogs atualizados transmitem que sua empresa está ativa, relevante e comprometida com seu público.",
  },
  {
    icon: Search,
    title: "Melhor Posicionamento SEO",
    description:
      "Motores de busca priorizam sites com conteúdo fresco e relevante, aumentando sua visibilidade online.",
  },
  {
    icon: Users,
    title: "Engajamento do Público",
    description: "Conteúdo atualizado mantém seu público interessado e voltando para mais informações.",
  },
  {
    icon: TrendingUp,
    title: "Autoridade no Mercado",
    description: "Publicações frequentes estabelecem sua empresa como referência e líder de pensamento no setor.",
  },
]

export function WhyUpdate() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Por que Manter Sites e Blogs Atualizados?
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            A atualização constante é fundamental para o sucesso digital
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12 mb-12 sm:mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group border-2 border-primary/20 bg-card/50 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-card-foreground">{reason.title}</h3>
                    <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-slate-100/[0.01] bg-[size:30px_30px]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg">
                <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-foreground">
                Pronto para Transformar sua Presença Digital?
              </h3>
              <p className="mb-6 sm:mb-8 text-pretty text-base sm:text-lg text-muted-foreground">
                Manter sites e blogs atualizados transmite profissionalismo, confiança e relevância. Comece hoje a
                construir uma presença digital que realmente faz a diferença.
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
