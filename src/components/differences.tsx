"use client"

import { Card } from "@/components/ui/card"
import { RefreshCw, MessageCircle, Target, Clock, Users, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

const differences = [
  {
    icon: RefreshCw,
    title: "Atualização de Conteúdo",
    site: "Atualizado esporadicamente",
    blog: "Atualizado frequentemente",
    description:
      "Sites mantêm informações estáveis, enquanto blogs publicam novos conteúdos regularmente para manter o público engajado.",
    detailedInfo: {
      siteDetails:
        "Sites corporativos geralmente são atualizados apenas quando há mudanças significativas na empresa, como novos produtos, serviços ou informações institucionais. A frequência pode variar de semanas a meses.",
      blogDetails:
        "Blogs corporativos devem ser atualizados regularmente, idealmente de 2 a 4 vezes por semana, para manter o público engajado e melhorar o SEO. Conteúdo fresco é essencial para ranqueamento.",
      bestPractice:
        "A melhor estratégia é manter o site como base institucional estável e usar o blog para conteúdo dinâmico e educacional que atrai visitantes através de buscadores.",
    },
  },
  {
    icon: MessageCircle,
    title: "Comunicação com o Público",
    site: "Comunicação unidirecional",
    blog: "Comunicação bidirecional",
    description:
      "Sites apresentam informações, blogs criam conversas através de comentários, compartilhamentos e interações.",
    detailedInfo: {
      siteDetails:
        "Sites corporativos funcionam como vitrines digitais, apresentando informações sobre a empresa de forma estruturada. A comunicação é principalmente da empresa para o público, sem muita interação direta.",
      blogDetails:
        "Blogs permitem comentários, compartilhamentos em redes sociais e discussões. Essa interação cria uma comunidade em torno da marca e fornece feedback valioso sobre as necessidades do público.",
      bestPractice:
        "Use o site para informações oficiais e o blog para criar diálogo. Responda comentários, faça perguntas aos leitores e incentive o compartilhamento de experiências.",
    },
  },
  {
    icon: Target,
    title: "Função no Marketing Digital",
    site: "Conversão e credibilidade",
    blog: "Atração e engajamento",
    description:
      "Sites convertem visitantes em clientes, blogs atraem novos visitantes através de conteúdo relevante e SEO.",
    detailedInfo: {
      siteDetails:
        "O site é otimizado para conversão, com CTAs claros, páginas de produtos/serviços bem estruturadas e formulários de contato. É onde o visitante toma a decisão de compra ou contato.",
      blogDetails:
        "O blog atrai visitantes através de conteúdo educacional e informativo que responde às dúvidas do público. É o topo do funil de vendas, gerando tráfego orgânico e construindo autoridade.",
      bestPractice:
        "Integre blog e site: use o blog para atrair visitantes com conteúdo de valor e direcione-os para páginas de conversão no site através de CTAs estratégicos e links internos.",
    },
  },
]

const benefits = [
  { icon: Clock, text: "Conteúdo sempre atualizado" },
  { icon: Users, text: "Maior engajamento do público" },
  { icon: TrendingUp, text: "Melhor posicionamento em buscadores" },
]

export function Differences() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Diferenças entre Site e Blog
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            Clique nos cards para saber mais sobre cada diferença
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differences.map((diff, index) => {
            const Icon = diff.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

                      <div className="relative p-6 flex flex-col items-center text-center space-y-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg transition-transform group-hover:scale-110">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-card-foreground">{diff.title}</h3>
                        <p className="text-sm text-muted-foreground">Clique para ver detalhes</p>
                      </div>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        {diff.title}
                      </DialogTitle>
                      <DialogDescription className="text-base pt-2">{diff.description}</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 pt-4">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary" />
                          Site Corporativo
                        </h4>
                        <p className="text-muted-foreground leading-relaxed pl-3">{diff.detailedInfo.siteDetails}</p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-accent flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-accent" />
                          Blog Corporativo
                        </h4>
                        <p className="text-muted-foreground leading-relaxed pl-3">{diff.detailedInfo.blogDetails}</p>
                      </div>

                      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4 space-y-2">
                        <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          Melhor Prática
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {diff.detailedInfo.bestPractice}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
