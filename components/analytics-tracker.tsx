"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function AnalyticsTracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Send page view with updated path
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      })
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}
