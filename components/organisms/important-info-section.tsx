import { SectionHeader } from "@/components/molecules/section-header"
import { RuleItem } from "@/components/molecules/rule-item"
import { Sparkles, Coffee, UtensilsCrossed, ShoppingBag, AlertTriangle, Key, CreditCard, XCircle } from "lucide-react"

export function ImportantInfoSection() {
  const infoItems = [
    {
      icon: Sparkles,
      title: "Limpeza Inclusa",
      description: "Limpeza completa, roupas de cama trocadas e piscina tratada antes da sua chegada.",
      type: "success" as const,
    },
    {
      icon: Coffee,
      title: "Cozinha Interna",
      description: "Uso da cozinha interna restrito ao café da manhã para melhor organização.",
      type: "info" as const,
    },
    {
      icon: UtensilsCrossed,
      title: "Refeições na Área Gourmet",
      description: "Almoço e jantar devem ser preparados na área gourmet externa.",
      type: "info" as const,
    },
    {
      icon: ShoppingBag,
      title: "Itens de Higiene",
      description: "Produtos de higiene pessoal e limpeza devem ser trazidos pelos hóspedes.",
      type: "warning" as const,
    },
    {
      icon: AlertTriangle,
      title: "Responsabilidade por Danos",
      description: "Eventuais danos à propriedade serão pagos na saída após vistoria.",
      type: "warning" as const,
    },
    {
      icon: Key,
      title: "Entrega das Chaves",
      description: "Chaves entregues pelo caseiro mediante vistoria de entrada.",
      type: "info" as const,
    },
    {
      icon: CreditCard,
      title: "Forma de Pagamento",
      description: "Reserva confirmada mediante pagamento de 50% do valor total.",
      type: "info" as const,
    },
    {
      icon: XCircle,
      title: "Política de Cancelamento",
      description: "Cancelamentos de última hora não têm direito à devolução do valor pago.",
      type: "warning" as const,
    },
  ]

  return (
    <section id="informacoes" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Informações Importantes"
          title="Tudo que você precisa saber"
          description="Detalhes essenciais para garantir uma estadia tranquila e sem imprevistos."
          centered
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RuleItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
