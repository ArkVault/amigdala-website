/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: 'https://aerlig.vercel.app/',
      },
      {
        source: '/app/:path*',
        destination: 'https://aerlig.vercel.app/:path*',
      },
      {
        source: '/_next/static/:path*',
        destination: 'https://aerlig.vercel.app/_next/static/:path*',
      },
      {
        source: '/icon.png',
        destination: 'https://aerlig.vercel.app/icon.png',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
