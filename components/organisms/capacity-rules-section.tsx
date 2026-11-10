import { SectionHeader } from "@/components/molecules/section-header"
import { RuleItem } from "@/components/molecules/rule-item"
import { Badge } from "@/components/atoms/badge"
import { Text } from "@/components/atoms/text"
import { Users, DollarSign, PawPrint, Car, MapPin } from "lucide-react"

export function CapacityRulesSection() {
  const rules = [
    {
      icon: Users,
      title: "Capacidade Máxima",
      description: "Até 10 pessoas incluindo crianças. Ambiente ideal para famílias e grupos de amigos.",
      type: "info" as const,
    },
    {
      icon: DollarSign,
      title: "Pessoas Extras",
      description: "Taxa adicional será cobrada para pessoas além da capacidade acordada.",
      type: "warning" as const,
    },
    {
      icon: PawPrint,
      title: "Política de Pets",
      description: "Não aceitamos animais de estimação para manter o ambiente adequado para todos.",
      type: "warning" as const,
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas seguras para até 5 carros dentro da propriedade.",
      type: "success" as const,
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Apenas 800 metros da praia, caminhada tranquila até o mar.",
      type: "success" as const,
    },
  ]

  return (
    <section id="regras" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Capacidade e Regras"
          title="Informações importantes"
          description="Tudo que você precisa saber para uma estadia perfeita e sem surpresas."
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="coastal" className="text-lg px-6 py-3 mb-4">
              <Users className="w-5 h-5 mr-2" />
              Até 10 pessoas
            </Badge>
            <Text variant="lead" className="text-muted-foreground">
              Ambiente perfeito para famílias e grupos de amigos
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <RuleItem
                key={index}
                icon={rule.icon}
                title={rule.title}
                description={rule.description}
                type={rule.type}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
