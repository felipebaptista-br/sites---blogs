"use client"

import { Bot, Layers, Cog, Target, Building2, Lightbulb } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const chatbotTopics = [
  {
    icon: Bot,
    title: "O que é um Chatbot?",
    description: "Entenda o conceito",
    content: {
      definition:
        "Um chatbot é um programa de computador projetado para simular conversas humanas através de inteligência artificial ou regras pré-programadas.",
      characteristics: [
        "Automatiza interações com usuários",
        "Disponível 24 horas por dia, 7 dias por semana",
        "Processa linguagem natural para entender perguntas",
        "Fornece respostas instantâneas e consistentes",
        "Aprende com interações (quando baseado em IA)",
      ],
      importance:
        "Chatbots revolucionaram o atendimento ao cliente, reduzindo custos operacionais e melhorando a experiência do usuário com respostas rápidas e precisas.",
    },
  },
  {
    icon: Layers,
    title: "Tipos de Chatbot",
    description: "Diferentes categorias",
    content: {
      types: [
        {
          name: "Chatbots Baseados em Regras",
          description: "Seguem scripts pré-definidos e árvores de decisão. Ideais para fluxos simples e previsíveis.",
          example: "Menu de opções em atendimento bancário",
        },
        {
          name: "Chatbots com IA e NLP",
          description: "Usam processamento de linguagem natural e machine learning para entender contexto e intenção.",
          example: "ChatGPT, Google Bard, assistentes virtuais avançados",
        },
        {
          name: "Chatbots Híbridos",
          description: "Combinam regras e IA, oferecendo flexibilidade e precisão.",
          example: "Atendimento que usa IA mas escala para humanos quando necessário",
        },
        {
          name: "Chatbots de Voz",
          description: "Interagem através de comandos de voz, integrados a assistentes virtuais.",
          example: "Alexa, Google Assistant, Siri",
        },
      ],
    },
  },
  {
    icon: Cog,
    title: "Como Funciona?",
    description: "Tecnologia por trás",
    content: {
      process: [
        {
          step: "1. Recepção da Mensagem",
          description: "O usuário envia uma mensagem ou pergunta através da interface do chat.",
        },
        {
          step: "2. Processamento de Linguagem Natural (NLP)",
          description: "O chatbot analisa a mensagem, identifica palavras-chave, intenção e contexto.",
        },
        {
          step: "3. Busca de Resposta",
          description:
            "Consulta base de conhecimento, banco de dados ou modelo de IA para encontrar a melhor resposta.",
        },
        {
          step: "4. Geração de Resposta",
          description: "Cria uma resposta apropriada, seja pré-definida ou gerada dinamicamente pela IA.",
        },
        {
          step: "5. Aprendizado Contínuo",
          description: "Chatbots com IA aprendem com cada interação, melhorando suas respostas ao longo do tempo.",
        },
      ],
      technologies:
        "Utiliza tecnologias como Machine Learning, Deep Learning, NLP (Natural Language Processing) e APIs de integração.",
    },
  },
  {
    icon: Target,
    title: "Principais Utilidades",
    description: "Para que servem",
    content: {
      utilities: [
        {
          area: "Atendimento ao Cliente",
          description:
            "Responde dúvidas frequentes, resolve problemas simples e direciona casos complexos para humanos.",
          benefit: "Reduz tempo de espera e custos operacionais",
        },
        {
          area: "Vendas e Marketing",
          description: "Qualifica leads, recomenda produtos, processa pedidos e envia promoções personalizadas.",
          benefit: "Aumenta conversões e engajamento",
        },
        {
          area: "Suporte Técnico",
          description: "Diagnostica problemas, fornece soluções passo a passo e agenda atendimentos.",
          benefit: "Resolve 60-80% das questões automaticamente",
        },
        {
          area: "Recursos Humanos",
          description: "Responde perguntas sobre benefícios, férias, políticas internas e processos seletivos.",
          benefit: "Libera equipe de RH para tarefas estratégicas",
        },
        {
          area: "Educação",
          description: "Tutoria personalizada, responde dúvidas de alunos e fornece materiais de estudo.",
          benefit: "Aprendizado disponível 24/7",
        },
      ],
    },
  },
  {
    icon: Building2,
    title: "Uso nas Empresas",
    description: "Aplicações corporativas",
    content: {
      implementations: [
        {
          sector: "E-commerce",
          usage: "Recomendação de produtos, rastreamento de pedidos, processamento de devoluções e suporte pós-venda.",
          impact: "Aumento de 30-40% na satisfação do cliente",
        },
        {
          sector: "Bancos e Finanças",
          usage: "Consulta de saldo, transferências, pagamentos de contas e detecção de fraudes.",
          impact: "Redução de 70% no volume de chamadas",
        },
        {
          sector: "Saúde",
          usage: "Agendamento de consultas, lembretes de medicação, triagem inicial de sintomas.",
          impact: "Melhora na adesão ao tratamento",
        },
        {
          sector: "Turismo e Hospitalidade",
          usage: "Reservas, check-in/check-out, recomendações de passeios e suporte durante viagens.",
          impact: "Experiência personalizada 24/7",
        },
        {
          sector: "Telecomunicações",
          usage: "Suporte técnico, ativação de serviços, consulta de faturas e planos.",
          impact: "Resolução imediata de 80% das solicitações",
        },
      ],
      roi: "Empresas relatam ROI de 300-400% em 12 meses após implementação de chatbots.",
    },
  },
  {
    icon: Lightbulb,
    title: "Exemplos Práticos",
    description: "Casos reais de sucesso",
    content: {
      examples: [
        {
          company: "Magazine Luiza (Lu)",
          description: "Assistente virtual que ajuda clientes a encontrar produtos, tirar dúvidas e finalizar compras.",
          result: "Mais de 10 milhões de interações mensais",
        },
        {
          company: "Banco Bradesco (BIA)",
          description: "Chatbot que realiza operações bancárias, consultas e oferece produtos financeiros.",
          result: "Atende 1 milhão de clientes por mês",
        },
        {
          company: "Sephora Virtual Artist",
          description: "Chatbot que recomenda produtos de beleza e permite testar maquiagem virtualmente.",
          result: "Aumento de 11% nas conversões",
        },
        {
          company: "Uber",
          description: "Chatbot integrado ao Messenger para solicitar corridas sem abrir o app.",
          result: "Simplificação da experiência do usuário",
        },
        {
          company: "Duolingo",
          description: "Chatbots para prática de conversação em diferentes idiomas.",
          result: "Melhora significativa no aprendizado",
        },
        {
          company: "ChatGPT (OpenAI)",
          description: "IA conversacional avançada para diversas tarefas: escrita, programação, análise, criatividade.",
          result: "100 milhões de usuários em 2 meses",
        },
      ],
    },
  },
]

