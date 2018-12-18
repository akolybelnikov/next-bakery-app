import bulmaCarousel from 'bulma-carousel'
import {Icon} from 'bloomer'

class Offers extends React.PureComponent {

    componentDidMount() {
        bulmaCarousel.attach()
    }

    render() {
        return (
            <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true" data-delay="10000">
                <div className='carousel-container'>
                    <div className='carousel-item has-background is-active'>
                        <div className="title">Merry Christmas</div>
                    </div>
                    <div className='carousel-item has-background'>

                        <div className="title">Original Gift: Offer a song with</div>
                    </div>
                    <div className='carousel-item has-background'>

                        <div className="title">Sushi time</div>
                    </div>
                    <div className='carousel-item has-background'>

                        <div className="title">Life</div>
                    </div>
                </div>
                <div className="carousel-navigation is-overlay">
                    <div className="carousel-nav-left">
                        <Icon className="fas fa-chevron-left" aria-hidden="true"/>
                    </div>
                    <div className="carousel-nav-right">
                        <Icon className="fas fa-chevron-right" aria-hidden="true"/>
                    </div>
                </div>
                <style jsx>
                    {`
                        div.carousel-container {
                            min-height: 200px;
                        }
                    `}
                </style>n
            </div>
        )
    }
}

export default Offers