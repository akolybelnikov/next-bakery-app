import { SignUp } from "aws-amplify-react"
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
    Label
} from "bloomer"
import { Form, Text } from "informed"
import React from "react"

export class CustomizedSignUp extends SignUp {
    constructor(props) {
        super(props)
        this._validAuthStates = ["signUp", "signedOut"]
    }

    signUp = () => {
        super.signUp()
        console.log(this.props)
    }

    showComponent() {
        console.log(this.props)
        return (
            <Container style={{ paddingTop: "8rem" }}>
                <Columns style={{ margin: "0 auto" }}>
                    <Column
                        isSize={{ mobile: 12, tablet: 6, desktop: 4 }}
                        isOffset={{ tablet: 3, desktop: 4 }}>
                        <Form>
                            <Card>
                                <CardContent>
                                    <Field>
                                        <Label htmlFor="email">
                                            Адрес эл. почты
                                        </Label>
                                        <Control>
                                            <Text
                                                key="email"
                                                name="email"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                type="text"
                                                placeholder="Адрес эл. почты"
                                                className="input"
                                            />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label htmlFor="password">Пароль</Label>
                                        <Control>
                                            <Text
                                                key="password"
                                                name="password"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                type="password"
                                                placeholder="******************"
                                                className="input"
                                            />
                                        </Control>
                                    </Field>
                                </CardContent>
                                <CardFooter>
                                    <CardFooterItem>
                                        <Field>
                                            <Button
                                                isFullWidth
                                                isColor="primary"
                                                type="button"
                                                onClick={this.signUp}>
                                                Зарегистрироваться
                                            </Button>
                                        </Field>
                                    </CardFooterItem>
                                    <CardFooterItem>
                                        <Field>
                                            <span>
                                                Зарегистрированы?
                                                <a
                                                    style={{
                                                        marginLeft: "10px"
                                                    }}
                                                    className="has-text-success"
                                                    onClick={() =>
                                                        super.changeState(
                                                            "signIn"
                                                        )
                                                    }>
                                                    Войти
                                                </a>
                                            </span>
                                        </Field>
                                    </CardFooterItem>
                                </CardFooter>
                            </Card>
                        </Form>
                    </Column>
                </Columns>
            </Container>
        )
    }
}
