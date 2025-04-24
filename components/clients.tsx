"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Clients() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Founded by Danny Holtschke, Product Leader, Getting S*it Done nerd, German engineering mind, living in
            Auckland that hates wasting time. Some of the companies I previously worked for:
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Left scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full hidden md:flex shadow-md hover:shadow-lg"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>

          {/* Logo carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-8 px-8 space-x-16 items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, index) => (
              <motion.div key={index} className="flex-shrink-0" variants={itemVariants}>
                <div className="relative h-16 w-40 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full hidden md:flex shadow-md hover:shadow-lg"
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
