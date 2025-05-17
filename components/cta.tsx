import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Curious What AI Could Save You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover how many hours (and dollars) you're leaving on the table.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="px-8 bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                Reveal Your AI Savings Potential
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
