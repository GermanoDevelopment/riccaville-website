"use client"

import * as React from "react"
import { LogoSite } from "@/components/atoms/logo-site"
import { NavLink } from "@/components/molecules/nav-link"
import { ContactButton } from "@/components/molecules/contact-button"
import { Button } from "@/components/atoms/button"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // Fecha o menu ao redimensionar para telas maiores
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Travar o scroll quando menu mobile estiver aberto
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <LogoSite />

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden md:flex gap-6 items-center">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <div className="hidden lg:block ml-2">
              <ContactButton type="whatsapp">
                Fale Conosco
              </ContactButton>
            </div>
          </nav>

          {/* Botão Hamburguer */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(true)}
              variant="ghost"
              size="icon"
              aria-label="Abrir menu de navegação"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col p-6 md:hidden animate-fade-in"
        >
          <div className="flex items-center justify-between mb-8">
            <LogoSite />
            <Button
              onClick={() => setIsMenuOpen(false)}
              variant="ghost"
              size="icon"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav aria-label="Navegação mobile" className="flex flex-col items-center justify-center flex-1 gap-6">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="text-xl font-serif text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <ContactButton type="whatsapp" className="w-full text-lg py-6">
              Fale Conosco
            </ContactButton>
          </div>
        </div>
      )}
    </>
  )
}
