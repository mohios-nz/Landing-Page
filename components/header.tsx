"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Mohios
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[#8bada3] hover:bg-[#7a9c93] text-white">
            <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
              Book AI Advisory Call
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#features" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="w-full bg-[#8bada3] hover:bg-[#7a9c93] text-white">
              <Link href="https://calendar.app.google/3ArxYeXL8CVTKT5V6" target="_blank" rel="noopener noreferrer">
                Book AI Advisory Call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
