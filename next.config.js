/** @type {import('next').NextConfig} */

const allowedWPimageDomain = new URL(process.env.NEXT_PUBLIC_WP_URL).hostname;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [allowedWPimageDomain],
  },
};

module.exports = nextConfig;
