import React from 'react'
import withData from '../withData'
import { Section } from 'bloomer'

class Products extends React.PureComponent {
    render() {
        return (
            <Section>
                <p>Assortment</p>
            </Section>
        )
    }
}

export default withData(Products)