  // next.config.ts
  import type { NextConfig } from 'next'

  const nextConfig: NextConfig = {
    experimental: {
      optimizeCss: false, // matikan LightningCSS → fallback ke PostCSS
    },
  }

  export default nextConfig
