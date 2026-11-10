import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Ricca Ville",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4E8",
    theme_color: "#225A6A",
    icons: [
      {
        src: "/icone.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icone-site.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
