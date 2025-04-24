"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import TestimonialCarousel from "./testimonial-carousel"

export default function RedesignedTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 relative" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 pastel-dots opacity-40" style={{ backgroundSize: "20px 20px" }}></div>

      <div className="container mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">There's a Better Way</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mohios builds custom Operating Systems that bring structure, automation, and AI into the core of how your
            business runs — so your team is aligned, your tools work together, and your focus shifts from fixing
            problems to growing with clarity.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}
