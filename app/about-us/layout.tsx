import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Mohios",
  description: "Learn about Danny Holtschke and the Mohios mission to transform coaching practices with AI.",
}

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
