import { Check } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Clarity Sprint",
      price: "NZ$1,500",
      description: "Perfect for solopreneurs or early-stage SMEs looking to optimize their workflow.",
      features: [
        "Audit of current workflows",
        "Comprehensive workflow mapping",
        "Top 5 optimization opportunities",
        "Actionable recommendations",
        "Implementation guidance",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      subtitle: "Mohios OS Setup",
      price: "NZ$5,000",
      description: "Ideal for busy SMEs needing a complete system overhaul.",
      features: [
        "Full OS build (Notion or GDrive)",
        "3 key automations setup",
        "SOP starter kit",
        "Team training session",
        "30-day implementation support",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Premium Custom",
      subtitle: "Custom AI Integration",
      price: "Custom",
      description: "Comprehensive solution for visionary founders with unique automation needs.",
      features: [
        "Custom GPT/Claude agents",
        "Advanced automations",
        "Multi-platform integration",
        "Comprehensive documentation",
        "Dedicated implementation support",
        "AI strategy consultation",
      ],
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-lg overflow-hidden ${
                plan.popular ? "shadow-lg border-[#8bada3] z-10 transform md:-translate-y-2" : "border-gray-200"
              }`}
              style={{
                ...(plan.popular ? { boxShadow: "0 10px 25px -5px rgba(139, 173, 163, 0.25)" } : {}),
              }}
            >
              {plan.popular && <div className="bg-[#8bada3] text-white text-center py-3 font-medium">Most Popular</div>}

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">{plan.subtitle}</div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#8bada3] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://calendar.app.google/3ArxYeXL8CVTKT5V6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-2.5 text-center rounded font-medium transition-colors ${
                    plan.popular
                      ? "bg-[#8bada3] text-white hover:bg-[#7a9c93]"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Retainer Services Box */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg border border-[#8bada3]/30 shadow-sm p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ongoing OS Partner Retainer</h3>
                <p className="text-gray-600 mb-6">
                  For scaling businesses needing continuous support and workflow evolution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>Monthly upgrades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>New workflow builds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>AI agent deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>Team coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#8bada3] flex-shrink-0" />
                    <span>Quarterly strategy sessions</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-right mb-4">
                  <span className="text-4xl font-bold text-[#8bada3]">NZ$1,200</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
