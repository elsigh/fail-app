const { withSentrySourceMaps } = require('@next/sentry-source-maps')

module.exports = withSentrySourceMaps({
  experimental: { plugins: true },
})
