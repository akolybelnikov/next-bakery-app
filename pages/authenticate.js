import React from "react"
import withData from "../withData"
import { Section } from "bloomer"
import { Authenticator } from "aws-amplify-react"
import "../node_modules/@aws-amplify/ui/dist/style.css"

class Authenticate extends React.PureComponent {
    render() {
        return (
            <Section>
                <Authenticator />
            </Section>
        )
    }
}

export default withData(Authenticate)
