import getConfig from "next/config"
import React from "react"
import { Default, Handset, SmallHandset } from "../styles/utils"
import Image from "./Image"
import { Carousel, CarouselTitle, CarouselItem } from "./Carousel"

const { publicRuntimeConfig } = getConfig()

const OffersCarousel = ({ offers }) => {
    return (
        <div className="carousel-container">
            <Carousel autoplay="true" delay="10000">
                {offers.length &&
                    offers.map((offer, index) => (
                        <CarouselItem key={index}>
                            <CarouselTitle>{offer.content}</CarouselTitle>
                            {offer.image && (
                                <React.Fragment>
                                    <SmallHandset>
                                        <Image
                                            style={{ minWidth: "100%" }}
                                            className="progressive-image is-background"
                                            src={`${
                                                publicRuntimeConfig.imagehandler
                                            }/256x256/${offer.image}`}
                                            placeholder={`${
                                                publicRuntimeConfig.imagehandler
                                            }/15x15/${offer.image}`}
                                            alt="offer image"
                                        />
                                    </SmallHandset>
                                    <Handset>
                                        <Image
                                            style={{ minWidth: "100%" }}
                                            className="progressive-image is-background"
                                            src={`${
                                                publicRuntimeConfig.imagehandler
                                            }/720x720/${offer.image}`}
                                            placeholder={`${
                                                publicRuntimeConfig.imagehandler
                                            }/15x15/${offer.image}`}
                                            alt="offer image"
                                        />
                                    </Handset>
                                    <Default>
                                        <Image
                                            style={{ minWidth: "100%" }}
                                            className="progressive-image"
                                            src={`${
                                                publicRuntimeConfig.imagehandler
                                            }/1400x1400/${offer.image}`}
                                            placeholder={`${
                                                publicRuntimeConfig.imagehandler
                                            }/15x15/${offer.image}`}
                                            alt="offer image"
                                        />
                                    </Default>
                                </React.Fragment>
                            )}
                        </CarouselItem>
                    ))}
            </Carousel>
            <style jsx>
                {`
                    .carousel-container {
                        padding-top: 3.25rem;
                    }
                `}
            </style>
        </div>
    )
}

export default OffersCarousel
