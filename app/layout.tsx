import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "AI Automation Consulting & Training | Mohios Auckland",
  description:
    "Get an AI Edge Session – a strategic 2-hour workshop to diagnose and roadmap AI automation opportunities for your business in Auckland.",
  keywords:
    "AI automation Auckland, AI consulting Auckland, AI training Auckland, AI audit Auckland, AI business automation",
  authors: [{ name: "Mohios" }],
  creator: "Mohios",
  publisher: "Mohios",
  openGraph: {
    title: "AI Automation Consulting & Training | Mohios Auckland",
    description:
      "Get an AI Edge Session – a strategic 2-hour workshop to diagnose and roadmap AI automation opportunities for your business in Auckland.",
    url: "https://yourdomain.com",
    siteName: "Mohios",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Consulting & Training | Mohios Auckland",
    description:
      "Get an AI Edge Session – a strategic 2-hour workshop to diagnose and roadmap AI automation opportunities for your business in Auckland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Edge Session",
              provider: {
                "@type": "Organization",
                name: "Mohios",
                url: "https://yourdomain.com",
                logo: "https://yourdomain.com/logo.png",
              },
              areaServed: {
                "@type": "Place",
                name: "Auckland, New Zealand",
              },
              serviceType: "AI Automation & Consulting Workshop",
              description:
                "The AI Edge Session is a 2-hour founder-led workshop in Auckland, diagnosing high-impact automation opportunities, implementing one live quick-win, and delivering a strategic AI roadmap.",
              offers: {
                "@type": "Offer",
                priceCurrency: "NZD",
                price: "800",
                url: "https://yourdomain.com/ai-edge-session-auckland",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-heading: ${montserrat.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
