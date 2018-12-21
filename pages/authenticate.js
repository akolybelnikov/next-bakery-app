import { Authenticator, ForgotPassword, RequireNewPassword, VerifyContact, ConfirmSignUp } from 'aws-amplify-react';
import React from 'react';
import { CustomizedSignIn } from '../components/AWS/SignIn';
import { CustomizedSignUp } from '../components/AWS/SignUp';
import { AwsTheme } from '../styles/utils';
import withData from '../withData';

class Authenticate extends React.PureComponent {
	render() {
		return (
			<Authenticator hideDefault={true} theme={AwsTheme}>
				<CustomizedSignIn />
				<CustomizedSignUp />
				<ForgotPassword />
				<RequireNewPassword />
				<VerifyContact />
				<ConfirmSignUp />
			</Authenticator>
		);
	}
}

export default withData(Authenticate);
