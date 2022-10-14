/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true
};

module.exports = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'graph.facebook.com',
      'cdn-icons-png.flaticon.com',
      'avatars.githubusercontent.com'
    ]
  }
};
