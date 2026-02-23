import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/:path*',
          destination: '/journal/:path*',
        },
        {
          source: '/portfolio/:path*',
          destination: '/projects/:path*',
        },
        {
          source: '/work/:path*',
          destination: '/projects/:path*',
        },
        {
          source: '/stack/:path*',
          destination: '/skills/:path*',
        },
      ],
      afterFiles: [
        {
          source: '/api/:path*',
          destination: 'https://api.yourbackend.com/:path*',
        },
      ],
      fallback: [
        {
          source: '/old-blog/:path*',
          destination: '/journal/:path*',
        },
      ],
    }
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'clsx',
      'tailwind-merge',
      '@radix-ui/react-icons',
    ],
    // Turbopack optimizations for faster local dev
    turbopackFileSystemCacheForDev: true,
    // turbopackFileSystemCacheForBuild: true, // Only if using turbopack for build
  },

  typescript: {
    // Recommendation: Keep errors on for production stability,
    // but this is the project setting.
    ignoreBuildErrors: true,
    tsconfigPath: 'tsconfig.json',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Secure remote images using specific patterns
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
  generateEtags: false,
  generateBuildId: async () => {
    return process.env.GIT_HASH || 'default-build-id'
  },
}

export default nextConfig

