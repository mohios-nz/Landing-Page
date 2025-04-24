"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Clock, TrendingDown, AlertCircle, HelpCircle } from "lucide-react"

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const controlsStats = useAnimation()
  const controlsCosts = useAnimation()
  const statsRef = useRef(null)
  const costsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const costsInView = useInView(costsRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (statsInView) {
      controlsStats.start("visible")
    }
    if (costsInView) {
      controlsCosts.start("visible")
    }
  }, [statsInView, costsInView, controlsStats, controlsCosts])

  const statistics = [
    {
      problem: "Wasted time in meetings",
      statistic: "72%",
      description: "of meetings are ineffective",
      source: "Atlassian, Workplace Woes",
    },
    {
      problem: "Constant interruptions & switching tools",
      statistic: "58%",
      description: 'of work time is spent on "work about work"',
      source: "Asana, Anatomy of Work 2023",
    },
    {
      problem: "Repetitive admin",
      statistic: "30%",
      description: "of workers feel buried in manual tasks",
      source: "Zapier, Workforce Report 2024",
    },
    {
      problem: "No system for finding info",
      statistic: "25%",
      description: "of team time lost searching for information",
      source: "Atlassian, State of Teams 2025",
    },
    {
      problem: "Stuck on AI adoption",
      statistic: "65%",
      description: "explore AI, only 15% apply it usefully",
      source: "ClickUp & McKinsey data",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Maori-inspired koru pattern */}
      <svg
        className="absolute top-20 right-10 w-32 h-32 text-primary/10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90,45c0,8.3-3,15.3-8.9,21.1C75.3,72,68.3,75,60,75c-8.3,0-15.3-3-21.1-8.9C33,60.3,30,53.3,30,45 c0-8.3,3-15.3,8.9-21.1C44.7,18,51.7,15,60,15c8.3,0,15.3,3,21.1,8.9C87,29.7,90,36.7,90,45z M60,25c-5.5,0-10.2,2-14.1,5.9 C41.9,34.8,40,39.5,40,45c0,5.5,2,10.2,5.9,14.1C49.8,63.1,54.5,65,60,65c5.5,0,10.2-2,14.1-5.9C78.1,55.2,80,50.5,80,45 c0-5.5-2-10.2-5.9-14.1C70.2,27,65.5,25,60,25z"
          fill="currentColor"
        />
        <path
          d="M50,50c0-5.5,4.5-10,10-10s10,4.5,10,10s-4.5,10-10,10S50,55.5,50,50z M60,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S62.8,45,60,45z"
          fill="currentColor"
        />
        <path
          d="M10,50c0-22.1,17.9-40,40-40s40,17.9,40,40s-17.9,40-40,40S10,72.1,10,50z M50,20c-16.6,0-30,13.4-30,30s13.4,30,30,30 s30-13.4,30-30S66.6,20,50,20z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              The Reality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The Data Doesn't Lie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Businesses face common challenges that drain productivity and stifle growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={controlsStats}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {statistics.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg ${
                activeIndex === index ? "ring-2 ring-gray-800 ring-offset-2" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white transition-all duration-300 group-hover:from-gray-100 group-hover:to-gray-50"></div>
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
                    transition: "width 1s ease-in-out, opacity 0.3s ease",
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            The Cost?
          </motion.h3>

          <motion.div
            className="relative mt-16 pt-10"
            ref={costsRef}
            variants={timelineVariants}
            initial="hidden"
            animate={controlsCosts}
          >
            {/* Connecting line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 -translate-x-1/2 z-0"></div>

            <div className="space-y-16">
              {costs.map((cost, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
