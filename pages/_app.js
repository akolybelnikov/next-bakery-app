import App, { Container } from "next/app"
import Head from "next/head"
import React from "react"
import MediaQuery from "react-responsive"
import "../styles/_bulma.scss"

import Header from "../components/Header"

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <title>My page title</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <div className="container">
                    <Header />
                    <Component {...pageProps} />
                </div>
                <style jsx global>
                    {`
                        @media all and (min-width: 600px) {
                            html {
                                padding-top: 3.25rem;
                            }
                        }
                        @media all and (max-width: 599px) {
                            html {
                                padding-top: 2.25rem;
                            }
                        }
                    `}
                </style>
            </Container>
        )
    }
}

export default MyApp
