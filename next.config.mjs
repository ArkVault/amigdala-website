/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://app.amigdala.ai',
        permanent: false,
      },
      {
        source: '/app/:path*',
        destination: 'https://app.amigdala.ai/:path*',
        permanent: false,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
