import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class Authenticate extends React.PureComponent {
    render() {
        return (
            <Section>
                <p>Authenticate</p>
            </Section>
        )
    }
}

export default withData(Authenticate)
