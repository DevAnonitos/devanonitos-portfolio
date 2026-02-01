import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url || 'https://devanonitos.com' 

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      
          '/_next/',    
          '/static/',   
          '/private/',  
          '/*.json$', 
        ],
      },
      {
        userAgent: 'GPTBot', 
        disallow: ['/private/'],
      },
      {
        userAgent: 'Googlebot',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Googlebot-Image',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Googlebot-News',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Applebot',
        disallow: ['/private/'],
      },
      {
        userAgent: 'YandexBot',
        disallow: ['/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}