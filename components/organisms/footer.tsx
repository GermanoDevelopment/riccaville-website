import { Logo } from "@/components/atoms/logo"
import { Text } from "@/components/atoms/text"
import { ContactInfo } from "@/components/molecules/contact-info"
import { NavLink } from "@/components/molecules/nav-link"
import { Divider } from "@/components/atoms/divider"
import { MessageCircle, Phone, Mail, Instagram, MapPin, Heart } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-4" />
            <Text className="mb-6 max-w-md text-muted-foreground">
              Sua casa de temporada em Barra Grande - Piauí. Momentos inesquecíveis a apenas 800m do mar, com todo
              conforto, lazer e comodidade que você merece.
            </Text>
            <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                {siteConfig.location.destination}
              </div>
              <div>
                <Text variant="small" className="font-medium text-foreground">
                  {siteConfig.legalName}
                </Text>
              </div>
              <div>
                <Text variant="small">CNPJ: {siteConfig.cnpj}</Text>
              </div>
              <div>
                <Text variant="small">{siteConfig.location.headquartersAddress}</Text>
              </div>
            </address>
          </div>

          {/* Links Rápidos */}
          <div>
            <Text variant="lead" className="font-semibold mb-4 text-foreground">
              Links Rápidos
            </Text>
            <nav aria-label="Links rápidos do rodapé" className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <div key={link.href}>
                  <NavLink href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <Text variant="lead" className="font-semibold mb-4 text-foreground">
              Contato
            </Text>
            <div className="space-y-2">
              <ContactInfo
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.contact.phoneFormatted}
                href={siteConfig.contact.whatsappUrl}
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Phone}
                label="Telefone"
                value={siteConfig.contact.phoneFormatted}
                href={siteConfig.contact.phoneUrl}
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Mail}
                label="E-mail"
                value={siteConfig.contact.email}
                href={siteConfig.contact.emailUrl}
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Instagram}
                label="Instagram"
                value={siteConfig.contact.instagram}
                href={siteConfig.contact.instagramUrl}
                className="p-0 hover:bg-transparent"
              />
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center mb-4 md:mb-0">
            <Text variant="small">
              © {currentYear} {siteConfig.legalName}. Todos os direitos reservados.
            </Text>
          </div>
          <div className="flex items-center">
            <Text variant="small">Feito com</Text>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <Text variant="small">para suas férias perfeitas</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}
