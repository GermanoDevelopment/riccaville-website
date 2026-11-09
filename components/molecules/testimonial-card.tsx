import { Image } from "@/components/atoms/image"
import { MessageCircle, Instagram } from "lucide-react"

interface TestimonialCardProps {
  imageSrc: string
  imageAlt: string
  clientName?: string
  platform?: "WhatsApp" | "Instagram" | string
  className?: string
}

export function TestimonialCard({
  imageSrc,
  imageAlt,
  clientName,
  platform = "WhatsApp",
  className = "",
}: TestimonialCardProps) {
  const isInstagram = platform.toLowerCase() === "instagram"

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlay com informações do cliente */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        {clientName && <p className="text-white font-medium text-sm mb-1">{clientName}</p>}
        <div className="flex items-center gap-1.5">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${
              isInstagram
                ? "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white"
                : "bg-emerald-500 text-white"
            }`}
          >
            {isInstagram ? (
              <Instagram className="w-3 h-3" />
            ) : (
              <MessageCircle className="w-3 h-3" />
            )}
          </div>
          <span className="text-white/90 text-xs font-medium">{platform}</span>
        </div>
      </div>
    </div>
  )
}
