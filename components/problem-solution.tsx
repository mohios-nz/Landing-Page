import { Check, Clock, Repeat, BarChart3, Brain, Database } from "lucide-react"

export default function ProblemSolution() {
  const items = [
    {
      problem: "Prep & follow-up eat your evenings",
      problemDesc: "Manual note-taking, recap emails, homework reminders—every client adds an extra hour.",
      solution: "AI Session Copilot",
      solutionDesc:
        "Real-time transcript, auto-summaries, and scheduled nudges keep clients on track while you clock off on time.",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
    {
      problem: "Feast-or-famine pipeline",
      problemDesc: "Inconsistent posting and scattered referrals mean unpredictable months.",
      solution: "Always-On Content Engine",
      solutionDesc: "Turns a single insight into posts, reels, and emails—publishing daily while you coach.",
      icon: <Repeat className="h-8 w-8 text-primary" />,
    },
    {
      problem: "Tool overload & rising costs",
      problemDesc: "Calendars, forms, docs, CRM… you're paying for seven apps and living in none.",
      solution: "Unified Coach OS",
      solutionDesc: "One streamlined workspace that books, bills, and files—cut software spend by up to 60%.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      problem: "Hard-won IP stays trapped in your head",
      problemDesc: "You repeat the same frameworks every session instead of scaling them.",
      solution: "Productize Your Wisdom",
      solutionDesc: "Package exercises into mini-courses, templates, or memberships that earn while you sleep.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      problem: "No clear metrics",
      problemDesc: "Progress feels fuzzy; clients forget wins, you can't prove ROI.",
      solution: "Impact Dashboard",
      solutionDesc:
        "AI pulls milestones, habit data, and testimonials into visuals you both can celebrate—and renew on.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Where Coaches Struggle & How We Solve It</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            The coaching industry is changing rapidly. Here's how we help you stay ahead.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(to right, #F8F5EB, white)"
                    : "linear-gradient(to right, #E1EBE7, white)",
              }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-bold text-black">{item.problem}</h3>
                    <p className="text-slate-600">{item.problemDesc}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{item.solution}</h3>
                    <p className="text-slate-600">{item.solutionDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
