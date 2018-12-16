import App, { Container } from "next/app"
import Head from "next/head"
import React from "react"

import Header from "../components/Header"
import { currentUser } from "../lib/awsAuth"
import "../styles/_bulma.scss"

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    state = {
        username: null,
        isAuthenticated: false
    }

    async componentDidMount() {
        const authUser = await currentUser()
        if (authUser) {
            console.log(userData)
            this.setCurrentUser(authUser.sub, true)
        }
    }

    setCurrentUser = (username, authenticated) => {
        this.setState({
            username: username,
            isAuthenticated: authenticated
        })
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
                    <Header
                        {...pageProps}
                        username={this.state.username}
                        isAuthenticated={this.state.isAuthenticated}
                    />
                    <Component {...pageProps} />
                </div>
                <style jsx global>
                    {`
                        @media all and (min-width: 600px) {
                            html {
                                padding-top: 4.25rem;
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
