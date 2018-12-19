import bulmaCarousel from "bulma-carousel"
import React, { Fragment } from "react"
import { compose, graphql } from "react-apollo"
import OffersCarousel from "../components/OffersCarousel"
import LIST_OFFERS from "../graphql/queries/offers"
import withData from "../withData"

class Index extends React.Component {
    componentDidMount() {
        bulmaCarousel.attach()
    }

    render() {
        return (
            <Fragment>
                <OffersCarousel offers={this.props.offers} />
            </Fragment>
        )
    }
}

const Home = compose(
    graphql(LIST_OFFERS, {
        options: {
            fetchPolicy: "cache-and-network",
            errorPolicy: "all"
        },
        props: props => ({
            offers: props.data.listOffers ? props.data.listOffers.items : []
        })
    })
)(Index)

export default withData(Home)
