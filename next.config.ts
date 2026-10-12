import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com", pathname: "/gallery/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    qualities: [100, 75, 95],
  },
};

export default nextConfig;
