"use client"

import { ContactButton } from "@/components/molecules/contact-button"
import { cn } from "@/lib/utils"

interface FloatingContactProps {
  className?: string
}

export function FloatingContact({ className }: FloatingContactProps) {
  return (
    <aside
      aria-label="Contatos rápidos"
      className={cn("fixed bottom-6 right-6 z-40 flex flex-col space-y-3", className)}
    >
      <ContactButton
        type="whatsapp"
        className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
      >
        WhatsApp
      </ContactButton>
      <ContactButton
        type="phone"
        variant="outline"
        className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-background/95 backdrop-blur-sm"
      >
        Ligar
      </ContactButton>
    </aside>
  )
}
