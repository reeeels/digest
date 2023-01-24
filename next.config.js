/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
  
    return config;
}
};

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'storage.googleapis.com'],
  },
}
