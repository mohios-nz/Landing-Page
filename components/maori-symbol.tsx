"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MaoriSymbolProps {
  size?: number
  color?: string
  className?: string
  animationDelay?: number
}

export default function MaoriSymbol({
  size = 40,
  color = "#9FAEA9",
  className = "",
  animationDelay = 0,
}: MaoriSymbolProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, animationDelay * 1000)

    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <div className={`inline-flex ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.path
          d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M30 50C30 38.9543 38.9543 30 50 30V70C38.9543 70 30 61.0457 30 50Z"
          fill={color}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.path
          d="M70 50C70 61.0457 61.0457 70 50 70V30C61.0457 30 70 38.9543 70 50Z"
          fill={color}
          fillOpacity="0.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </motion.svg>
    </div>
  )
}
