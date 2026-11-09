import { SectionHeader } from "@/components/molecules/section-header"
import { ContactButton } from "@/components/molecules/contact-button"
import { ContactInfo } from "@/components/molecules/contact-info"
import { Text } from "@/components/atoms/text"
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Contato & Reservas"
          title="Vamos planejar sua estadia"
          description="Entre em contato conosco e garanta já suas datas no paraíso de Barra Grande."
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <ContactButton
                type="whatsapp"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Reservar pelo WhatsApp
              </ContactButton>
              <ContactButton
                type="phone"
                variant="outline"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ligar Agora ({siteConfig.contact.phoneFormatted})
              </ContactButton>
            </div>
            <Text variant="small" className="text-muted-foreground">
              Resposta rápida garantida • Atendimento personalizado • Disponível todos os dias
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactInfo
              icon={MessageCircle}
              label="WhatsApp"
              value={siteConfig.contact.phoneFormatted}
              href={siteConfig.contact.whatsappUrl}
            />
            <ContactInfo
              icon={Phone}
              label="Telefone"
              value={siteConfig.contact.phoneFormatted}
              href={siteConfig.contact.phoneUrl}
            />
            <ContactInfo
              icon={Mail}
              label="E-mail"
              value={siteConfig.contact.email}
              href={siteConfig.contact.emailUrl}
            />
            <ContactInfo
              icon={Instagram}
              label="Instagram"
              value={siteConfig.contact.instagram}
              href={siteConfig.contact.instagramUrl}
            />
          </div>

          <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center shadow-sm">
            <Text variant="lead" className="font-semibold mb-4 text-primary">
              Pronto para suas férias inesquecíveis?
            </Text>
            <Text className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Garanta os melhores dias com família ou amigos no litoral do Piauí. Estamos prontos para receber você!
            </Text>
            <ContactButton
              type="whatsapp"
              className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Fazer Reserva Agora
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  )
}
