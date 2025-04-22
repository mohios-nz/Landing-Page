"use client"

import { useState } from "react"
import { Clock, TrendingDown, AlertCircle, HelpCircle } from "lucide-react"

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const statistics = [
    {
      problem: "Wasted time in meetings",
      statistic: "72%",
      description: "of meetings are ineffective",
      source: "Atlassian, Workplace Woes",
      color: "from-gray-200 to-gray-50",
      hoverColor: "group-hover:from-gray-300 group-hover:to-gray-100",
    },
    {
      problem: "Constant interruptions & switching tools",
      statistic: "58%",
      description: 'of work time is spent on "work about work"',
      source: "Asana, Anatomy of Work 2023",
      color: "from-gray-200 to-gray-50",
      hoverColor: "group-hover:from-gray-300 group-hover:to-gray-100",
    },
    {
      problem: "Repetitive admin",
      statistic: "30%",
      description: "of workers feel buried in manual tasks",
      source: "Zapier, Workforce Report 2024",
      color: "from-gray-200 to-gray-50",
      hoverColor: "group-hover:from-gray-300 group-hover:to-gray-100",
    },
    {
      problem: "No system for finding info",
      statistic: "25%",
      description: "of team time lost searching for information",
      source: "Atlassian, State of Teams 2025",
      color: "from-gray-200 to-gray-50",
      hoverColor: "group-hover:from-gray-300 group-hover:to-gray-100",
    },
    {
      problem: "Stuck on AI adoption",
      statistic: "65%",
      description: "explore AI, only 15% apply it usefully",
      source: "ClickUp & McKinsey data",
      color: "from-gray-200 to-gray-50",
      hoverColor: "group-hover:from-gray-300 group-hover:to-gray-100",
    },
  ]

  const costs = [
    {
      title: "Your best people doing low-leverage work",
      icon: <Clock className="h-10 w-10 text-gray-700" />,
      description: "Top talent wastes time on tasks that don't utilize their skills or drive growth",
    },
    {
      title: "Missed leads and revenue",
      icon: <TrendingDown className="h-10 w-10 text-gray-700" />,
      description: "Opportunities slip through the cracks due to disorganized processes and follow-up",
    },
    {
      title: "Burnout from chaos and overcommunication",
      icon: <AlertCircle className="h-10 w-10 text-gray-700" />,
      description: "Constant interruptions and unclear priorities lead to stress and employee turnover",
    },
    {
      title: "Projects that stall because no one knows the next step",
      icon: <HelpCircle className="h-10 w-10 text-gray-700" />,
      description: "Unclear workflows create bottlenecks and prevent teams from executing efficiently",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Data Doesn't Lie</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kiwi Businesses face the same common challenges that drain productivity and stifle growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {statistics.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg ${
                activeIndex === index ? "ring-2 ring-gray-800 ring-offset-2" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} ${item.hoverColor} transition-all duration-300`}
              ></div>
              <div className="relative p-6 z-10">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{item.problem}</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{item.statistic}</span>
                  <span className="text-sm text-gray-600 mb-1">{item.description}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">{item.source}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gray-800"
                  style={{
                    width: `${Number.parseInt(item.statistic) || 0}%`,
                    maxWidth: "100%",
                    transition: "width 1s ease-in-out",
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Cost?</h3>

          <div className="relative mt-16 pt-10">
            {/* Connecting line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 -translate-x-1/2 z-0"></div>

            <div className="space-y-16">
              {costs.map((cost, index) => (
                <div
                  key={index}
                  className={`relative z-10 ${
                    index % 2 === 0
                      ? "ml-auto pr-8 md:ml-[50%] md:pr-0 md:pl-8"
                      : "mr-auto pl-8 md:mr-[50%] md:pl-0 md:pr-8"
                  } max-w-full md:max-w-[50%]`}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-6 md:top-0 left-0 md:left-auto md:-left-6 md:-translate-x-[50%] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 border border-gray-200">
                    {cost.icon}
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">{cost.title}</h4>
                    <p className="text-gray-600">{cost.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
