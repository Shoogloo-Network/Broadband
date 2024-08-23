/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'blog.broadband.asia'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     port: '',
    //     pathname: '/',
    //   },
    //   {
    //     protocol: 'http',
    //     hostname: 'blog.broadband.asia',
    //     port: '',
    //     pathname: '/',
    //   },
    // ]
  },
  trailingSlash: true
 
}

module.exports = nextConfig
