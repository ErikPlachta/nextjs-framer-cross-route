/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PLACE_ANIMATION_DURATION: process.env.PLACE_ANIMATION_DURATION,
    PLACE_ANIMATION_DELAY: process.env.PLACE_ANIMATION_DELAY,
    PLACE_ANIMATION_DELAY_SCROLL: process.env.PLACE_ANIMATION_DELAY_SCROLL,
  }
}

module.exports = nextConfig
