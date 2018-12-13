import App, { Container } from "next/app"
import React from "react"
import withData from "../withData"

import { maxMedia, minMedia } from "../styles/style-utils"
import styled from "styled-components"
import '../styles/index.scss'

import Header from "../components/Header"

const LayoutContainer = styled.div`
    ${minMedia.largehandset`padding-top: 6rem;`};
    ${maxMedia.largehandset`padding-top: 5.25rem;`};
    color: ${props => props.theme.info}!important;
`

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
        console.log(pageProps)
        return (
            <Container>
                <LayoutContainer className="container is-fluid">
                    <Header />
                    <Component {...pageProps} />
                </LayoutContainer>
            </Container>
        )
    }
}

export default withData(MyApp)
