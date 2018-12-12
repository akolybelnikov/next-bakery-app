import React, { Fragment } from "react"
import styled from "styled-components"
import withData from "../withData"
import { graphql } from "react-apollo"
import { Query } from "react-apollo"
import { LIST_OFFERS } from "../graphql/queries/offers"

const Title = styled.h1`
    line-height: 1.5rem;
`

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <Title className="example has-text-primary">My page</Title>
                <div className="has-text-success is-size-5">
                    <Offers />
                </div>
            </Fragment>
        )
    }
}

const AppWithData = graphql(LIST_OFFERS, {
    options: {
        fetchPolicy: "cache-first",
        errorPolicy: "all"
    },
    props: props => ({
        offers: props.data.listOffers ? props.data.listOffers.items : []
    })
})(Index)

const Offers = () => {
    return (
        <Query query={LIST_OFFERS} fetchPolicy="cache-and-network" errorPolicy="all">
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

export default withData(AppWithData)
