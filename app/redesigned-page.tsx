import RedesignedHeader from "@/components/redesigned-header"
import RedesignedHero from "@/components/redesigned-hero"
import RedesignedFeatures from "@/components/redesigned-features"
import RedesignedTestimonials from "@/components/redesigned-testimonials"
import RedesignedClients from "@/components/redesigned-clients"
import RedesignedPricing from "@/components/redesigned-pricing"
import RedesignedCta from "@/components/redesigned-cta"
import RedesignedFooter from "@/components/redesigned-footer"

export default function RedesignedHome() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <RedesignedHeader />
      <main className="flex-grow">
        <RedesignedHero />
        <RedesignedFeatures />
        <RedesignedTestimonials />
        <RedesignedClients />
        <RedesignedPricing />
        <RedesignedCta />
      </main>
      <RedesignedFooter />
    </div>
  )
}
