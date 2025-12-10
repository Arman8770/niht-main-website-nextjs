import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // for static export
  trailingSlash: true,
  images: {
    unoptimized: true, // disable Next.js image optimization
  },
  // If using a base path for subdirectory:
  // basePath: '/courses',
  // Also set assetPrefix so static assets (JS/CSS) use the correct base path
  // assetPrefix: '/courses/'
};

export default nextConfig;
