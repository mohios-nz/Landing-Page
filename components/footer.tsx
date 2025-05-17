import Link from "next/link"
import { Twitter, Linkedin, Mail, Phone, BookOpen } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 text-slate-200 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Mohios</h3>
            <p className="mb-4">Transforming businesses with AI-powered workflow design and automation.</p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/dannyholtschke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dannyholtschke/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://mohios.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <BookOpen size={20} />
                <span className="sr-only">Substack</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300 cursor-default">About Us</span>
              </li>
              <li>
                <span className="text-slate-300 cursor-default">Careers</span>
              </li>
              <li>
                <Link
                  href="https://mohios.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-slate-300 cursor-default">Press</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300 cursor-default">Documentation</span>
              </li>
              <li>
                <span className="text-slate-300 cursor-default">Help Center</span>
              </li>
              <li>
                <span className="text-slate-300 cursor-default">Case Studies</span>
              </li>
              <li>
                <span className="text-slate-300 cursor-default">Webinars</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:danny@mohios.com" className="hover:text-primary transition-colors">
                  danny@mohios.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+64210305430" className="hover:text-primary transition-colors">
                  +64210305430
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Mohios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-sm text-slate-300 cursor-default">Privacy Policy</span>
            <span className="text-sm text-slate-300 cursor-default">Terms of Service</span>
            <span className="text-sm text-slate-300 cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
