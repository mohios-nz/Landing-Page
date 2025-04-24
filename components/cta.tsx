"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Cta() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      {/* Maori-inspired koru pattern */}
      <svg
        className="absolute bottom-10 right-10 w-32 h-32 text-primary/10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70,50c0,11-9,20-20,20s-20-9-20-20s9-20,20-20S70,39,70,50z M50,40c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10 S55.5,40,50,40z"
          fill="currentColor"
        />
        <path
          d="M50,10c22.1,0,40,17.9,40,40s-17.9,40-40,40S10,72.1,10,50S27.9,10,50,10z M50,80c16.6,0,30-13.4,30-30S66.6,20,50,20 S20,33.4,20,50S33.4,80,50,80z"
          fill="currentColor"
        />
        <path
          d="M85,50c0,19.3-15.7,35-35,35S15,69.3,15,50s15.7-35,35-35S85,30.7,85,50z M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25 s25-11.2,25-25S63.8,25,50,25z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              <path d="M0,0 L100,100 M100,0 L0,100" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
            </svg>
          </div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              Take Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join businesses that have revolutionized their operations with Mohios.
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" className="px-8 group relative overflow-hidden" asChild>
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Schedule a Demo</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
