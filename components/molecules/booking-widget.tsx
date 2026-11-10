"use client"

import { useState } from "react"
import { Calendar, Users, MessageCircle, Sparkles } from "lucide-react"
import { buildWhatsAppBookingUrl } from "@/lib/site-config"
import { cn } from "@/lib/utils"

interface BookingWidgetProps {
  className?: string
  variant?: "hero" | "card"
}

export function BookingWidget({ className, variant = "hero" }: BookingWidgetProps) {
  // Data mínima: hoje
  const today = new Date().toISOString().split("T")[0]

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("4")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata datas para padrão brasileiro DD/MM/AAAA se preenchidas
    const formatDate = (isoDate: string) => {
      if (!isoDate) return ""
      const [year, month, day] = isoDate.split("-")
      return `${day}/${month}/${year}`
    }

    const url = buildWhatsAppBookingUrl({
      checkIn: formatDate(checkIn),
      checkOut: formatDate(checkOut),
      guests: guests ? `${guests}` : undefined,
    })

    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto rounded-2xl border border-border/60 bg-card/95 backdrop-blur-md p-4 sm:p-6 shadow-2xl",
        variant === "hero" ? "-mt-8 sm:-mt-12 relative z-30" : "",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
        <Sparkles className="w-4 h-4 text-secondary" />
        <span>Consulte datas & garanta sua estadia direta</span>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
        {/* Check-in */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="check-in" className="flex items-center text-xs font-semibold text-foreground/80">
            <Calendar className="w-3.5 h-3.5 mr-1 text-primary" />
            Check-in
          </label>
          <input
            id="check-in"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>

        {/* Check-out */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="check-out" className="flex items-center text-xs font-semibold text-foreground/80">
            <Calendar className="w-3.5 h-3.5 mr-1 text-primary" />
            Check-out
          </label>
          <input
            id="check-out"
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>

        {/* Hóspedes */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="guests" className="flex items-center text-xs font-semibold text-foreground/80">
            <Users className="w-3.5 h-3.5 mr-1 text-primary" />
            Hóspedes
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "hóspede" : "hóspedes"}
              </option>
            ))}
          </select>
        </div>

        {/* Botão de Envio para WhatsApp */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar no WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  )
}
