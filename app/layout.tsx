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
  title: "AI Automation & Consulting in Auckland – AI Edge Session | Mohios",
  description:
    "Unlock time & cost savings with a 2-hour AI Edge Session in Auckland. Diagnose, automate, and get your strategic AI roadmap. Book today.",
  keywords:
    "AI automation Auckland, AI consulting Auckland, AI training Auckland, AI audit Auckland, AI business automation",
  authors: [{ name: "Mohios" }],
  creator: "Mohios",
  publisher: "Mohios",
  openGraph: {
    title: "AI Edge Session – Auckland AI Automation Experts",
    description: "Discover AI savings in just 2 hours. Live automation + roadmap.",
    url: "https://www.mohios.com/",
    siteName: "Mohios",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.mohios.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Edge Session - Auckland AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Edge Session – Auckland AI Automation Experts",
    description: "Discover AI savings in just 2 hours. Live automation + roadmap.",
    images: ["https://www.mohios.com/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.mohios.com/",
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
        <link rel="preconnect" href="https://perspective.co" />
        <link rel="dns-prefetch" href="https://perspective.co" />
        <link rel="preconnect" href="https://calendar.app.google" />
        <link rel="dns-prefetch" href="https://calendar.app.google" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.mohios.com/#org",
                  name: "Mohios",
                  url: "https://www.mohios.com/",
                  logo: "https://www.mohios.com/logo.png",
                  image: "https://www.mohios.com/og-image.jpg",
                  description:
                    "Premium AI automation, consulting, and training for Auckland SMEs. Start with the AI Edge Session — a 2-hour diagnostic and strategic roadmap.",
                  email: "hello@mohios.com",
                  telephone: "+64 21 030 5430",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Auckland",
                    addressRegion: "Auckland",
                    addressCountry: "NZ",
                  },
                  areaServed: {
                    "@type": "City",
                    name: "Auckland",
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://www.mohios.com/#ai-edge-service",
                  serviceType: "AI Automation & Consulting Workshop",
                  name: "AI Edge Session",
                  provider: { "@id": "https://www.mohios.com/#org" },
                  areaServed: { "@type": "City", name: "Auckland" },
                  audience: { "@type": "BusinessAudience", name: "SME owners, founders, and team leads" },
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "NZD",
                    price: "800",
                    url: "https://www.mohios.com/#book",
                    availability: "https://schema.org/InStock",
                  },
                  description:
                    "A founder-led, 2-hour diagnostic and roadmap to identify AI automation opportunities, implement one quick-win automation, and outline next steps. Money-back guarantee if no savings identified.",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.mohios.com/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How does the AI Edge Session work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Simple 3-step process: 1) Take our AI Savings Quiz to identify your biggest opportunities, 2) Join your personalized 2-hour AI Edge Session where we diagnose workflows and implement one quick-win automation, 3) Receive your strategic AI roadmap with prioritized next steps and ROI projections.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "I'm completely new to AI. Is this session right for me?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The AI Edge Session is designed for business owners who want to understand AI's potential without getting lost in technical jargon. We focus on practical applications that save time and money, not complex theory.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do you handle data privacy and security?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We take data privacy seriously. All client information is kept confidential, and we can sign NDAs if required. We'll discuss data handling protocols during your session and recommend privacy-first AI solutions.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What kind of follow-up support do you provide?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "After your session, you'll receive a detailed roadmap you can implement yourself. If you need hands-on help, we offer implementation packages and ongoing consulting to ensure your AI initiatives succeed.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you guarantee results?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes! If we can't identify clear time or cost savings opportunities during your session, you don't pay. We're confident every business has automation potential – we just need to find it together.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the AI Edge Session?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A founder-led, 2-hour session for Auckland SMEs. We diagnose time and cost savings, implement one quick-win automation, and deliver a strategic roadmap.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you work only in Auckland?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We operate in Auckland in person and run virtual sessions via Zoom for clients across New Zealand.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is there a guarantee?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. If we cannot identify clear savings or ship a quick-win automation, you don't pay.",
                      },
                    },
                  ],
                },
              ],
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
