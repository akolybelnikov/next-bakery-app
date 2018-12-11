const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    identityPoolId: process.env.IDENTITY_POOL_ID,
    region: process.env.APPSYNC_REGION,
    authenticationType: process.env.APPSYNC_AUTHENTICATIONTYPE,
    graphqlEndpoint: process.env.APPSYNC_GRAPHQLENDPOINT,
    imagehandler: process.env.IMAGEHANDLER_URL,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.WEBCLIENT_ID,
    defaultUserName: process.env.DEFAULT_USERNAME,
    defaultUserEmail: process.env.DEFAULT_USER_EMAIL,
    defaultUserPassword: process.env.DEFAULT_USER_PASSWORD
  },
})
