import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(process.cwd(), "src"),
    };
    return config;
  },
};

export default nextConfig;
