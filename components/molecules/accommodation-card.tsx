import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Text } from "@/components/atoms/text"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { Users, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccommodationCardProps {
  title: string
  capacity: number
  features: string[]
  description: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function AccommodationCard({
  title,
  capacity,
  features,
  description,
  imageSrc,
  imageAlt,
  className,
}: AccommodationCardProps) {
  return (
    <Card className={cn("overflow-hidden border border-border/60 bg-card shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col", className)}>
      {imageSrc && (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="coastal" className="shadow-md bg-background/90 backdrop-blur-sm text-foreground">
              <Icon icon={Users} size="sm" className="mr-1 text-primary" />
              Até {capacity} pessoas
            </Badge>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {!imageSrc && (
              <Badge variant="coastal">
                <Icon icon={Users} size="sm" className="mr-1" />
                Até {capacity} pessoas
              </Badge>
            )}
          </div>

          <Text className="mb-5 text-sm text-muted-foreground leading-relaxed">
            {description}
          </Text>
        </div>

        <div className="space-y-2 pt-2 border-t border-border/40">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs sm:text-sm text-foreground/80">
              <Check className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
