import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class Contact extends React.PureComponent {
    render() {
        return (
            <Section>
                <p>Contact</p>
            </Section>
        )
    }
}

export default withData(Contact)