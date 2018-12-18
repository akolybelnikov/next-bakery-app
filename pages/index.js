import React, { Fragment } from "react"
import withData from "../withData"
import { Query } from "react-apollo"

import LIST_OFFERS from "../graphql/queries/offers"
import {Section, Media, MediaLeft, MediaContent, Image, Content} from 'bloomer'
import Offers from '../components/Offers'

class Index extends React.Component {
    render() {
        return <Fragment><Offers offers={'offers'}/></Fragment>
    }
}

const OffersData = () => {
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
                                data.listOffers.items.map((offer, index) => (
                                    <Media key={index}>
                                        <MediaLeft>
                                            <Image isSize="128x128" src={offer.image}/>
                                        </MediaLeft>
                                        <MediaContent>
                                            <Content>
                                                <p>{offer.content}</p>
                                            </Content>
                                        </MediaContent>
                                    </Media>
                                ))}
                        </Fragment>
                    )
                }
            }}
        </Query>
    )
}

export default withData(Index)
