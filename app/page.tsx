import Header from "@/components/header"
import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import Method from "@/components/method"
import WhatYouGet from "@/components/what-you-get"
import Testimonials from "@/components/testimonials"
import Clients from "@/components/clients"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Method />
        <WhatYouGet />
        <Testimonials />
        <Clients />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
