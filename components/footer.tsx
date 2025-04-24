"use client"

import Link from "next/link"
import { Twitter, Linkedin, Mail, Phone, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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
    <footer id="contact" className="bg-gray-900 text-gray-200 py-12 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/2"></div>

      {/* Maori-inspired pattern */}
      <svg
        className="absolute bottom-10 left-10 w-24 h-24 text-white/5"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35 s35,15.7,35,35S69.3,85,50,85z"
          fill="currentColor"
        />
        <path
          d="M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25z M50,65c-8.3,0-15-6.7-15-15s6.7-15,15-15 s15,6.7,15,15S58.3,65,50,65z"
          fill="currentColor"
        />
        <path d="M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S52.8,45,50,45z" fill="currentColor" />
      </svg>

      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="relative">
                <span className="absolute -inset-1 -skew-y-3 bg-primary/20 rounded-lg" aria-hidden="true"></span>
                <span className="relative">Mohios</span>
              </span>
            </h3>
            <p className="mb-4 text-gray-400">
              Transforming businesses with AI-powered workflow design and automation.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/dannyholtschke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dannyholtschke/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://mohios.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full"
              >
                <BookOpen size={18} />
                <span className="sr-only">Substack</span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 cursor-default">About Us</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">Careers</span>
              </li>
              <li>
                <Link
                  href="https://mohios.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">Press</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 cursor-default">Documentation</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">Help Center</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">Case Studies</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">Webinars</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-medium text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:danny@mohios.com" className="text-gray-400 hover:text-white transition-colors">
                  danny@mohios.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+64210305430" className="text-gray-400 hover:text-white transition-colors">
                  +64210305430
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500">&copy; {currentYear} Mohios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-500 cursor-default">Privacy Policy</span>
            <span className="text-sm text-gray-500 cursor-default">Terms of Service</span>
            <span className="text-sm text-gray-500 cursor-default">Cookie Policy</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
