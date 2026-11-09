import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const viewport: Viewport = {
  themeColor: "#225A6A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Casa de Temporada em Barra Grande, Piauí`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "casa de temporada",
    "Barra Grande",
    "Piauí",
    "chalé",
    "piscina com hidromassagem",
    "área gourmet",
    "hospedagem barra grande",
    "aluguel temporada piauí",
    "rota das emoções",
    "kitesurf barra grande",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} - Casa de Temporada em Barra Grande, Piauí`,
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 800,
        alt: `${siteConfig.name} - Vista da propriedade e piscina em Barra Grande`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Casa de Temporada em Barra Grande, Piauí`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/icone.svg",
    apple: "/icone.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org Structured Data para Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+55${siteConfig.contact.phoneDigits}`,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praia de Barra Grande",
      addressLocality: "Cajueiro da Praia",
      addressRegion: "PI",
      postalCode: "64222-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.geo.latitude,
      longitude: siteConfig.location.geo.longitude,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscina com Hidromassagem", value: true },
      { "@type": "LocationFeatureSpecification", name: "Área Gourmet com Churrasqueira", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ar-condicionado", value: true },
      { "@type": "LocationFeatureSpecification", name: "Estacionamento privativo para 5 carros", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Capacidade para até 10 pessoas", value: true },
      { "@type": "LocationFeatureSpecification", name: "800m da praia", value: true },
    ],
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden min-h-screen bg-background text-foreground selection:bg-secondary/30">
        {children}
      </body>
    </html>
  )
}
