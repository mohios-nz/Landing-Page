import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Ready to Future-Proof Your Coaching Practice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-slate-700">
            Book a free AI Advisory Call to discover how many hours (and dollars) you could reclaim with the right
            systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 bg-white hover:bg-gray-50 text-black font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-black"
              asChild
            >
              <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                Book Your Free AI Advisory Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
