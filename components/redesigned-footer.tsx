"use client"

import { useRef } from "react"
import Link from "next/link"
import { Twitter, Linkedin, Mail, Phone, BookOpen } from "lucide-react"
import { useInView } from "framer-motion"
import MaoriSymbol from "./maori-symbol"

export default function RedesignedFooter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#9FAEA9]/90 text-white py-12 px-4 md:px-6 lg:px-8 relative" ref={sectionRef}>
      {/* Decorative pattern */}
      <div className="absolute inset-0 pastel-waves opacity-20"></div>

      <div className="container mx-auto relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <MaoriSymbol size={30} color="#F0E5D7" />
              <h3 className="text-2xl font-bold">Mohios</h3>
            </div>
            <p className="mb-4">Transforming businesses with AI-powered workflow design and automation.</p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/dannyholtschke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0E5D7] transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dannyholtschke/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0E5D7] transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://mohios.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0E5D7] transition-colors duration-300 transform hover:scale-110"
              >
                <BookOpen size={20} />
                <span className="sr-only">Substack</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 border-b border-white/30 pb-2">Company</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Careers
                </span>
              </li>
              <li>
                <Link
                  href="https://mohios.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0E5D7] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Press
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 border-b border-white/30 pb-2">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Documentation
                </span>
              </li>
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Help Center
                </span>
              </li>
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Case Studies
                </span>
              </li>
              <li>
                <span className="text-white/80 cursor-default hover:text-white transition-colors duration-300">
                  Webinars
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 border-b border-white/30 pb-2">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#F0E5D7]" />
                <a href="mailto:danny@mohios.com" className="hover:text-[#F0E5D7] transition-colors duration-300">
                  danny@mohios.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#F0E5D7]" />
                <a href="tel:+64210305430" className="hover:text-[#F0E5D7] transition-colors duration-300">
                  +64210305430
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>&copy; {currentYear} Mohios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-sm text-white/70 cursor-default hover:text-white transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="text-sm text-white/70 cursor-default hover:text-white transition-colors duration-300">
              Terms of Service
            </span>
            <span className="text-sm text-white/70 cursor-default hover:text-white transition-colors duration-300">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
