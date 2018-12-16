import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        return (
            <Section>
                <p>
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </Section>
        )
    }
}

export default withData(Error)
