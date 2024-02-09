/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  buildExcludes: [/middleware-manifest.json$/],
})

module.exports = withPWA({
  reactStrictMode: false,
})
