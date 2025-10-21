"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageSquare, Shield, CheckCircle2 } from "lucide-react"

export function CustomerService() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Canais de Atendimento ao Cliente</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Entenda como funcionam os principais canais de comunicação entre empresas e consumidores
            </p>
          </div>
        </ScrollReveal>

        {/* SAC Section */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">SAC - Serviço de Atendimento ao Cliente</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Origem do SAC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Surgiu da necessidade de centralizar o atendimento ao cliente
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Ganhou força no Brasil com o Código de Defesa do Consumidor (1990)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Exigência de canais eficazes, gratuitos e acessíveis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Características
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Atende por telefone, e-mail, chat, redes sociais e presencial
                  </p>
                  <p className="text-sm text-muted-foreground">• Profissionais treinados e protocolos de atendimento</p>
                  <p className="text-sm text-muted-foreground">
                    • Regulamentado pela Anatel e Código de Defesa do Consumidor
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Exemplo
                  </CardTitle>
                  <CardDescription>SAC da Motiva</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Atendimento via telefone, site, ou presencial</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Ouvidoria Section */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent/10">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">Ouvidoria</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>O que é a Ouvidoria?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Segunda instância de atendimento</p>
                  <p className="text-sm text-muted-foreground">• Atende reclamações não resolvidas pelo SAC</p>
                  <p className="text-sm text-muted-foreground">• Trata de casos mais complexos e sensíveis</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Origem da Ouvidoria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Baseada no modelo sueco do "ombudsman" (1809)</p>
                  <p className="text-sm text-muted-foreground">
                    • No Brasil, começou no setor público nas décadas de 1980/90
                  </p>
                  <p className="text-sm text-muted-foreground">• Expandiu para empresas privadas como canal autônomo</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Características da Ouvidoria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Canal imparcial e autônomo dentro da empresa</p>
                  <p className="text-sm text-muted-foreground">• Análise formal e rigorosa das reclamações</p>
                  <p className="text-sm text-muted-foreground">
                    • Atua na melhoria dos processos e monitoramento do atendimento
                  </p>
                  <p className="text-sm text-muted-foreground">• Acessada com número de protocolo do SAC</p>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle>Exemplo de Ouvidoria</CardTitle>
                  <CardDescription>Caso prático</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Passageiro registra problema na catraca via SAC</p>
                  <p className="text-sm text-muted-foreground">• Sem solução em 7 dias</p>
                  <p className="text-sm text-muted-foreground">
                    • Entra no site da ViaMobilidade e preenche o formulário da ouvidoria com o protocolo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Telefone Section */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-chart-1/10">
                <Phone className="w-8 h-8 text-chart-1" />
              </div>
              <h3 className="text-3xl font-bold">O Telefone no Atendimento</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-1" />
                    Origem do Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Inventado por Alexander Graham Bell (1876)</p>
                  <p className="text-sm text-muted-foreground">• Uso empresarial iniciou no início do século XX</p>
                  <p className="text-sm text-muted-foreground">
                    • Popularização de call centers no Brasil nos anos 1990
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-1" />
                    Características
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Comunicação em tempo real</p>
                  <p className="text-sm text-muted-foreground">
                    • Acessível, mas pode ter tempo de espera ou menus automáticos
                  </p>
                  <p className="text-sm text-muted-foreground">• Preferido por muitos consumidores pela agilidade</p>
                </CardContent>
              </Card>

              <Card className="bg-chart-1/5 border-chart-1/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-1" />
                    Exemplo
                  </CardTitle>
                  <CardDescription>Cliente bancário</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Liga para o SAC do banco e consulta saldo via atendimento automático ou humano
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
