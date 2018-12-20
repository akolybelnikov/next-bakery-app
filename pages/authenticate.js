import { Authenticator } from "aws-amplify-react";
import { Section } from "bloomer";
import React from "react";
import { AwsTheme } from "../styles/utils";
import withData from "../withData";
import "@aws-amplify/ui/dist/style.css"

class Authenticate extends React.PureComponent {
    render() {
        return (
            <Section>
                <Authenticator theme={AwsTheme} />
            </Section>
        )
    }
}

export default withData(Authenticate)
