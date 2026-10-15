import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  transpilePackages: ["@calories-counter/ui", "@calories-counter/domain"],
};

export default nextConfig;
