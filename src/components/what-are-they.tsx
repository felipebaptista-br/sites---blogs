import { Card } from "@/components/ui/card"
import { Globe, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function WhatAreThey() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            O que são Sites e Blogs?
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            Entenda as diferenças fundamentais entre essas duas ferramentas essenciais
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <ScrollReveal delay={100}>
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card/50 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-lg shadow-primary/20">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-card-foreground">Site Empresarial</h3>
                <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                  O site empresarial é o{" "}
                  <strong className="text-foreground">principal canal de comunicação online</strong> de uma empresa. Ele
                  apresenta informações institucionais, produtos, serviços e formas de contato de maneira estruturada e
                  profissional.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Conteúdo estático e institucional
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Foco em credibilidade e profissionalismo
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Estrutura hierárquica de páginas
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="group relative overflow-hidden border-2 border-accent/20 bg-card/50 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent shadow-lg shadow-accent/20">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-card-foreground">Blog Corporativo</h3>
                <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                  O blog corporativo é uma <strong className="text-foreground">plataforma dinâmica</strong>, criada para
                  publicar conteúdos com frequência. Ele engaja o público através de artigos relevantes, educativos e
                  atualizados sobre o setor.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Conteúdo dinâmico e atualizado
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Foco em engajamento e educação
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Publicações cronológicas
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
