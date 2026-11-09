"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { ContactButton } from "@/components/molecules/contact-button"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { MapPin, Star, Users, ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/images/area-piscina-completa.jpg",
    alt: "Área da piscina com espreguiçadeiras e paisagismo tropical do Ricca Ville Chalé",
  },
  {
    src: "/images/fachada-externa.jpg",
    alt: "Vista externa do chalé com flores amarelas e arquitetura rústica",
  },
  {
    src: "/images/chale-vista-aerea.jpg",
    alt: "Vista aérea do Ricca Ville Chalé em Barra Grande Piauí",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section aria-label="Apresentação do Chalé" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Gradients para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Controles do Carrossel */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background backdrop-blur-sm p-3 rounded-full border border-border/50 text-foreground transition-all shadow-md"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background backdrop-blur-sm p-3 rounded-full border border-border/50 text-foreground transition-all shadow-md"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de slides */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/60 hover:bg-background/80 w-2.5"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="mb-6 animate-fade-in flex justify-center">
            <Badge variant="coastal" className="text-sm px-4 py-1.5 shadow-sm">
              <Icon icon={MapPin} size="sm" className="mr-2" />
              Barra Grande - Piauí
            </Badge>
          </div>

          <SectionTitle level={1} centered className="mb-6 animate-slide-up text-foreground drop-shadow-sm font-serif">
            Viva dias inesquecíveis em Barra Grande – Piauí
          </SectionTitle>

          <Text
            variant="lead"
            className="mb-8 max-w-2xl mx-auto text-center animate-slide-up text-foreground/90 font-medium"
          >
            Desfrute de momentos únicos em nossa casa de temporada com piscina com hidromassagem, área gourmet completa
            e acomodações para toda a família, a apenas 800m do mar.
          </Text>

          {/* Destaques rápidos */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 animate-slide-up">
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/60 shadow-md">
              <Icon icon={Users} size="sm" className="mr-2 text-primary" />
              <span className="text-sm font-medium text-foreground">Até 10 pessoas</span>
            </div>
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/60 shadow-md">
              <Icon icon={Star} size="sm" className="mr-2 text-secondary" />
              <span className="text-sm font-medium text-foreground">Piscina com LED</span>
            </div>
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/60 shadow-md">
              <Icon icon={MapPin} size="sm" className="mr-2 text-accent" />
              <span className="text-sm font-medium text-foreground">800m do mar</span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="animate-slide-up space-y-4">
            <ContactButton
              type="whatsapp"
              className="text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Reservar Agora pelo WhatsApp
            </ContactButton>
            <div>
              <Text variant="small" className="text-muted-foreground font-medium">
                Resposta rápida • Atendimento humanizado • Disponível todos os dias
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
