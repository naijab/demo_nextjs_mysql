module.exports = {
  serverRuntimeConfig: {
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}