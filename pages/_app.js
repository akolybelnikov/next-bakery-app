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
    username: null,
    isAuthenticated: false
  };

  async componentDidMount() {
    const authUser = await currentUser();
    if (authUser) {
      this.setCurrentUser(authUser.attributes.email, true);
    }
    await Fonts();
  }

  setCurrentUser = (username, authenticated) => {
    this.setState({
      username: username,
      isAuthenticated: authenticated
    });
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
            username={this.state.username}
          />
          <Component {...pageProps} />
          <MobileFooter
            {...pageProps}
          />
        </div>
        <style jsx global>
          {`
            .custom_body {
              color: #331507;
            }
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
