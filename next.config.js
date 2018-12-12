const { parsed: localEnv } = require("dotenv").config()
const webpack = require("webpack")
const withSass = require("@zeit/next-sass")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

module.exports = withSass(
    withBundleAnalyzer({
        webpack: config => {
            config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
            // Fixes npm packages that depend on `fs` module
            config.node = {
                fs: "empty"
            }

            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]"
                    }
                }
            })

            return config
        },
        serverRuntimeConfig: {
            // Will only be available on the server side
            mySecret: "secret"
        },
        publicRuntimeConfig: {
            // Will be available on both server and client
            staticFolder: "/static",
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
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
            process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: "static",
                reportFilename: "../bundles/server.html"
            },
            browser: {
                analyzerMode: "static",
                reportFilename: "../bundles/client.html"
            }
        },
        // exportPathMap: function() {
        //     return {
        //         "/": { page: "/" }
        //     }
        // }
    })
)
