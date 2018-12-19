
import React from 'react'
import withData from "../withData"
import { Query } from "react-apollo"

import LIST_OFFERS from "../graphql/queries/offers"
import { Media, MediaLeft, MediaContent, Content } from 'bloomer'

import ProgressiveImage from "react-progressive-bg-image"
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const OffersCarousel = () => {

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
                        <div className='carousel carousel-animated carousel-animate-fade' data-autoplay="true" data-delay="10000">
                            <div className='carousel-container'>
                                {data.listOffers.items.length &&
                                    data.listOffers.items.map((offer, index) => (
                                        <div className='carousel-item has-background' key={index}>
                                            <Media>
                                                <MediaLeft>
                                                    {offer.image && <figure className="image">
                                                        <ProgressiveImage
                                                            className="bg-image"
                                                            placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${offer.image}`}
                                                            src={`${publicRuntimeConfig.imagehandler}/256x256/${offer.image}`}
                                                            component="img" />
                                                    </figure>}
                                                </MediaLeft>
                                                <MediaContent>
                                                    <Content>
                                                        <p>{offer.content}</p>
                                                    </Content>
                                                </MediaContent>
                                            </Media>
                                        </div>
                                    ))}
                            </div>
                            <style jsx>
                                {`
                                        div {
                                            padding-top: 2.25rem;
                                        }
                                        .image .bg-image {
                                            height: auto;
                                            transition: all 1.5s linear;
                                            max-width: 100%;
                                            width: 100%;
                                            background-size: cover;
                                            background-position: center center;
                                        }
                                    `}
                            </style>
                        </div>
                    )
                }
            }}
        </Query>
    )
}

export default withData(OffersCarousel)