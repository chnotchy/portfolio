import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // 既存 URL が末尾スラッシュ付きで公開済み。
  trailingSlash: true,
  images: { unoptimized: true },
  typedRoutes: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
