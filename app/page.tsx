import RedesignedHeader from "@/components/redesigned-header"
import RedesignedHero from "@/components/redesigned-hero"
import RedesignedFeatures from "@/components/redesigned-features"
import RedesignedTestimonials from "@/components/redesigned-testimonials"
import RedesignedClients from "@/components/redesigned-clients"
import RedesignedPricing from "@/components/redesigned-pricing"
import RedesignedCta from "@/components/redesigned-cta"
import RedesignedFooter from "@/components/redesigned-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <RedesignedHeader />
      <RedesignedHero />
      <RedesignedFeatures />
      <RedesignedTestimonials />
      <RedesignedClients />
      <RedesignedPricing />
      <RedesignedCta />
      <RedesignedFooter />
    </main>
  )
}
