import { I18n } from "@aws-amplify/core";
import { Authenticator, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from "aws-amplify-react";
import { Container } from "bloomer";
import Router from "next/router";
import React from "react";
import { dict, map } from "../lib/awsAuth";
import { AwsTheme } from "../styles/utils";
import withData from "../withData";

class Authenticate extends React.PureComponent {
  componentDidMount() {
    I18n.setLanguage("ru");
    I18n.putVocabularies(dict);
  }

  onStateChange = authState => {
    console.log(authState);
    switch (authState) {
      case "signedIn":
        Router.push("/home");
        break;
    }
  };

  render() {
    return (
      <Container style={{ paddingTop: "1rem" }}>
        <Authenticator
          hideDefault={true}
          theme={AwsTheme}
          authState="signIn"
          errorMessage={map}
          onStateChange={this.onStateChange}
        >
          <SignIn />
          <SignUp />
          <ForgotPassword />
          <RequireNewPassword />
          <VerifyContact />
          <ConfirmSignUp />
        </Authenticator>
      </Container>
    );
  }
}

export default withData(Authenticate);
