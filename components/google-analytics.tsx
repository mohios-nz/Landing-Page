"use client"

import Script from "next/script"
import { Suspense } from "react"
import AnalyticsTracker from "./analytics-tracker"

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  )
}

// Add TypeScript interface for the global gtag function
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: Record<string, unknown> | string) => void
  }
}
