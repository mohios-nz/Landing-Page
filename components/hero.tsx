import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-sand-light to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              The Future-Proof Coach
            </h1>
            <p className="text-xl text-slate-700">
              Fuse human insight with AI precision to deliver deeper results, publish thought leadership in minutes, and
              grow a resilient practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 bg-primary-dark hover:bg-slate-dark text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary-dark"
                asChild
              >
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Book AI Advisory Call
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-2 border-primary-dark text-primary-dark hover:bg-primary-light font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                  Reveal Your AI Savings Potential
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder-cc5yh.png"
              alt="Future-proof coach using AI to enhance their coaching practice"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
