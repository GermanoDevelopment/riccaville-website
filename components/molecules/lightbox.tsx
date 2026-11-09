"use client"

import { useEffect, useCallback } from "react"
import NextImage from "next/image"
import { Button } from "@/components/atoms/button"
import { Icon } from "@/components/atoms/icon"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LightboxProps {
  images: Array<{ src: string; alt: string }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    },
    [isOpen, onClose, onNext, onPrevious]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de fotos em tamanho real"
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
        {/* Botão Fechar */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          aria-label="Fechar visualização de imagem"
          className="absolute top-4 right-4 z-20 text-white hover:bg-white/20 p-2 rounded-full"
        >
          <Icon icon={X} size="lg" />
        </Button>

        {/* Botão Anterior */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          aria-label="Imagem anterior"
          className={cn(
            "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-2 rounded-full",
            images.length <= 1 && "hidden"
          )}
        >
          <Icon icon={ChevronLeft} size="lg" />
        </Button>

        {/* Botão Próximo */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          aria-label="Próxima imagem"
          className={cn(
            "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-2 rounded-full",
            images.length <= 1 && "hidden"
          )}
        >
          <Icon icon={ChevronRight} size="lg" />
        </Button>

        {/* Imagem */}
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          {currentImage && (
            <NextImage
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-contain"
            />
          )}
        </div>

        {/* Legenda e Contador */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {currentIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  )
}
