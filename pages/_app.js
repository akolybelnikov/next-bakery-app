import App, { Container } from 'next/app'
import React from 'react'
import { compose } from 'react-apollo'
import * as resolvers from '../graphql/resolvers/index'

import { Container } from 'bloomer'
import { maxMedia, minMedia } from '../styles/style-utils/'
import styled from 'styled-components'

import {Header} from '../components/Header'

const LayoutContainer = styled(Container)`
  ${minMedia.touch`padding-top: 5rem;`};
  ${maxMedia.touch`padding-top: 2.25rem;`};
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

        return (
            <Container>
                <LayoutContainer>
                    <Header />
                    <Component {...pageProps} />
                </LayoutContainer>
            </Container>
        )
    }
}

export default MyApp