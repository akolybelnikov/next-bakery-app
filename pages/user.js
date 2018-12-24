import { I18n } from "@aws-amplify/core";
import { Authenticator, Greetings } from "aws-amplify-react";
import { Section } from "bloomer";
import Router from "next/router";
import React from "react";
import SuccessScreen from "../components/SuccessScreen";
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
        this.props.setCurrentUser(null, false);
        setTimeout(() => Router.push("/"), 500);
        break;
      default:
        return null;
    }
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
          <Greetings
            inGreeting={() => null}
            outGreeting={() => <SuccessScreen />}
          />
          <AlwaysOn />
        </Authenticator>
      </Section>
    );
  }
}

export default withData(UserProfile);
