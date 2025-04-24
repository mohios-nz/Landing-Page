"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  name: string
  title: string
  avatar: string
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials: Testimonial[] = [
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

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial()
      }, 6000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div
      className="relative max-w-4xl mx-auto px-4 py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#9FAEA9] hover:bg-[#9FAEA9]/10 hover:text-[#9FAEA9]"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden relative min-h-[300px] md:min-h-[250px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-full"
          >
            <Card className="pastel-card border-[#F0E5D7]/50 shadow-md">
              <CardContent className="pt-6 relative">
                <Quote className="h-8 w-8 text-[#9FAEA9] mb-4 opacity-70" />
                <p className="text-lg md:text-xl mb-6 italic text-gray-800">"{testimonials[currentIndex].quote}"</p>

                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#F0E5D7]/30"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#F0E5D7]/30"></div>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pb-6">
                <Avatar>
                  <AvatarImage
                    src={`/generic-placeholder.png?key=dp3hj&height=40&width=40`}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback className="bg-[#F0E5D7]/50 text-gray-800">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-800">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#9FAEA9] hover:bg-[#9FAEA9]/10 hover:text-[#9FAEA9]"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#9FAEA9] w-6" : "bg-[#9FAEA9]/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
