import React from 'react';
import withData from '../withData';
import { Section } from 'bloomer';
import { Authenticator } from 'aws-amplify-react';

class Authenticate extends React.PureComponent {
	render() {
		return (
			<Section>
				<Authenticator />
			</Section>
		);
	}
}

export default withData(Authenticate);
