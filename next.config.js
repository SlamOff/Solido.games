/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { images: { layoutRaw: true } },
  swcMinify: false
}

module.exports = nextConfig
