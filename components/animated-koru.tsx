"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedKoruProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

export default function AnimatedKoru({
  width = 100,
  height = 100,
  color = "#9FAEA9",
  className = "",
}: AnimatedKoruProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`inline-flex ${className}`} style={{ width, height }}>
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M90 50C90 30 70 20 50 30C30 40 30 70 50 80C70 90 90 80 90 60C90 40 70 30 50 40C30 50 30 70 50 75C70 80 80 70 80 60C80 50 70 45 60 50C50 55 50 65 60 70"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="animate-draw"
        />
        <motion.path
          d="M10 50C10 30 30 20 50 30"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M20 70C20 50 40 40 60 50"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  )
}
