import React, { Fragment } from "react"
import withData from "../withData"
import { Query } from "react-apollo"

import LIST_OFFERS from "../graphql/queries/offers"
import { Section } from "bloomer"

class Index extends React.Component {
    render() {
        return <Section />
    }
}

const Offers = () => {
    return (
        <Query
            query={LIST_OFFERS}
            fetchPolicy="cache-and-network"
            errorPolicy="all">
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return null
                if (data) {
                    return (
                        <Fragment>
                            {data.listOffers.items.length &&
                                data.listOffers.items.map(offer => (
                                    <p key={offer.id}>{offer.content}</p>
                                ))}
                        </Fragment>
                    )
                }
            }}
        </Query>
    )
}

export default withData(Index)
