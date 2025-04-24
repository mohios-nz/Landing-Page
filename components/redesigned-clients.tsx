"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"

export default function RedesignedClients() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const clients = [
    {
      name: "University of Auckland",
      logo: "/university-of-auckland-logo.jpeg",
    },
    {
      name: "Google",
      logo: "/google-logo.png",
    },
    {
      name: "Twitter",
      logo: "/twitter-logo.png",
    },
    {
      name: "Adidas",
      logo: "/adidas-logo.svg",
    },
    {
      name: "P&G",
      logo: "/pg-logo.png",
    },
    {
      name: "Auckland Transport",
      logo: "/at-logo.png",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = direction === "left" ? -container.clientWidth / 2 : container.clientWidth / 2

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pastel-lavender/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pastel-lavender/50 to-transparent"></div>

      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded by Danny Holtschke, Product Leader, Getting S*it Done nerd, German engineering mind, living in
            Auckland that hates wasting time. Some of the companies I previously worked for:
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {/* Left scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full hidden md:flex border-pastel-lavender hover:bg-pastel-lavender/10 hover:border-pastel-lavender transition-colors"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>

          {/* Logo carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-8 px-8 space-x-16 items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <div className="relative h-16 w-40 p-2 rounded-md hover:bg-pastel-lavender/10 transition-colors duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full hidden md:flex border-pastel-lavender hover:bg-pastel-lavender/10 hover:border-pastel-lavender transition-colors"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
