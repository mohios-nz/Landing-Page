import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mohios.com",
      lastModified: new Date("2025-08-16"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]
}
