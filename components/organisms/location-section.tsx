import { SectionHeader } from "@/components/molecules/section-header"
import { Text } from "@/components/atoms/text"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { MapPin, Car, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Localização"
          title="Pertinho de tudo que importa"
          description="Localização privilegiada a poucos metros do mar e próximo aos principais pontos de Barra Grande."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={MapPin} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2 text-foreground">
                  {siteConfig.location.destination}
                </Text>
                <Text className="text-muted-foreground">
                  Localizado em uma das praias mais belas do litoral piauiense, famosa pelos ventos ideais para kitesurf,
                  águas mornas e gastronomia rica.
                </Text>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={Clock} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2 text-foreground">
                  Apenas 800m do mar
                </Text>
                <Text className="text-muted-foreground">
                  Caminhada tranquila de poucos minutos até a praia. Perfeito para ir e voltar com tranquilidade.
                </Text>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={Car} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2 text-foreground">
                  {siteConfig.location.parkingCapacity}
                </Text>
                <Text className="text-muted-foreground">
                  Espaço amplo e seguro dentro da propriedade para os veículos de toda a família e amigos.
                </Text>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="coastal">
                <Icon icon={MapPin} size="sm" className="mr-1" />
                800m da praia
              </Badge>
              <Badge variant="secondary">Centro de Barra Grande</Badge>
              <Badge variant="secondary">Restaurantes próximos</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                src={siteConfig.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Ricca Ville Chalé em Barra Grande - Piauí no Google Maps"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <Text variant="small" className="font-medium text-foreground">
                Barra Grande - PI
              </Text>
              <Text variant="small" className="text-muted-foreground">
                Localização exata
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
