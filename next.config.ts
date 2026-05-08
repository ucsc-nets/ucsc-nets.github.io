import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports
  },
  reactCompiler: true,
};

export default nextConfig;
