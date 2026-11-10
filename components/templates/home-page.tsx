import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { BookingWidget } from "@/components/molecules/booking-widget"
import { AboutSection } from "@/components/organisms/about-section"
import { AccommodationsSection } from "@/components/organisms/accommodations-section"
import { LeisureAreaSection } from "@/components/organisms/leisure-area-section"
import { CapacityRulesSection } from "@/components/organisms/capacity-rules-section"
import { ImportantInfoSection } from "@/components/organisms/important-info-section"
import { GallerySection } from "@/components/organisms/gallery-section"
import { FaqSection } from "@/components/organisms/faq-section"
import { LocationSection } from "@/components/organisms/location-section"
import { SocialProofSection } from "@/components/organisms/social-proof-section"
import { ContactSection } from "@/components/organisms/contact-section"
import { Footer } from "@/components/organisms/footer"
import { FloatingContact } from "@/components/molecules/floating-contact"
import { ScrollToTop } from "@/components/molecules/scroll-to-top"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 -mt-10 sm:-mt-14 relative z-30 mb-8 sm:mb-14">
          <BookingWidget />
        </div>
        <AboutSection />
        <AccommodationsSection />
        <LeisureAreaSection />
        <CapacityRulesSection />
        <ImportantInfoSection />
        <GallerySection />
        <FaqSection />
        <LocationSection />
        <SocialProofSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  )
}
