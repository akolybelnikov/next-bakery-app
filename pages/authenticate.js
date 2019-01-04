import { I18n } from '@aws-amplify/core';
import { Authenticator, ForgotPassword, RequireNewPassword, VerifyContact } from 'aws-amplify-react';
import { Container } from 'bloomer';
import Router from 'next/router';
import { Query } from 'react-apollo';
import CustomizedConfirmSignUp from '../components/AWS/ConfirmSignUp';
import CustomizedSignIn from '../components/AWS/SignIn';
import CustomizedSignUp from '../components/AWS/SignUp';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorScreen from '../components/ErrorScreen';
import LoadingScreen from '../components/LoadingScreen';
import SuccessScreen from '../components/SuccessScreen';
import GET_USER from '../graphql/queries/user';
import { currentUser, dict, map } from '../lib/awsAuth';
import { AwsTheme } from '../styles/utils';
import withData from '../withData';



class Authenticate extends React.PureComponent {
  state = {
    currentUser: null,
    error: null,
    attribute: 'password',
  }
  componentDidMount() {
    I18n.setLanguage('ru')
    I18n.putVocabularies(dict)
  }

  onStateChange = async authState => {
    if (authState === 'signedIn') {
      const authUser = await currentUser()
      if (authUser) {
        this.setState({ currentUser: authUser })
        this.props.setCurrentUser(authUser.attributes.email, true)
      }
    }
  }

  setNotification = error => {
    this.setState({ error: error })
  }

  onAttributeToggle = () => {
    this.state.attribute === 'password'
      ? this.setState({ attribute: 'text' })
      : this.setState({ attribute: 'password' })
  }

  render() {
    const { currentUser } = this.state
    return (
      <ErrorBoundary>
        <Container style={{ paddingTop: '1rem' }}>
          <Authenticator
            hideDefault={true}
            theme={AwsTheme}
            authState='signUp'
            errorMessage={map}
            onStateChange={this.onStateChange}>
            <CustomizedSignIn
              setNotification={this.setNotification}
              attribute={this.state.attribute}
              onAttributeToggle={this.onAttributeToggle}
              error={this.state.error}
            />
            <ForgotPassword />
            <RequireNewPassword />
            <VerifyContact />
            <CustomizedConfirmSignUp
              setNotification={this.setNotification}
              error={this.state.error}
            />
            <CustomizedSignUp
              setNotification={this.setNotification}
              attribute={this.state.attribute}
              onAttributeToggle={this.onAttributeToggle}
              error={this.state.error}
            />
          </Authenticator>
          {currentUser && (
            <Query
              query={GET_USER}
              variables={{ email: this.state.currentUser.attributes.email }}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <LoadingScreen />
                }
                if (error) return <ErrorScreen />
                setTimeout(() => Router.push('/'), 500)
                return <SuccessScreen />
              }}
            </Query>
          )}
        </Container>
      </ErrorBoundary>
    )
  }
}

export default withData(Authenticate)
