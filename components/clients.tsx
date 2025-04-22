"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Clients() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded by Danny Holtschke, Product Leader, Getting S*it Done nerd, German engineering mind, living in
            Auckland that hates wasting time. Some of the companies I previously worked for:
          </p>
        </div>

        <div className="relative">
          {/* Left scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>

          {/* Logo carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-4 px-8 space-x-16 items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative h-16 w-40">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full hidden md:flex"
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
