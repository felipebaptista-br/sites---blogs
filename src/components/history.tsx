import { Card } from "@/components/ui/card"
import { Building2, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const pioneers = [
  {
    company: "Microsoft",
    year: "2003",
    author: "Robert Scoble",
    blog: "Scobleizer",
    description:
      "Criou um dos primeiros blogs corporativos, abordando produtos, cultura da empresa e críticas construtivas. Revolucionou a transparência corporativa.",
    color: "primary",
  },
  {
    company: "Sun Microsystems",
    year: "2004",
    author: "Jonathan Schwartz (CEO)",
    blog: "Blog do CEO",
    description:
      "O CEO publicava posts sobre tecnologia e decisões estratégicas, tornando a comunicação mais direta e transparente com stakeholders.",
    color: "accent",
  },
  {
    company: "Google",
    year: "2004",
    author: "Equipe Google",
    blog: "Google Official Blog",
    description:
      "Divulga produtos, atualizações e mudanças internas, reforçando a transparência da empresa e estabelecendo um padrão para blogs corporativos.",
    color: "primary",
  },
]

export function History() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-slate-100/[0.01] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-[1050px]">
        <ScrollReveal className="mb-12 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            História
          </div>
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Os Primeiros Blogs Corporativos
          </h2>
          <p className="mt-3 sm:mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
            Pioneiros que transformaram a comunicação empresarial na era digital
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pioneers.map((pioneer, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="relative overflow-hidden border-2 border-primary/20 bg-card/50 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-xl transition-opacity hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 sm:mb-6 flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg">
                      <Building2 className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 sm:px-3 text-xs sm:text-sm font-bold text-primary backdrop-blur-sm">
                      {pioneer.year}
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-card-foreground">{pioneer.company}</h3>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-muted-foreground">{pioneer.author}</p>

                  <div className="mb-3 sm:mb-4 inline-block rounded-lg bg-muted px-2.5 py-1 sm:px-3 text-xs sm:text-sm font-mono text-foreground">
                    {pioneer.blog}
                  </div>

                  <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {pioneer.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
