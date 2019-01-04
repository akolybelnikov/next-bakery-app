import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import MobileFooter from "../components/MobileFooter";
import { currentUser } from "../lib/awsAuth";
import Fonts from "../lib/fonts";
import "../styles/index.scss";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    email: null,
    isAuthenticated: false
  };

  async componentDidMount() {
    const authUser = await currentUser();
    if (authUser) {
      this.setCurrentUser(authUser.attributes.email, true)
    }
    await Fonts();
  }

  setCurrentUser = (email, isAuthenticated) => {
    this.setState({email: email, isAuthenticated: isAuthenticated});
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Все Булочки Тут</title>
        </Head>
        <div className="container">
          <Header
            {...pageProps}
            isAuthenticated={this.state.isAuthenticated}
            email={this.state.email}
          />
          <Component {...pageProps} setCurrentUser={this.setCurrentUser} />
          <MobileFooter
            {...pageProps}
            isAuthenticated={this.state.isAuthenticated}
          />
        </div>
        <style jsx global>
          {`
            .custom_body {
              color: #331507;
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
              font-family: "Raleway";
              font-display: auto;
            }
            .container {
              position: relative;
            }
          `}
        </style>
      </Container>
    );
  }
}

export default MyApp;
