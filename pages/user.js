import { I18n } from "@aws-amplify/core";
import { Authenticator, Greetings } from "aws-amplify-react";
import { Section } from "bloomer";
import Router from "next/router";
import React from "react";
import { dict, map } from "../lib/awsAuth";
import { AwsTheme } from "../styles/utils";
import withData from "../withData";

const AlwaysOn = () => {
  return null;
};

class UserProfile extends React.Component {
  componentDidMount() {
    I18n.setLanguage("ru");
    I18n.putVocabularies(dict);
  }

  onStateChange = authState => {
    console.log(authState);
    switch (authState) {
      case "signIn":
        Router.push("/home");
        break;
    }
  };

  getUserData = username => {
    console.log(username);
  };

  render() {
    return (
      <Section>
        <Authenticator
          theme={AwsTheme}
          errorMessage={map}
          hideDefault={true}
          onStateChange={this.onStateChange}
        >
          <Greetings inGreeting={username => this.getUserData(username)} />
          <AlwaysOn />
        </Authenticator>
      </Section>
    );
  }
}

export default withData(UserProfile);
