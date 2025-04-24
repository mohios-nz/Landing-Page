"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "framer-motion"
import AnimatedKoru from "./animated-koru"

export default function RedesignedCta() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="container mx-auto">
        <div
          className={`bg-[#F0E5D7] text-gray-800 rounded-xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 opacity-20">
            <AnimatedKoru width={200} height={200} color="#333" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-20 transform rotate-180">
            <AnimatedKoru width={200} height={200} color="#333" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Curious What AI Could Save You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 relative z-10">
            Discover how many hours (and dollars) you're leaving on the table.
          </p>
          <div className="flex justify-center relative z-10">
            <Button
              size="lg"
              className="px-8 bg-[#9FAEA9] hover:bg-[#9FAEA9]/90 text-white transition-colors duration-300"
              asChild
            >
              <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                Reveal My AI Savings Potential →
              </Link>
            </Button>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-lg"></div>
        </div>
      </div>
    </section>
  )
}
