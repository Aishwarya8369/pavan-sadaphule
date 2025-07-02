// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.191.22:3000'],
    
    

  },
  images: {
    domains: ['via.placeholder.com'], // ✅ Add this block
  },
};

module.exports = nextConfig;
