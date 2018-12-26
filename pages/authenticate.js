import { I18n } from "@aws-amplify/core"
import {
    Authenticator,
    ConfirmSignUp,
    ForgotPassword,
    Greetings,
    RequireNewPassword,
    SignIn,
    VerifyContact,
    SignUp
} from "aws-amplify-react"
import { Container } from "bloomer"
import Router from "next/router"
import { Mutation, Query } from "react-apollo"
import CustomizedSignUp from "../components/AWS/SignUp"
import ErrorBoundary from "../components/ErrorBoundary"
import ErrorScreen from "../components/ErrorScreen"
import LoadingScreen from "../components/LoadingScreen"
import SuccessScreen from "../components/SuccessScreen"
import CREATE_USER from "../graphql/mutations/user"
import GET_USER from "../graphql/queries/user"
import { currentUser, dict, map } from "../lib/awsAuth"
import { AwsTheme } from "../styles/utils"
import withData from "../withData"

const AlwaysOn = () => {
    return null
}

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
        )
    }
}

class AWS_Auth extends React.PureComponent {
    state = {
        authState: null,
        currentUser: null
    }
    componentDidMount() {
        I18n.setLanguage("ru")
        I18n.putVocabularies(dict)
    }

    onStateChange = async authState => {
        this.setState({ authState: authState })
        switch (authState) {
            case "signedIn":
                const authUser = await currentUser()
                if (authUser) {
                    this.setState({ currentUser: authUser })
                    this.props.setCurrentUser(authUser.attributes.email, true)
                }
                break
            default:
                return null
        }
    }

    render() {
        const { mutate } = this.props
        const { currentUser } = this.state
        return (
            <ErrorBoundary>
                <Container style={{ paddingTop: "1rem" }}>
                    <Authenticator
                        hideDefault={true}
                        theme={AwsTheme}
                        authState="signUp"
                        errorMessage={map}
                        onStateChange={this.onStateChange}>
                        <SignIn />
                        <CustomizedSignUp />
                        <ForgotPassword />
                        <RequireNewPassword />
                        <VerifyContact />
                        <ConfirmSignUp />
                        <Greetings />
                        <AlwaysOn />
                    </Authenticator>
                    {this.state.currentUser && (
                        <Query
                            query={GET_USER}
                            variables={{ id: this.state.currentUser.username }}>
                            {({ loading, error, data }) => {
                                if (loading) {
                                    return <LoadingScreen />
                                }
                                if (error) return <ErrorScreen />
                                if (!data.getUser) {
                                    mutate({
                                        variables: {
                                            input: {
                                                id: currentUser.username,
                                                email:
                                                    currentUser.attributes
                                                        .email,
                                                telephone:
                                                    currentUser.attributes
                                                        .phone_number
                                            }
                                        }
                                    })
                                    if (this.props.loading) {
                                        return <LoadingScreen />
                                    }
                                    if (this.props.error) return <ErrorScreen />
                                    setTimeout(() => Router.push("/"), 500)
                                    return <SuccessScreen />
                                }
                                setTimeout(() => Router.push("/"), 500)
                                return <SuccessScreen />
                            }}
                        </Query>
                    )}
                </Container>
            </ErrorBoundary>
        )
    }
}

const Authenticate = withMutation(AWS_Auth)

export default withData(Authenticate)
