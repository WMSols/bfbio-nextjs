import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

function strapiHostname() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!raw) return "localhost";
  try {
    return new URL(raw).hostname;
  } catch {
    return "localhost";
  }
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shop/products",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: strapiHostname(),
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "srv1615764.hstgr.cloud",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
