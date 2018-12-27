import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, Column, Columns, Container, Control, Field, Icon, Label } from 'bloomer';
import { Form, Text } from 'informed';
import React from 'react';
import { handleError, validateEmail, validatePassword } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

const CustomizedSignUp = props => {
	const handleSignUp = async formState => {
		props.setError(null);
		if (
			formState.values.email &&
			formState.values.password &&
			!formState.errors.email &&
			formState.errors.password.findIndex(error => error !== null) === -1
		) {
			try {
				await Auth.signUp(
					formState.values.email.trim(),
					formState.values.password.trim(),
				);
				props.onStateChange('signedUp');
			} catch (e) {
				const error = handleError(e.code);
				props.setError(error);
			}
		}
	};

	const dismiss = () => props.setError(null);

	const onGoToSignIn = () => {
		props.setError(null);
		onStateChange('signIn')
	};

	const {
		authState,
		onStateChange,
		attribute,
		onAttributeToggle,
		error,
	} = props;
	return (
		<React.Fragment>
			{error && (
				<ErrorNotification notification={error} dismiss={dismiss} />
			)}
			{authState === 'signUp' && (
				<Container>
					<Columns
						style={{
							margin: '0 auto',
							maxWidth: '100%',
							padding: '35px 0 50px 0',
						}}
					>
						<Column
							isSize={{ mobile: 12, tablet: 8 }}
							isOffset={{ tablet: 2 }}
						>
							<div
								className="is-size-7-mobile"
								style={{ marginBottom: '24px' }}
							>
								<span className="subtitle">
									Регистрация нового пользователя
								</span>
							</div>
							<Form>
								{({ formState }) => (
									<Card>
										<CardContent>
											<Field>
												<Label htmlFor="state-email">
													Адрес эл. почты
												</Label>
												<Control>
													<Text
														validate={validateEmail}
														validateOnBlur
														field="email"
														id="email"
														placeholder="Введите свой адрес эл.почты"
														className="input"
													/>
												</Control>
												<p className="has-text-left is-size-7 has-text-primary">
													{formState.errors.email &&
														formState.errors.email}
												</p>
											</Field>
											<Field>
												<Label htmlFor="state-password">
													Пароль
												</Label>
												<Control
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<Text
														validate={
															validatePassword
														}
														validateOnBlur
														validateOnChange
														type={attribute}
														field="password"
														id="password"
														placeholder="Введите пароль"
														className="input"
													/>
													<Icon
														onClick={
															onAttributeToggle
														}
														style={{
															cursor: 'pointer',
															margin:
																'0 0 0 10px',
														}}
														className="fas fa-eye has-text-primary"
													/>
												</Control>
												<div
													style={{
														maxWidth: '100%',
														wordBreak: 'break-word',
														whiteSpace: 'pre-wrap',
													}}
													className="has-text-left is-size-7 has-text-primary"
												>
													{formState.errors
														.password &&
														formState.errors.password.map(
															(error, index) => (
																<React.Fragment
																	key={index}
																>
																	{error}
																</React.Fragment>
															),
														)}
												</div>
											</Field>
										</CardContent>
										<CardFooter
											style={{ flexWrap: 'wrap' }}
										>
											<CardFooterItem>
												<Button
													onClick={() =>
														handleSignUp(formState)
													}
													isFullWidth
													isColor="primary"
													type="submit"
												>
													Зарегистрироваться
												</Button>
											</CardFooterItem>
											<CardFooterItem>
												<span>Зарегистрированы?</span>
												<a
													style={{
														marginLeft: '10px',
													}}
													onClick={() =>
														onGoToSignIn()
													}
												>
													Войти
												</a>
											</CardFooterItem>
										</CardFooter>
									</Card>
								)}
							</Form>
						</Column>
					</Columns>
				</Container>
			)}
		</React.Fragment>
	);
};

export default CustomizedSignUp;
