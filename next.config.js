/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    unsplashApiKey: process.env.UNSPLASH_API_KEY,
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'localhost'],
  },
};

module.exports = nextConfig;
