/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/calculator-challenge-5-bora-codar',
  assetPrefix: '/calculator-challenge-5-bora-codar',
}

module.exports = nextConfig
