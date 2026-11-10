import Image from "next/image"
import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { MapPin, Waves, Users, Car, Wind, Utensils } from "lucide-react"

export function AboutSection() {
  const highlights = [
    { icon: MapPin, text: "Apenas 800m da praia de Barra Grande" },
    { icon: Waves, text: "Piscina com hidromassagem e LED privativa" },
    { icon: Users, text: "Acomoda confortavelmente até 10 pessoas" },
    { icon: Car, text: "Estacionamento interno para até 5 carros" },
    { icon: Wind, text: "Quartos 100% climatizados com ar-condicionado" },
    { icon: Utensils, text: "Espaço gourmet com churrasqueira e fogão a lenha" },
  ]

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2 block">
              Conheça Nossa Estrutura
            </span>
            <SectionTitle level={2} className="mb-6 font-serif text-3xl sm:text-4xl text-foreground">
              Sobre o Ricca Ville Chalé
            </SectionTitle>

            <Text variant="lead" className="mb-6 text-foreground/90 font-medium">
              Localizado na paradisíaca Praia de Barra Grande, no Piauí, nosso chalé oferece a combinação perfeita entre
              conforto, tranquilidade e natureza litorânea.
            </Text>

            <Text className="mb-6 text-muted-foreground leading-relaxed">
              A apenas 800 metros do mar, você encontrará um refúgio privativo ideal para desacelerar da rotina.
              Com ambientes amplos, área de lazer completa e estrutura pensada em cada detalhe, proporcionamos
              dias inesquecíveis para você, seus amigos e sua família.
            </Text>

            {/* Grid de Destaques Rápidos */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-card/60 border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/60">
              <Image
                src="/images/area-jantar-interna.jpg"
                alt="Área de jantar interna com mesa de madeira maciça e azulejos decorativos no Ricca Ville Chalé"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Selo decorativo */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl hidden sm:block">
              <p className="font-serif font-bold text-2xl text-primary">100% Privativo</p>
              <p className="text-xs text-muted-foreground">Exclusividade total para seu grupo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
