import { Card } from "@/components/ui/card"
import { Link2, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Integration() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-slate-100/[0.01] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
            <Link2 className="h-3 w-3 sm:h-4 sm:w-4" />
            Sinergia Digital
          </div>
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Integração entre Blog e Site
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            Juntos, eles criam uma comunicação completa e eficaz
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <ScrollReveal delay={100}>
            <Card className="order-2 lg:order-1 border-2 border-primary/20 bg-card/50 p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
              <h3 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-card-foreground">
                Uma Comunicação Completa
              </h3>
              <p className="mb-6 sm:mb-8 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
                Quando o blog e o site trabalham juntos, a empresa cria uma comunicação completa: o site fornece
                informações institucionais e de contato, enquanto o blog atrai visitantes e oferece conteúdo relevante.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="group flex gap-3 sm:gap-4 transition-all hover:translate-x-2">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-sm sm:text-base font-bold shadow-lg transition-transform group-hover:scale-110">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm sm:text-base font-semibold text-foreground">Atração</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Blog atrai visitantes com conteúdo relevante e otimizado para SEO
                    </p>
                  </div>
                </div>

                <div className="group flex gap-3 sm:gap-4 transition-all hover:translate-x-2">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-sm sm:text-base font-bold shadow-lg transition-transform group-hover:scale-110">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm sm:text-base font-semibold text-foreground">Engajamento</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Conteúdo educativo constrói confiança e autoridade no mercado
                    </p>
                  </div>
                </div>

                <div className="group flex gap-3 sm:gap-4 transition-all hover:translate-x-2">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-sm sm:text-base font-bold shadow-lg transition-transform group-hover:scale-110">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm sm:text-base font-semibold text-foreground">Conversão</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Site institucional converte visitantes em clientes e parceiros
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200} className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl sm:rounded-3xl border-2 border-primary/20 bg-card/80 p-6 sm:p-8 shadow-xl backdrop-blur-sm transition-all hover:scale-105">
              <div className="mb-4 sm:mb-6 flex items-center justify-between">
                <div className="text-xs sm:text-sm font-semibold text-primary">SITE</div>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              </div>
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <div className="h-2 sm:h-3 w-3/4 rounded bg-gradient-to-r from-primary/30 to-accent/30" />
                <div className="h-2 sm:h-3 w-full rounded bg-muted" />
                <div className="h-2 sm:h-3 w-5/6 rounded bg-muted" />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="h-16 sm:h-20 rounded-lg bg-muted transition-all hover:bg-muted/80" />
                <div className="h-16 sm:h-20 rounded-lg bg-muted transition-all hover:bg-muted/80" />
                <div className="h-16 sm:h-20 rounded-lg bg-muted transition-all hover:bg-muted/80" />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110">
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>

            <div className="mt-8 sm:mt-12 relative rounded-2xl sm:rounded-3xl border-2 border-accent/20 bg-card/80 p-6 sm:p-8 shadow-xl backdrop-blur-sm transition-all hover:scale-105">
              <div className="mb-4 sm:mb-6 flex items-center justify-between">
                <div className="text-xs sm:text-sm font-semibold text-accent">BLOG</div>
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-2 sm:gap-3 transition-all hover:translate-x-2">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-lg bg-muted" />
                    <div className="flex-1 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 w-full rounded bg-muted" />
                      <div className="h-1.5 sm:h-2 w-4/5 rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
