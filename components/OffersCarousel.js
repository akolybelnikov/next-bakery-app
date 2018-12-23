import getConfig from "next/config";
import React from "react";
import { Default, Handset, SmallHandset } from "../styles/utils";
import { Carousel, CarouselItem, CarouselTitle } from "./Carousel";
import Image from "./Image";

const { publicRuntimeConfig } = getConfig();

const OffersCarousel = ({ offers }) => {
  return (
    <div className="component-container">
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
                      src={`${publicRuntimeConfig.imagehandler}/640x640/${
                        offer.image
                      }`}
                      placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                        offer.image
                      }`}
                      alt="offer image"
                    />
                  </SmallHandset>
                  <Handset>
                    <Image
                      style={{ minWidth: "100%" }}
                      className="progressive-image is-background"
                      src={`${publicRuntimeConfig.imagehandler}/980x980/${
                        offer.image
                      }`}
                      placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                        offer.image
                      }`}
                      alt="offer image"
                    />
                  </Handset>
                  <Default>
                    <Image
                      style={{ minWidth: "100%" }}
                      className="progressive-image is-background"
                      src={`${publicRuntimeConfig.imagehandler}/1440x1440/${
                        offer.image
                      }`}
                      placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                        offer.image
                      }`}
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
          .component-container {
            padding-top: 3.25rem;
          }
          @media screen and (min-width: 1024px) {
            .component-container {
              padding-top: 5.25rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OffersCarousel;
