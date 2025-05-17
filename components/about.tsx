import Image from "next/image"
import { Quote } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-sand-light to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">About Danny & Mohios</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/professional-coach-office.png"
              alt="Danny Holtschke - Founder & Chief AI Coach"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">Danny Holtschke — Founder & Chief AI Coach</h3>
            <p className="text-slate-700">
              German-born engineer, ex-Silicon Valley founder, and long-time Agile/Product leader now calling Auckland
              home. For 15 years he's helped startups and enterprises ship faster, think clearer, and work
              smarter—guiding teams at Commerzbank, Rocket Internet, and dozens of high-growth founders.
            </p>
            <p className="text-slate-700">
              But spreadsheets and sprints were never the whole story. Two Vipassana retreats, 3 Burning Mans, and a
              move to New Zealand rewired Danny's worldview: human wisdom first, tech as the amplifier. That philosophy
              became Mohios.
            </p>

            <div className="pt-6 border-t border-primary-light">
              <h4 className="text-xl font-semibold mb-3 text-black">Why coaches trust Danny</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                  <span>Built → Scaled → Exited a SaaS startup (so he speaks your entrepreneurial language).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                  <span>
                    Certified Scrum & Agile Coach—trained over 400 leaders on lean, systems thinking, and GTD.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                  <span>
                    AI workflow architect behind content engines that publish 1,000+ posts/month with no extra
                    head-count.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                  <span>
                    Combines German engineering rigor with Kiwi creativity and a calm, heart-centered coaching style.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md border border-primary-light">
            <h4 className="text-xl font-semibold mb-4 text-black">What "Mohios" means</h4>
            <p className="text-slate-700 mb-4">
              Mōhio is Māori for wisdom, clarity, deep understanding. Add an "s" and you get an operating system—a nod
              to the AI automations that run beneath the surface while your human insight shines.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>Mission:</strong> Fuse cutting-edge AI with timeless coaching presence so solopreneur coaches 10×
              their impact without 10× their hours.
            </p>

            <div className="flex items-start gap-4">
              <Quote className="h-10 w-10 text-primary flex-shrink-0" />
              <blockquote className="italic text-lg text-slate-700">
                "Technology should feel like an invisible partner—quietly handling the busywork while you do the
                life-changing work."
                <footer className="mt-2 font-medium not-italic">— Danny Holtschke, Founder of Mohios</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
