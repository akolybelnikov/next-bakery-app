import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileFooter from '../components/MobileFooter'
import { currentUser } from '../lib/awsAuth'
import Fonts from '../lib/fonts'
import '../styles/index.scss'
import { NonTouch, Touch } from '../styles/utils'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    email: null,
    isAuthenticated: false,
    currentProduct: null
  }

  async componentDidMount() {
    const authUser = await currentUser()
    if (authUser) {
      this.setCurrentUser(authUser.attributes.email, true)
    }
    await Fonts()
  }

  setCurrentUser = (email, isAuthenticated) => {
    this.setState({ email: email, isAuthenticated: isAuthenticated })
  }

  setProduct = (product) => {
    this.setState({ currentProduct: product })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Все Булочки Тут</title>
        </Head>
        <div className='container'>
          <Header
            {...pageProps}
            isAuthenticated={this.state.isAuthenticated}
            email={this.state.email}
          />
          <Component
            {...pageProps}
            setCurrentUser={this.setCurrentUser}
            isAuthenticated={this.state.isAuthenticated}
            email={this.state.email}
            currentProduct={this.state.currentProduct}
            setProduct={this.setProduct}
          />
          <Touch>
            <MobileFooter
              {...pageProps}
              isAuthenticated={this.state.isAuthenticated}
            />
          </Touch>
          <NonTouch>
            <Footer />
          </NonTouch>
        </div>
        <style jsx global>
          {`
            .custom_body {
              color: #331507;
              font-family: 'Raleway';
            }
            html {
              padding-top: 7.25rem;
            }
            @media screen and (max-width: 599px) {
              html {
                padding-top: 5.25rem;
              }
            }
            @font-face {
              font-display: auto;
              font-family: 'Raleway';
            }
            .container {
              position: relative;
            }
          `}
        </style>
      </Container>
    )
  }
}

export default MyApp
