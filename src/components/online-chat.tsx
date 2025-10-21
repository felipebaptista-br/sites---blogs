"use client"

import { MessageSquare, HistoryIcon, Shield, Zap, Users, Globe } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const chatTopics = [
  {
    icon: MessageSquare,
    title: "O que é Chat Online?",
    description: "Clique para saber mais",
    content: {
      definition: "Comunicação em tempo real via internet, permitindo troca instantânea de mensagens entre usuários.",
      usage: "Utilizado em redes sociais, sites corporativos, aplicativos móveis e sistemas de atendimento ao cliente.",
      benefits: [
        "Comunicação instantânea e eficiente",
        "Redução de custos operacionais",
        "Disponibilidade 24/7",
        "Registro de conversas para análise",
      ],
    },
  },
  {
    icon: HistoryIcon,
    title: "Evolução do Chat",
    description: "Da origem aos dias atuais",
    content: {
      past: "Início com IRC (Internet Relay Chat), MSN Messenger e ICQ nos anos 90 e início dos 2000.",
      present: "Hoje dominado por WhatsApp, Messenger, Telegram e chatbots com inteligência artificial.",
      impact:
        "A evolução trouxe recursos como chamadas de voz/vídeo, compartilhamento de arquivos, criptografia e integração com IA.",
    },
  },
  {
    icon: Zap,
    title: "Principais Aplicações",
    description: "Como o chat é usado",
    content: {
      customerService: "Atendimento ao cliente com suporte via chat e chatbots automatizados",
      business: "Comunicação empresarial através de plataformas como Slack e Microsoft Teams",
      education: "Educação com grupos de estudo, tutoria online e aulas interativas",
      social: "Socialização e networking em tempo real",
    },
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Proteção de dados",
    content: {
      encryption: "Uso de criptografia de ponta a ponta para proteger mensagens e dados pessoais",
      risks: ["Golpes e phishing", "Engenharia social", "Vazamento de informações", "Links maliciosos"],
      tips: "Sempre verifique a autenticidade de links, não compartilhe dados sensíveis e use plataformas confiáveis.",
    },
  },
  {
    icon: Users,
    title: "Ferramentas Populares",
    description: "Plataformas mais usadas",
    content: {
      mobile: "WhatsApp, Telegram, Messenger - focados em comunicação pessoal",
      corporate: "Slack, Microsoft Teams, Zoom Chat - para ambientes corporativos",
      websites: "Zendesk, Intercom, LiveChat - integrados a sites e e-commerce",
      integration: "Integração com CRM e sistemas de gestão para atendimento ágil e personalizado",
    },
  },
  {
    icon: Globe,
    title: "Futuro do Chat",
    description: "Tendências e inovações",
    content: {
      ai: "Chats com inteligência artificial cada vez mais avançada e natural",
      ar: "Integração com realidade aumentada e assistentes virtuais imersivos",
      translation: "Comunicação multilíngue com tradução automática em tempo real",
      automation: "Automação completa de processos de atendimento e vendas",
    },
  },
]

export function OnlineChat() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Chat Online</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comunicação em tempo real que revolucionou a forma como nos conectamos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chatTopics.map((topic, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        <topic.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                      <p className="text-xs text-primary font-medium">Clique para explorar →</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <topic.icon className="w-6 h-6 text-primary" />
                      {topic.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-muted-foreground text-base pt-4">
                    {topic.title === "O que é Chat Online?" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Definição</h4>
                          <p>{topic.content.definition}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Utilização</h4>
                          <p>{topic.content.usage}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Benefícios</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {topic.content.benefits?.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {topic.title === "Evolução do Chat" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Passado</h4>
                          <p>{topic.content.past}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Presente</h4>
                          <p>{topic.content.present}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Impacto</h4>
                          <p>{topic.content.impact}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Principais Aplicações" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Atendimento ao Cliente</h4>
                          <p>{topic.content.customerService}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Comunicação Empresarial</h4>
                          <p>{topic.content.business}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Educação</h4>
                          <p>{topic.content.education}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Socialização</h4>
                          <p>{topic.content.social}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Segurança e Privacidade" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Criptografia</h4>
                          <p>{topic.content.encryption}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Riscos Comuns</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {topic.content.risks?.map((risk, i) => (
                              <li key={i}>{risk}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Dicas de Segurança</h4>
                          <p>{topic.content.tips}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Ferramentas Populares" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Aplicativos Móveis</h4>
                          <p>{topic.content.mobile}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Plataformas Corporativas</h4>
                          <p>{topic.content.corporate}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Chat para Websites</h4>
                          <p>{topic.content.websites}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Integração</h4>
                          <p>{topic.content.integration}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Futuro do Chat" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Inteligência Artificial</h4>
                          <p>{topic.content.ai}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Realidade Aumentada</h4>
                          <p>{topic.content.ar}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Tradução Automática</h4>
                          <p>{topic.content.translation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Automação</h4>
                          <p>{topic.content.automation}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
