import { Content, Image, Media, MediaContent, MediaLeft } from 'bloomer';
import bulmaCarousel from 'bulma-carousel';
import getConfig from 'next/config';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

class OffersCarousel extends React.PureComponent {
	async componentDidMount() {
		await bulmaCarousel.attach();
		console.log(this.props);
	}

	render() {
		return (
			<div
				className="carousel carousel-animated carousel-animate-fade"
				data-autoplay="true"
				data-delay="10000"
			>
				<div className="carousel-container">
					{this.props.offers.length &&
						this.props.offers.map((offer, index) => (
							<div
								className="carousel-item has-background"
								key={index}
							>
								<Media>
									<MediaLeft>
										{offer.image && (
											<Image
												className="bg-image"
												src={`${
													publicRuntimeConfig.imagehandler
												}/256x256/${offer.image}`}
											/>
										)}
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
							width: 100%;
							background-size: cover;
							background-position: center center;
						}
					`}
				</style>
			</div>
		);
	}
}

export default OffersCarousel;
