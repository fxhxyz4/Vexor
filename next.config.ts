import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatarapi.runflare.run',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
