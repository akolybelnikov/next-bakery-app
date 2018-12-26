import {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardFooterItem,
    Column,
    Columns,
    Container,
    Control,
    Field,
    Label,
    Icon
} from "bloomer"
import React from "react"
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    EMAIL_INVALID_ERROR,
    PASSWORD_INVALID_ERROR,
    handleError
} from "../../lib/awsAuth"
import { Auth } from "aws-amplify"
import { Form, Text } from "informed"

class CustomizedSignUp extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    state = {
        busy: false,
        error: null,
        authState: "signUp"
    }

    validateEmail = value => {
        return !value || !EMAIL_REGEX.test(value) ? EMAIL_INVALID_ERROR : null
    }

    validatePassword = value => {
        return !value || !PASSWORD_REGEX.test(value)
            ? PASSWORD_INVALID_ERROR
            : null
    }

    handleSignUp = async values => {
        if (values.email && values.password) {
            try {
                const signup = await Auth.signUp(
                    values.email.trim(),
                    values.password.trim()
                )
                console.info(signup)
            } catch (e) {
                console.warn(e)
                this.setState({
                    error: handleError(e.code)
                })
            }
        }
    }

    render() {
        console.log(this.props)
        return (
            <Container style={{ paddingTop: "8rem" }}>
                <Columns style={{ margin: "0 auto" }}>
                    <Column
                        isSize={{ mobile: 12, tablet: 6, desktop: 4 }}
                        isOffset={{ tablet: 3, desktop: 4 }}>
                        <Form onSubmit={this.handleSignUp}>
                            {({ formState }) => (
                                <Card>
                                    <CardContent>
                                        <Field>
                                            <Label htmlFor="state-email">
                                                Адрес эл. почты
                                            </Label>
                                            <Control>
                                                <Text
                                                    validate={
                                                        this.validateEmail
                                                    }
                                                    validateOnBlur
                                                    field="email"
                                                    id="state-email"
                                                    placeholder="email"
                                                    className="input"
                                                />
                                            </Control>
                                            <p className="has-text-left is-size-7-mobile has-text-warning form-error">
                                                {formState.errors.email &&
                                                    formState.errors.email}
                                            </p>
                                        </Field>
                                        <Field>
                                            <Label htmlFor="state-password">
                                                Пароль
                                            </Label>
                                            <p
                                                className="has-text-left is-size-7-mobile has-text-info form-error"
                                                htmlFor="state-password">
                                                Пароль должен содержать:
                                                <br />- не менее 1 строчной
                                                буквы
                                                <br />- не менее 1 заглавной
                                                буквы
                                                <br />
                                                - не менее 1 цифры
                                                <br />- не менее 1 специального
                                                символа (!, @, #, $, %, ^, &)
                                                <br />и быть длинной не менее
                                                восьми знаков
                                            </p>
                                            <Control className="has-icons-right">
                                                <Text
                                                    validate={
                                                        this.validatePassword
                                                    }
                                                    validateOnBlur
                                                    type={this.props.attribute}
                                                    field="password"
                                                    id="state-password"
                                                    placeholder="password"
                                                    className="input"
                                                />
                                                <span
                                                    onClick={
                                                        this.props
                                                            .onAttributeToggle
                                                    }
                                                    className="icon has-text-primary is-right">
                                                    <Icon className="fas fa-eye" />
                                                </span>
                                            </Control>
                                            <p className="has-text-left is-size-7-mobile has-text-warning">
                                                {formState.errors.password &&
                                                    formState.errors.password}
                                            </p>
                                        </Field>
                                    </CardContent>
                                    <CardFooter>
                                        <CardFooterItem>
                                            <Button
                                                isFullWidth
                                                isColor="primary"
                                                type="submit">
                                                Зарегистрироваться
                                            </Button>
                                        </CardFooterItem>
                                        <CardFooterItem>
                                            <span>Зарегистрированы?</span>
                                            <a
                                                style={{
                                                    marginLeft: "10px"
                                                }}
                                                className="has-text-success"
                                                onClick={() =>
                                                    this.props.onStateChange("signIn")
                                                }>
                                                Войти
                                            </a>
                                        </CardFooterItem>
                                    </CardFooter>
                                </Card>
                            )}
                        </Form>
                    </Column>
                </Columns>
                <style jsx>{`
                    .form-error {
                        min-height: 10px;
                    }
                    .fas .fa-eye {
                        pointer-events: all;
                        cursor: pointer;
                    }
                `}</style>
            </Container>
        )
    }
}

export default CustomizedSignUp
