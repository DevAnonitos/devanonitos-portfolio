import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  output: 'export',
  trailingSlash: true,
  cacheComponents: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'clsx',
      'tailwind-merge',
      '@radix-ui/react-icons',
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
