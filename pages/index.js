import React, { Fragment } from "react"
import withData from "../withData"
import bulmaCarousel from 'bulma-carousel'
import OffersCarousel from '../components/Offers'

class Index extends React.Component {

    componentDidMount() {
        bulmaCarousel.attach()
    }
    
    render() {
        return <Fragment><OffersCarousel {...this.props} /></Fragment>
    }
}

export default withData(Index)
