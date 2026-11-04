import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: '/storybook', destination: '/storybook/index.html', permanent: false }]
  },
}

export default nextConfig
