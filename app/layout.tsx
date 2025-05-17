import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-WB4F0LWQ4B"

export const metadata = {
  title: "AI Workflow Design & Automation for NZ Businesses | Mohios",
  description:
    "Struggling with tool overload and workflow chaos? Mohios builds AI-powered operating systems that save time and boost growth. Based in Auckland, NZ.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>{/* Any head elements can go here */}</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        </Suspense>
      </body>
    </html>
  )
}
