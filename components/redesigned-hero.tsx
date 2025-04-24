"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MaoriSymbol from "./maori-symbol"
import AnimatedKoru from "./animated-koru"

export default function RedesignedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-[#F0E5D7]/10">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-8 koru-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 koru-pattern opacity-20 transform rotate-180"></div>

      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <AnimatedKoru
          className="absolute top-0 right-0 text-[#9FAEA9] opacity-40 hidden lg:block"
          width={200}
          height={200}
        />
        <MaoriSymbol
          className="absolute bottom-0 left-0 text-[#9FAEA9] opacity-40 hidden lg:block"
          size={150}
          animationDelay={1}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 pt-16 md:pt-20 lg:pt-24 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              <span className="relative inline-block">Still running</span> your business on duct tape and good
              intentions?
            </h1>
            <p className="text-xl text-muted-foreground notion-text">
              You're not alone — most SMEs lose dozens of hours each month to tool-switching, manual tasks, unclear
              processes, and meetings that could've been an email. Mohios streamlines your business with intelligent
              workflow designs and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 relative overflow-hidden group bg-[#9FAEA9] text-white border-none hover:bg-[#9FAEA9]/90"
                asChild
              >
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Book AI Advisory Call</span>
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-2 border-[#9FAEA9] hover:bg-[#9FAEA9]/10 transition-colors duration-300 text-gray-800"
                asChild
              >
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Reveal Your AI Savings Potential
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F0E5D7]/30 to-transparent z-10"></div>
            <Image
              src="/hero-image.png"
              alt="Overwhelmed business owner struggling with disorganization and manual processes"
              fill
              className="object-cover"
              priority
            />

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#F0E5D7]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#F0E5D7]"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#F0E5D7]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#F0E5D7]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
