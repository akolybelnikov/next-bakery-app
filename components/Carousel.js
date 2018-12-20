import { SmallHandset, Handset, Default, theme } from '../styles/utils';
import { Card, CardHeader, CardHeaderTitle } from 'bloomer';

export const Carousel = ({ autoplay, delay, children }) => {
	return (
		<div
			className="carousel carousel-animated carousel-animate-fade"
			data-autoplay={autoplay}
			data-delay={delay}
		>
			<div className="carousel-container">{children}</div>
		</div>
	);
};

export const CarouselItem = ({ children }) => {
	return (
		<div className="carousel-item has-background">
			{children}{' '}
			<style jsx>
				{`
					@media screen and (min-width: 825px) {
						div {
							max-height: 40%;
							overflow: hidden;
						}
					}
				`}
			</style>
		</div>
	);
};

export const CarouselTitle = props => {
	return (
		<React.Fragment>
			<SmallHandset>
				<div className="title">
					{props.children}
					<style jsx>
						{`
							div {
								font-size: 1rem !important;
								line-height: 1.2;
								color: #fff;
								background: ${theme.infoShadow} !important;
								font-weight: 400;
								padding: 0.5em !important;
							}
						`}
					</style>
				</div>
			</SmallHandset>
			<Handset>
				<div className="title">
					{props.children}
					<style jsx>
						{`
							div {
								font-size: 1.25rem !important;
								line-height: 1.3;
								color: #fff;
								background: ${theme.infoShadow} !important;
								font-weight: 400;
								padding: 0.5em !important;
							}
						`}
					</style>
				</div>
			</Handset>
			<Default>
				<div className="title">
					{props.children}
					<style jsx>
						{`
							div {
								font-size: 1.5rem !important;
								line-height: 1.5;
								color: #fff;
								background: ${theme.infoShadow} !important;
								font-weight: 400;
								padding: 0.5em !important;
							}
						`}
					</style>
				</div>
			</Default>
		</React.Fragment>
	);
};
