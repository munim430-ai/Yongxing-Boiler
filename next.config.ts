import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.yx-boiler.com",
      },
      {
        protocol: "https",
        hostname: "yongxing-boiler.com",
      },
    ],
  },
};

export default nextConfig;
