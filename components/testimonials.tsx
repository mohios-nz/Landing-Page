"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Testimonials() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const testimonials = [
    {
      quote:
        "Mohios transformed our customer service workflow, reducing response times by 45% and increasing customer satisfaction scores.",
      name: "Sarah Johnson",
      title: "Customer Service Director, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "The AI-powered analysis identified inefficiencies we never noticed. Our production process is now 30% more efficient.",
      name: "Michael Chen",
      title: "Operations Manager, InnovateCo",
      avatar: "MC",
    },
    {
      quote:
        "Implementing Mohios' workflow design saved us countless hours and significantly reduced human error in our financial processes.",
      name: "Jessica Williams",
      title: "CFO, Finance Plus",
      avatar: "JW",
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
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2"></div>

      {/* Maori-inspired pattern */}
      <svg
        className="absolute bottom-10 left-10 w-24 h-24 text-primary/10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,10c22.1,0,40,17.9,40,40S72.1,90,50,90S10,72.1,10,50S27.9,10,50,10z M50,30c-11,0-20,9-20,20s9,20,20,20s20-9,20-20 S61,30,50,30z"
          fill="currentColor"
        />
        <path d="M50,40c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S44.5,40,50,40z" fill="currentColor" />
        <path
          d="M20,50c0-16.6,13.4-30,30-30s30,13.4,30,30s-13.4,30-30,30S20,66.6,20,50z M50,30c-11,0-20,9-20,20s9,20,20,20 s20-9,20-20S61,30,50,30z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">There's a Better Way</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mohios builds custom Operating Systems that bring structure, automation, and AI into the core of how your
              business runs — so your team is aligned, your tools work together, and your focus shifts from fixing
              problems to growing with clarity.
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
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                  <p className="text-lg mb-6 text-gray-700">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <Avatar>
                    <AvatarImage
                      src={`/abstract-geometric-shapes.png?key=6hzm7&key=u9tlv&key=zba7x&height=40&width=40`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
