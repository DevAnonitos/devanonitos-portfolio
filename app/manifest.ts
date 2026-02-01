import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.title,
    short_name: 'DevAnonitos',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000', 
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}