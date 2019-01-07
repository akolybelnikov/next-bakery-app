import React, { Fragment } from "react"
import ProgressiveImage from "react-progressive-image"

export default ({ src, alt, className, placeholder }) => (
    <ProgressiveImage src={src} placeholder={placeholder}>
        {(currentSrc, loading) => (
            <Fragment>
                <img
                    src={currentSrc}
                    alt={alt}
                    className={loading ? `${className} loading-img` : className}
                />
                <noscript>
                    <img src={src} alt={alt} className={className} />
                </noscript>
                <style jsx>
                    {`
                        @media screen and (min-width: 600px) {
                            img {
                                min-width: 100%;
                            }
                        }
                        img {
                            opacity: 1;
                            transition: opacity 0.25s ease-in;
                        }
                        img.loading-progressive-image {
                            opacity: 0.5;
                        }
                    `}
                </style>
            </Fragment>
        )}
    </ProgressiveImage>
)
