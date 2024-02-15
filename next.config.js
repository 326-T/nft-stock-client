/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/contract.thirdweb.com\/metadata\/\d+\/\w+/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'contract-cache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
        },
      },
    },
  ],
})

module.exports = withPWA({})
