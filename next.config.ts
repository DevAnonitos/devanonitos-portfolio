import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
};

export default nextConfig;
