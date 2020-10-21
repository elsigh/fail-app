module.exports = {
  env: {
    SENTRY_DSN:
      process.env.NEXT_PUBLIC_SENTRY_DSN ||
      process.env.SENTRY_DSN ||
      "https://0f55dd6b18ad496686abbd5ce1847687@o142405.ingest.sentry.io/5474598",
    SENTRY_RELEASE: process.env.SENTRY_RELEASE || "fallback-release",
  },
  experimental: { plugins: true },
};