export function Chatbot() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Chatbots e Inteligência Artificial</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Automatização inteligente que transforma o atendimento e a experiência do cliente
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chatbotTopics.map((topic, index) => (
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
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <topic.icon className="w-6 h-6 text-primary" />
                      {topic.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-muted-foreground text-base pt-4">
                    {topic.title === "O que é um Chatbot?" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Definição</h4>
                          <p>{topic.content.definition}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Características</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {topic.content.characteristics?.map((char, i) => (
                              <li key={i}>{char}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Importância</h4>
                          <p>{topic.content.importance}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Tipos de Chatbot" && (
                      <div className="space-y-4 text-left">
                        {topic.content.types?.map((type, i) => (
                          <div key={i} className="border-l-2 border-primary pl-4">
                            <h4 className="font-semibold text-foreground mb-1">{type.name}</h4>
                            <p className="mb-1">{type.description}</p>
                            <p className="text-sm italic">Exemplo: {type.example}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {topic.title === "Como Funciona?" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Processo de Funcionamento</h4>
                          {topic.content.process?.map((item, i) => (
                            <div key={i} className="mb-3 pl-4 border-l-2 border-primary/50">
                              <h5 className="font-medium text-foreground">{item.step}</h5>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Tecnologias Utilizadas</h4>
                          <p>{topic.content.technologies}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Principais Utilidades" && (
                      <div className="space-y-4 text-left">
                        {topic.content.utilities?.map((utility, i) => (
                          <div key={i} className="border-l-2 border-primary pl-4">
                            <h4 className="font-semibold text-foreground mb-1">{utility.area}</h4>
                            <p className="mb-1">{utility.description}</p>
                            <p className="text-sm text-primary font-medium">✓ {utility.benefit}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {topic.title === "Uso nas Empresas" && (
                      <div className="space-y-4 text-left">
                        {topic.content.implementations?.map((impl, i) => (
                          <div key={i} className="border-l-2 border-primary pl-4">
                            <h4 className="font-semibold text-foreground mb-1">{impl.sector}</h4>
                            <p className="mb-1">{impl.usage}</p>
                            <p className="text-sm text-primary font-medium">📊 {impl.impact}</p>
                          </div>
                        ))}
                        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                          <p className="font-semibold text-foreground">{topic.content.roi}</p>
                        </div>
                      </div>
                    )}
                    {topic.title === "Exemplos Práticos" && (
                      <div className="space-y-4 text-left">
                        {topic.content.examples?.map((example, i) => (
                          <div key={i} className="border-l-2 border-primary pl-4">
                            <h4 className="font-semibold text-foreground mb-1">{example.company}</h4>
                            <p className="mb-1">{example.description}</p>
                            <p className="text-sm text-primary font-medium">🎯 {example.result}</p>
                          </div>
                        ))}
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
