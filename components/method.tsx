export default function Method() {
  const steps = [
    {
      number: 1,
      title: "Clarity Sprint (Week 1)",
      subtitle: "90-minute deep-dive",
      items: [
        "Map your signature frameworks, client journey, and friction points.",
        "Audit tool stack, content flow, and revenue streams.",
        'Define "North-Star Outcomes" (hours freed, revenue target, client impact metrics).',
      ],
    },
    {
      number: 2,
      title: "Coach-OS Design (Weeks 2-3)",
      subtitle: "Prototype & test",
      items: [
        "Build an AI-powered back-office: scheduling, invoicing, session transcripts, nudges.",
        'Configure a "Session Copilot" that auto-summarizes calls and drafts recap emails.',
        "Set up a unified workspace (Notion/ClickUp) for goals, resources, and habit tracking.",
      ],
    },
    {
      number: 3,
      title: "Content Engine Installation (Weeks 4-5)",
      subtitle: "Always-on visibility",
      items: [
        "Turn one weekly insight into multi-channel posts, reels, and newsletter snippets.",
        "Train an AI style-guide on your tone so every draft sounds 100% like you.",
        "Automate idea capture → outline → publish in a single click.",
      ],
    },
    {
      number: 4,
      title: "Productize Your Wisdom (Weeks 6-8)",
      subtitle: "Leverage & scale",
      items: [
        "Package repeatable exercises into mini-courses, templates, or cohort programs.",
        "Deploy automated sales funnels that nurture leads and close enrollments while you sleep.",
        "Implement KPI dashboard to measure conversion, retention, and lifetime value.",
      ],
    },
    {
      number: 5,
      title: "Performance Loop (Ongoing)",
      subtitle: "Iterate & optimize",
      items: [
        "Bi-weekly coaching to analyze data, refine workflows, and remove new bottlenecks.",
        'Quarterly "Innovation Sprints" to add advanced AI capabilities (e.g., client chatbots, voice cloning, personalized micro-courses).',
        "Community access to share best practices with other Future-Proof Coaches.",
      ],
    },
  ]

  return (
    <section id="method" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-sand-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">The Mohios Method for Future-Proof Coaches</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            A proven 5-step process to transform your coaching practice with AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-primary-light"></div>
              )}

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-primary-dark font-medium mb-4">{step.subtitle}</p>

                  <div className="bg-white rounded-lg p-6 shadow-md border border-primary-light">
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-accent rounded-lg p-8 shadow-md border border-accent-dark">
          <h3 className="text-2xl font-bold text-center mb-4 text-black">Guarantee</h3>
          <p className="text-center text-lg">
            Achieve 10+ reclaimed hours per week and generate at least 2× programme fee in new or recurring revenue
            within 90 days—or we coach you free until you do.
          </p>
        </div>
      </div>
    </section>
  )
}
