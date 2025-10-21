import { Globe, Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 backdrop-blur-sm">
      <div className="mx-auto max-w-[1050px]">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              Sites & Blogs
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Transformando a presença digital de empresas através de conteúdo estratégico e relevante.
            </p>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">Recursos</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Casos de Sucesso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">Conecte-se</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-border/50 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 Sites & Blogs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
