/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/calculator-challenge-5-bora-codar',
  assetPrefix: '/calculator-challenge-5-bora-codar',
}

module.exports = nextConfig
