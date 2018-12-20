const { parsed: localEnv } = require("dotenv").config()
const webpack = require("webpack")
const sass = require("@zeit/next-sass")
const css = require("@zeit/next-css")
const analyze = require("@zeit/next-bundle-analyzer")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
    distDir: "build",
    webpack: config => {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        config.node = {
            fs: "empty"
        }

        config.module.rules.push(
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "raw-loader"
            },
            {
                test: /\.css$/,
                use: ["postcss-loader"]
            }
        )

        if (config.mode === "production") {
            if (Array.isArray(config.optimization.minimizer)) {
                config.optimization.minimizer.push(
                    new OptimizeCSSAssetsPlugin({})
                )
            }
        }

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
    exportPathMap: function() {
        return {
            "/": { page: "/" },
            "/user": { page: "/user" },
            "/authenticate": { page: "/authenticate" },
            "/contact": { page: "/contact" },
            "/offers": { page: "/offers" },
            "/products": { page: "/products" }
        }
    }
}

module.exports = withPlugins(
    [
        css,
        sass,
        [
            analyze,
            {
                analyzeServer: ["server", "both"].includes(
                    process.env.BUNDLE_ANALYZE
                ),
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
                }
            }
        ]
    ],
    nextConfig
)
