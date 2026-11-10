import { SectionHeader } from "@/components/molecules/section-header"
import { AccommodationCard } from "@/components/molecules/accommodation-card"

export function AccommodationsSection() {
  const accommodations = [
    {
      title: "Quarto Térreo Triplo",
      capacity: 3,
      description: "Quarto confortável no piso térreo, com ar-condicionado e acesso direto à área externa.",
      imageSrc: "/images/fachada-externa.jpg",
      imageAlt: "Quarto térreo com vista e acesso ao jardim externo",
      features: [
        "Ar-condicionado potente",
        "2 armadores para redes de dormir",
        "Colchão extra disponível",
        "Acesso fácil e sem degraus",
      ],
    },
    {
      title: "Quarto Mezanino Triplo",
      capacity: 3,
      description: "Ambiente no mezanino de madeira com vista privilegiada, brisa constante e atmosfera acolhedora.",
      imageSrc: "/images/varanda-superior.jpg",
      imageAlt: "Mezanino do chalé com vista panorâmica da propriedade",
      features: [
        "Ar-condicionado e circulação de ar",
        "Espaço para 2 redes de descanso",
        "Colchão extra disponível",
        "Vista panorâmica da propriedade",
      ],
    },
    {
      title: "Áreas Comuns & Deck",
      capacity: 4,
      description: "Espaços amplos integrados com sala, cozinha equipada, banheiro social e varanda com armadores.",
      imageSrc: "/images/area-piscina-completa.jpg",
      imageAlt: "Áreas de convivência com deck avarandado e piscina",
      features: [
        "Sala de estar e jantar integrada",
        "Deck avarandado com 7 armadores",
        "Cozinha completa para café da manhã",
        "Banheiro social moderno",
      ],
    },
  ]

  return (
    <section id="acomodacoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Acomodações"
          title="Conforto para toda a família"
          description="Espaços pensados para proporcionar o máximo de conforto, privacidade e comodidade para até 10 pessoas."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={index}
              title={accommodation.title}
              capacity={accommodation.capacity}
              features={accommodation.features}
              description={accommodation.description}
              imageSrc={accommodation.imageSrc}
              imageAlt={accommodation.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
