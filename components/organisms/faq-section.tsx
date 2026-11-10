"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/molecules/section-header"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { ContactButton } from "@/components/molecules/contact-button"
import { cn } from "@/lib/utils"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          subtitle="Tire Suas Dúvidas"
          title="Perguntas Frequentes"
          description="Encontre respostas rápidas para as principais perguntas sobre a estadia no Ricca Ville Chalé."
          centered
        />

        <div className="space-y-4 mb-12">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  "border rounded-xl transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-primary/40 bg-card shadow-md"
                    : "border-border/60 bg-card/60 hover:bg-card hover:border-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer"
                >
                  <span className="flex items-center gap-3 font-serif font-semibold text-base sm:text-lg text-foreground">
                    <HelpCircle className={cn("w-5 h-5 shrink-0 transition-colors", isOpen ? "text-primary" : "text-muted-foreground")} />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-primary" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/30 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA complementar se restar alguma dúvida */}
        <div className="text-center p-8 rounded-2xl bg-muted/40 border border-border/60">
          <p className="font-serif font-semibold text-lg text-foreground mb-2">
            Ainda tem alguma dúvida sobre a casa ou datas?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Nossa equipe responde rapidamente pelo WhatsApp para ajudar a planejar sua viagem.
          </p>
          <ContactButton type="whatsapp">
            Falar com a Equipe no WhatsApp
          </ContactButton>
        </div>
      </div>
    </section>
  )
}
