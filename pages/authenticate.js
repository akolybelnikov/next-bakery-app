import { I18n } from '@aws-amplify/core';
import { Authenticator, ForgotPassword, RequireNewPassword, VerifyContact } from 'aws-amplify-react';
import { Container } from 'bloomer';
import Router from 'next/router';
import { Mutation, Query } from 'react-apollo';
import CustomizedConfirmSignUp from '../components/AWS/ConfirmSignUp';
import CustomizedSignIn from '../components/AWS/SignIn';
import CustomizedSignUp from '../components/AWS/SignUp';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorScreen from '../components/ErrorScreen';
import LoadingScreen from '../components/LoadingScreen';
import SuccessScreen from '../components/SuccessScreen';
import CREATE_USER from '../graphql/mutations/user';
import GET_USER from '../graphql/queries/user';
import { currentUser, dict, map } from '../lib/awsAuth';
import { AwsTheme } from '../styles/utils';
import withData from '../withData';

const withMutation = Component => {
	return function MutationHOC(props) {
		return (
			<Mutation mutation={CREATE_USER}>
				{(mutate, state) => (
					<Component
						{...props}
						mutate={mutate}
						loading={state.loading}
						error={state.error}
					/>
				)}
			</Mutation>
		);
	};
};

class AWS_Auth extends React.PureComponent {
	state = {
		currentUser: null,
		error: null,
		attribute: 'password',
	};
	componentDidMount() {
		I18n.setLanguage('ru');
		I18n.putVocabularies(dict);
	}

	onStateChange = async authState => {
		if (authState === 'signedIn') {
			const authUser = await currentUser();
			if (authUser) {
				this.setState({ currentUser: authUser });
				this.props.setCurrentUser(authUser.attributes.email, true);
			}
		}
	};

	setError = error => {
		this.setState({ error: error });
	};

	onAttributeToggle = () => {
		this.state.attribute === 'password'
			? this.setState({ attribute: 'text' })
			: this.setState({ attribute: 'password' });
	};

	render() {
		const { mutate } = this.props;
		const { currentUser } = this.state;
		return (
			<ErrorBoundary>
				<Container style={{ paddingTop: '1rem' }}>
					<Authenticator
						hideDefault={true}
						theme={AwsTheme}
						authState="signUp"
						errorMessage={map}
						onStateChange={this.onStateChange}
					>
						<CustomizedSignIn
							setError={this.setError}
							attribute={this.state.attribute}
							onAttributeToggle={this.onAttributeToggle}
							error={this.state.error}
						/>
						<ForgotPassword />
						<RequireNewPassword />
						<VerifyContact />
						<CustomizedConfirmSignUp
							setError={this.setError}
							error={this.state.error}
						/>
						<CustomizedSignUp
							setError={this.setError}
							attribute={this.state.attribute}
							onAttributeToggle={this.onAttributeToggle}
							error={this.state.error}
						/>
					</Authenticator>
					{this.state.currentUser && (
						<Query
							query={GET_USER}
							variables={{ id: this.state.currentUser.username }}
						>
							{({ loading, error, data }) => {
								if (loading) {
									return <LoadingScreen />;
								}
								if (error) return <ErrorScreen />;
								if (!data.getUser) {
									mutate({
										variables: {
											input: {
												id: currentUser.username,
												email:
													currentUser.attributes
														.email,
											},
										},
									});
									if (this.props.loading) {
										return <LoadingScreen />;
									}
									if (this.props.error)
										return <ErrorScreen />;
									setTimeout(() => Router.push('/'), 500);
									return <SuccessScreen />;
								}
								setTimeout(() => Router.push('/'), 500);
								return <SuccessScreen />;
							}}
						</Query>
					)}
				</Container>
			</ErrorBoundary>
		);
	}
}

const Authenticate = withMutation(AWS_Auth);

export default withData(Authenticate);
