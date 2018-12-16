import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class Offers extends React.PureComponent {
    render() {
        return (
            <Section>
                <p>Offers</p>
            </Section>
        )
    }
}

export default withData(Offers)