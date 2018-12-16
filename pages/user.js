import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class UserProfile extends React.PureComponent {
    render() {
        return (
            <Section>
                <p>Hello world!</p>
            </Section>
        )
    }
}

export default withData(UserProfile)