import { SignIn } from "aws-amplify-react"
import { Button, Column, Columns, Control, Field, Input, Label } from "bloomer"
import React from "react"

export class CustomizedSignIn extends SignIn {
    constructor(props) {
        super(props)
        this._validAuthStates = ["signIn", "signedOut", "signedUp"]
    }

    signIn = (e) => {
		super.signIn()
		console.log(e)
    }

    showComponent() {
        return (
            <Columns style={{ margin: "0 auto" }}>
                <Column
                    isSize={{ mobile: 12, tablet: 6, desktop: 4 }}
                    isOffset={{ tablet: 3, desktop: 4 }}>
                    <form>
                        <Field>
                            <Label htmlFor="username">Адрес эл. почты</Label>
                            <Control>
                                <Input
                                    key="username"
                                    name="username"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Адрес эл. почты"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label htmlFor="password">Пароль</Label>
                            <Control>
                                <Input
                                    key="password"
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="******************"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <span>
                                Пароль утерян?
                                <a
                                    style={{ marginLeft: "10px" }}
                                    className="has-text-success"
                                    onClick={() =>
                                        super.changeState("forgotPassword")
                                    }>
                                    Запросить новый пароль
                                </a>
                            </span>
                        </Field>
                        <Field>
                            <Button
                                isFullWidth
                                isColor="primary"
                                type="button"
                                onClick={this.signIn}>
                                Войти
                            </Button>
                        </Field>
                        <Field>
                            <span>
                                Нет профиля?
                                <a
                                    style={{ marginLeft: "10px" }}
                                    className="has-text-success"
                                    onClick={() => super.changeState("signUp")}>
                                    Создать профиль
                                </a>
                            </span>
                        </Field>
                    </form>
                </Column>
            </Columns>
        )
    }
}
