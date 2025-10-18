import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // for static export
  trailingSlash: true,
  images: {
    unoptimized: true, // disable Next.js image optimization
  },
};

export default nextConfig;
