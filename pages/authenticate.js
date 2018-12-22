import { I18n } from "@aws-amplify/core";
import { Authenticator, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from "aws-amplify-react";
import { Container } from "bloomer";
import React from "react";
import { dict } from "../lib/awsAuth";
import { UserContext } from "../lib/contexts";
import { AwsTheme } from "../styles/utils";
import withData from "../withData";

class Authenticate extends React.PureComponent {
    componentDidMount() {
        I18n.setLanguage("ru")
        I18n.putVocabularies(dict)
    }

    onStateChange = authState => {
        console.log(authState)
    }

    map = message => {
        if (/incorrect.*username.*password/i.test(message)) {
            return "Неверный адрес эл. почты или пароль"
        }

        if (/invalid.*phone/i.test(message)) {
            return "Неверный формат номера телефона. Пожалуйста, используйте формат номера телефона +12345678900"
        }

        if (/user.*already.*exist/i.test(message)) {
            return "Пользователь с таким адресом эл. почты уже существует"
        }

        if (/validation.*password/i.test(message)) {
            return "Пароль не соответствует требованиям: не менее 8 знаков, включая заглавные буквы, цифры и специальные знаки"
        }

        return message
    }

    render() {
        return (
            <UserContext.Provider value={this.props.authState}>
                <Container style={{ paddingTop: "1rem" }}>
                    <Authenticator
                        hideDefault={true}
                        theme={AwsTheme}
                        authState="signUp"
                        errorMessage={this.map}
                        onStateChange={this.onStateChange}>
                        <SignIn />
                        <SignUp />
                        <ForgotPassword />
                        <RequireNewPassword />
                        <VerifyContact />
                        <ConfirmSignUp />
                    </Authenticator>
                </Container>
            </UserContext.Provider>
        )
    }
}

export default withData(Authenticate)
