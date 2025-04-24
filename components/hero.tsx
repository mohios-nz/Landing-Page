"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Wisdom in Workflow Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="relative inline-block">
                <span className="absolute -inset-1 -skew-y-3 bg-primary/10 rounded-lg" aria-hidden="true"></span>
                <span className="relative">Transform</span>
              </span>{" "}
              your business operations
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              You're not alone — most SMEs lose dozens of hours each month to tool-switching, manual tasks, unclear
              processes, and meetings that could've been an email. Mohios streamlines your business with intelligent
              workflow designs and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 group" asChild>
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay"></div>
              <Image
                src="/hero-image.png"
                alt="Overwhelmed business owner struggling with disorganization and manual processes"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full"></div>

            {/* Maori-inspired koru spiral pattern */}
            <svg
              className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/30"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 80c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z"
                fill="currentColor"
              />
              <path
                d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"
                fill="currentColor"
              />
              <path d="M50 45c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
