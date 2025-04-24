"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Pricing() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const plans = [
    {
      name: "Starter",
      price: "NZ$250",
      description: "Perfect for small businesses just getting started with workflow optimization.",
      features: [
        "AI workflow analysis",
        "Basic automation integration",
        "Email support",
        "1 workflow design per month",
      ],
    },
    {
      name: "Professional",
      price: "NZ$1,500",
      description: "Ideal for growing businesses with multiple workflow needs.",
      features: [
        "Everything in Starter",
        "Advanced automation integration",
        "Priority support",
        "3 workflow designs per month",
        "Performance analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solution for large organizations with complex workflow requirements.",
      features: [
        "Everything in Professional",
        "Unlimited workflow designs",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics and reporting",
        "On-site training and support",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      {/* Maori-inspired pattern */}
      <svg
        className="absolute top-20 left-10 w-24 h-24 text-primary/10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35 s35,15.7,35,35S69.3,85,50,85z"
          fill="currentColor"
        />
        <path
          d="M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25z M50,65c-8.3,0-15-6.7-15-15s6.7-15,15-15 s15,6.7,15,15S58.3,65,50,65z"
          fill="currentColor"
        />
        <path d="M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S52.8,45,50,45z" fill="currentColor" />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your business needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`flex flex-col h-full transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? "border-primary shadow-md" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                  </div>
                  <CardDescription className="text-base text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link
                      href="https://calendar.app.google/3ArxYeXL8CVTKT5V6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden"
                    >
                      <span className="relative z-10">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</span>
                      {plan.popular && (
                        <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      )}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
