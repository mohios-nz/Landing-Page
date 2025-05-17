import { Check } from "lucide-react"

export default function WhatYouGet() {
  const features = [
    "AI Session Copilot – live transcript + auto-summary + follow-up email template (saves ~45 min/client)",
    "Unified Coach-OS workspace (Notion/ClickUp build) with booking, billing & CRM pipelines (cuts 3–5 paid apps)",
    "Content Engine Blueprint – 30-day prompt library + auto-repurposing workflow (posts daily in <10 min)",
    "Productization Toolkit – course template, pricing calculator, and launch email sequence (launch new offer in 2 weeks)",
    "Impact Dashboard – real-time client progress + ROI metrics (boosts renewals)",
    "Bi-weekly 1-on-1 optimisation calls + private community access",
    "90-Day 2× ROI Guarantee – or ongoing coaching free until you hit it",
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What You Get</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Everything included in the Future-Proof Coach programme:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-secondary-light rounded-lg p-8 shadow-md">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
