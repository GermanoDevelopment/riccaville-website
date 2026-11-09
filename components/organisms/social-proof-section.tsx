import type React from "react"
import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { TestimonialCard } from "@/components/molecules/testimonial-card"

// Array de depoimentos - facilita a adição de novas imagens
const testimonials = [
  {
    id: 1,
    imageSrc: "/whatsapp-testimonial.png",
    imageAlt: "Depoimento de cliente satisfeito no WhatsApp elogiando a hospedagem no Ricca Ville Chalé",
    clientName: "Cliente Satisfeito",
    platform: "WhatsApp",
  },
  {
    id: 2,
    imageSrc: "/instagram-testimonial.png",
    imageAlt: "Avaliação positiva no Instagram sobre a experiência no chalé em Barra Grande",
    clientName: "Hóspede Feliz",
    platform: "Instagram",
  },
  {
    id: 3,
    imageSrc: "/whatsapp-review-screenshot.png",
    imageAlt: "Review detalhado no WhatsApp com feedback de família sobre a piscina e lazer",
    clientName: "Família Contente",
    platform: "WhatsApp",
  },
  {
    id: 4,
    imageSrc: "/social-media-testimonial.png",
    imageAlt: "Comentário positivo nas redes sociais sobre o chalé",
    clientName: "Casal Apaixonado",
    platform: "Instagram",
  },
]

export function SocialProofSection() {
  return (
    <section aria-labelledby="depoimentos-title" className="py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionTitle id="depoimentos-title" className="text-primary mb-4 font-serif">
            O que nossos hóspedes dizem
          </SectionTitle>
          <Text className="text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de quem já se hospedou no Ricca Ville Chalé.
            Confira os relatos e avaliações dos nossos queridos hóspedes.
          </Text>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              imageAlt={testimonial.imageAlt}
              clientName={testimonial.clientName}
              platform={testimonial.platform}
              className="shadow-sm hover:shadow-md transition-shadow"
            />
          ))}
        </div>

        {/* Estatísticas de satisfação */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-card/60 rounded-2xl p-8 border border-border/40">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary font-serif">
              98%
            </div>
            <Text className="text-foreground font-medium">
              Satisfação dos Hóspedes
            </Text>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-secondary font-serif">
              150+
            </div>
            <Text className="text-foreground font-medium">
              Famílias & Grupos Atendidos
            </Text>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-accent font-serif">
              5.0 ★
            </div>
            <Text className="text-foreground font-medium">
              Avaliação Média
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
