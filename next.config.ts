import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_KEY_AUTH: process.env.API_KEY_AUTH,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
