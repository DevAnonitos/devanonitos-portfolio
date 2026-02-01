import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url || 'https://devanonitos.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/projects',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}