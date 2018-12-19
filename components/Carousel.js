import { SmallHandset, Handset, Default, theme } from "../styles/utils"

export const Carousel = ({ autoplay, delay, children }) => {
    return (
        <div
            className="carousel carousel-animated carousel-animate-fade"
            data-autoplay={autoplay}
            data-delay={delay}>
            <div className="carousel-container">{children}</div>
        </div>
    )
}

export const CarouselItem = ({ autoplay, delay, children }) => {
    return (
        <div className="carousel-item has-background">
            {children}{" "}
            <style jsx>
                {`
                    @media screen and (min-width: 600px) {
                        div {
                            max-height: 40%;
                            overflow: hidden
                        }
                    }
                `}
            </style>
        </div>
    )
}

export const CarouselTitle = props => {
    return (
        <React.Fragment>
            <SmallHandset>
                <div style={{ padding: "1em .5em" }} className="title">
                    {props.children}
                    <style jsx>
                        {`
                            div {
                                font-size: 1rem !important;
                                line-height: 1.2;
                                color: ${theme.primary};
                            }
                        `}
                    </style>
                </div>
            </SmallHandset>
            <Handset>
                <div style={{ padding: "1em .5em" }} className="title">
                    {props.children}
                    <style jsx>
                        {`
                            div {
                                font-size: 1.25rem !important;
                                line-height: 1.3;
                                color: ${theme.primary};
                            }
                        `}
                    </style>
                </div>
            </Handset>
            <Default>
                <div style={{ padding: "1em .5em" }} className="title">
                    {props.children}
                    <style jsx>
                        {`
                            div {
                                font-size: 1.5rem !important;
                                line-height: 1.5;
                                color: ${theme.primary};
                            }
                        `}
                    </style>
                </div>
            </Default>
        </React.Fragment>
    )
}
