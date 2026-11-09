"use client"

import type React from "react"
import { Button } from "@/components/atoms/button"
import { MessageCircle, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface ContactButtonProps {
  type: "whatsapp" | "phone"
  value?: string
  children?: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "coastal"
}

export function ContactButton({
  type,
  value,
  children,
  className,
  variant = "coastal",
}: ContactButtonProps) {
  const handleClick = () => {
    if (type === "whatsapp") {
      const targetUrl = value
        ? `https://wa.me/55${value.replace(/\D/g, "")}`
        : siteConfig.contact.whatsappUrl
      window.open(targetUrl, "_blank", "noopener,noreferrer")
    } else {
      const targetPhone = value
        ? `tel:+55${value.replace(/\D/g, "")}`
        : siteConfig.contact.phoneUrl
      window.location.href = targetPhone
    }
  }

  const Icon = type === "whatsapp" ? MessageCircle : Phone

  return (
    <Button onClick={handleClick} variant={variant} className={className}>
      <Icon className="w-4 h-4 mr-2" />
      {children || (type === "whatsapp" ? "WhatsApp" : "Ligar")}
    </Button>
  )
}
