/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/one-chat-challenge-4-bora-codar',
  assetPrefix: '/one-chat-challenge-4-bora-codar',
}

module.exports = nextConfig
