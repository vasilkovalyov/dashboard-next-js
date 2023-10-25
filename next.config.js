/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    unsplashApiKey: process.env.UNSPLASH_API_KEY,
  },
};

module.exports = nextConfig;
