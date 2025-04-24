"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import MaoriSymbol from "./maori-symbol"

export default function RedesignedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full py-4 px-4 md:px-6 lg:px-8 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <MaoriSymbol
              size={30}
              color="#9FAEA9"
              className="transition-transform duration-500 group-hover:rotate-180"
            />
            <span className="text-2xl font-bold text-[#9FAEA9]">Mohios</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9] relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9FAEA9] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9] relative group">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9FAEA9] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9] relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9FAEA9] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9] relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9FAEA9] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            className="relative overflow-hidden group bg-[#9FAEA9] text-white border-none hover:bg-[#9FAEA9]/90"
            asChild
          >
            <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-[#F0E5D7]/20 mt-4 animate-slideDown">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9]"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9]"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9]"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-800 hover:text-[#9FAEA9]"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-[#9FAEA9] text-white hover:bg-[#9FAEA9]/90">
              <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
