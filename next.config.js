/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  webpack: (config, { dev, isServer }) => {
    // Disable CSS minification to avoid cssnano parsing errors
    if (!dev && !isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

module.exports = nextConfig