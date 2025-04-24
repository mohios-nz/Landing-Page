"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { useInView } from "framer-motion"
import MaoriSymbol from "./maori-symbol"

export default function RedesignedPricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Starter",
      subtitle: "Clarity Sprint",
      price: "NZ$1,500 - $2,500",
      description: "Perfect for solopreneurs or early-stage SMEs looking to optimize their workflow.",
      features: [
        "Audit of current workflows",
        "Comprehensive workflow mapping",
        "Top 5 optimization opportunities",
        "Actionable recommendations",
        "Implementation guidance",
      ],
    },
    {
      name: "Professional",
      subtitle: "Mohios OS Setup",
      price: "NZ$5,000 - $7,500",
      description: "Ideal for busy SMEs needing a complete system overhaul.",
      features: [
        "Full OS build (Notion or GDrive)",
        "3 key automations setup",
        "SOP starter kit",
        "Team training session",
        "30-day implementation support",
      ],
      popular: true,
    },
    {
      name: "Premium",
      subtitle: "Custom AI Integration",
      price: "Custom Quote",
      description: "Comprehensive solution for visionary founders with unique automation needs.",
      features: [
        "Custom GPT/Claude agents",
        "Advanced automations",
        "Multi-platform integration",
        "Comprehensive documentation",
        "Dedicated implementation support",
        "AI strategy consultation",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-[#F0E5D7]/10 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9FAEA9] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9FAEA9] to-transparent"></div>

      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center mb-4">
            <MaoriSymbol size={40} color="#9FAEA9" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                className={`flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-[#9FAEA9] shadow-lg relative z-10 scale-105 md:scale-110"
                    : "hover:border-[#9FAEA9]"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#9FAEA9] text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <CardHeader>
                  <div className="text-[#9FAEA9] text-sm font-medium mb-1">{plan.subtitle}</div>
                  <CardTitle className="text-2xl text-gray-800">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    {index === 0 && <span className="text-3xl font-bold text-gray-800">NZ$1,500</span>}
                    {index === 1 && <span className="text-3xl font-bold text-gray-800">NZ$5,000</span>}
                    {index === 2 && <span className="text-3xl font-bold text-gray-800">Custom</span>}
                  </div>
                  <CardDescription className="text-base text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#9FAEA9] text-white hover:bg-[#9FAEA9]/90"
                        : "bg-white text-gray-800 border-2 border-[#9FAEA9] hover:bg-[#9FAEA9]/10"
                    }`}
                    asChild
                  >
                    <Link
                      href="https://calendar.app.google/3ArxYeXL8CVTKT5V6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {index === 2 ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Ongoing OS Partner Retainer Section */}
        <div
          className={`mt-16 bg-white rounded-xl p-8 border border-[#F0E5D7] shadow-md transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ongoing OS Partner Retainer</h3>
              <p className="text-gray-600 mb-4">
                For scaling businesses needing continuous support and workflow evolution.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">Monthly upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">New workflow builds</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">AI agent deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">Team coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#9FAEA9] flex-shrink-0" />
                  <span className="text-gray-700">Quarterly strategy sessions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex flex-col items-center md:items-end">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                NZ$1,200<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <Button
                className="w-full md:w-auto bg-[#9FAEA9] text-white hover:bg-[#9FAEA9]/90 transition-colors duration-300"
                asChild
              >
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
