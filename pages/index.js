import React, { Fragment } from 'react';
import withData from '../withData';
import { graphql, compose } from 'react-apollo';

import LIST_OFFERS from '../graphql/queries/offers';
import OffersCarousel from '../components/OffersCarousel';

class Index extends React.Component {
	render() {
		return (
			<Fragment>
				<OffersCarousel offers={this.props.offers} />
			</Fragment>
		);
	}
}

const Home = compose(
	graphql(LIST_OFFERS, {
		options: {
			fetchPolicy: 'cache-and-network',
			errorPolicy: 'all',
		},
		props: props => ({
			offers: props.data.listOffers ? props.data.listOffers.items : [],
		}),
	}),
)(Index);

export default withData(Home);
