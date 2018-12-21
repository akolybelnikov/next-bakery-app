import { SignUp } from 'aws-amplify-react';
import { Button, Column, Columns, Container, Control, Field, Input, Label } from 'bloomer';
import React from 'react';

export class CustomizedSignUp extends SignUp {
	constructor(props) {
		super(props);
		this._validAuthStates = ['signUp', 'signedOut'];
	}

	signUp = () => {
        super.signUp();
        console.log(this.props)
	};

	showComponent() {
        console.log(this.props)
		return (
			<Container style={{ paddingTop: '8rem' }}>
				<Columns style={{ margin: '0 auto' }}>
					<Column isSize={{ mobile: 12, tablet: 6, desktop: 4 }} isOffset={{tablet: 3, desktop: 4}}>
						<form>
							<Field>
								<Label htmlFor="username">Имя пользователя</Label>
								<Control>
									<Input
										key="username"
										name="username"
										onChange={this.handleInputChange}
										type="text"
										placeholder="Имя пользователя"
									/>
								</Control>
							</Field>
							<Field>
								<Label htmlFor="email">Адрес эл. почты</Label>
								<Control>
									<Input
										key="email"
										name="email"
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
								<Button
									isFullWidth
									isColor="primary"
									type="button"
									onClick={this.signUp}
								>
									Зарегистрироваться
								</Button>
							</Field>
							<Field>
								<span>
									Есть профиль?
									<a
										style={{ marginLeft: '10px' }}
										className="has-text-success"
										onClick={() =>
											super.changeState('signIn')
										}
									>
										Войти
									</a>
								</span>
							</Field>
						</form>
					</Column>
				</Columns>
			</Container>
		);
	}
}
