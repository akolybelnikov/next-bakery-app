import { Card, CardContent, CardImage } from "bloomer";
import getConfig from "next/config";
import React from "react";
import { Default, Handset, SmallHandset } from "../styles/utils";
import Image from "./Image";

const { publicRuntimeConfig } = getConfig()

const OffersCarousel = ({ offers }) => {
    return (
        <div
            className="carousel carousel-animated carousel-animate-fade"
            data-autoplay="true"
            data-delay="10000">
            <div className="carousel-container">
                {offers.length &&
                    offers.map((offer, index) => (
                        <div
                            className="carousel-item has-background"
                            key={index}>
                            <Card>
                                <CardContent>
                                    <p>{offer.content}</p>
                                </CardContent>
                                <CardImage>
                                    {offer.image && (
                                        <React.Fragment>
                                            <SmallHandset>
                                                <figure className="image">
                                                    <Image
                                                        className="progressive-image"
                                                        src={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/256x256/${
                                                            offer.image
                                                        }`}
                                                        placeholder={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/15x15/${offer.image}`}
                                                        alt="offer image"
                                                    />
                                                </figure>
                                            </SmallHandset>
                                            <Handset>
                                                <figure className="image">
                                                    <Image
                                                        className="progressive-image"
                                                        src={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/720x720/${
                                                            offer.image
                                                        }`}
                                                        placeholder={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/15x15/${offer.image}`}
                                                        alt="offer image"
                                                    />
                                                </figure>
                                            </Handset>
                                            <Default>
                                                <figure
                                                    className="image is-4by3"
                                                    style={{ width: "256px" }}>
                                                    <Image
                                                        className="progressive-image"
                                                        src={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/528x528/${
                                                            offer.image
                                                        }`}
                                                        placeholder={`${
                                                            publicRuntimeConfig.imagehandler
                                                        }/15x15/${offer.image}`}
                                                        alt="offer image"
                                                    />
                                                </figure>
                                            </Default>
                                        </React.Fragment>
                                    )}
                                </CardImage>
                            </Card>
                        </div>
                    ))}
            </div>
            <style jsx>
                {`
                    div {
                        padding-top: 2.25rem;
                    }
                    .image {
                        transition: all 1.5s linear;
                        width: 100%;
                    }
                    img {
                        opacity: 1;
                        transition: opacity 0.25s ease-in;
                    }
                    img.loading-progressive-image {
                        opacity: 0.5;
					}
					.carousel-container {
						min-height: 100vh;
					}
                `}
            </style>
        </div>
    )
}

export default OffersCarousel
