import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, Column, Columns, Container, Control, Field, Icon, Label } from 'bloomer';
import { Form, Text } from 'informed';
import { handleError } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

const CustomizedSignIn = props => {
	const signIn = async formState => {
		props.setNotification(null);

		if (formState.values.email && formState.values.password) {
			try {
				await Auth.signIn(
					formState.values.email.trim(),
					formState.values.password.trim(),
				);
				props.onStateChange('signedIn');
			} catch (e) {
				if (e.code === 'UserNotConfirmedException') {
					props.onStateChange('confirmSignUp');
				} else {
					const error = handleError(e.code);
					props.setNotification(error);
				}
			}
		}
	};

	const dismiss = () => props.setNotification(null);

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
			{(authState === 'signIn' || authState === 'signedOut') && (
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
								style={{ marginBottom: '24px' }}
							>
								<h4 className="subtitle has-text-info">
									Вход пользователя
								</h4>
							</div>
							<Form>
								{({ formState }) => (
									<Card>
										<CardContent>
											<Field>
												<Label htmlFor="username">
													Адрес эл. почты
												</Label>
												<Control>
													<Text
														field="email"
														id="email"
														placeholder="Введите свой адрес эл.почты"
														className="input"
													/>
												</Control>
											</Field>
											<Field>
												<Label htmlFor="password">
													Пароль
												</Label>
												<Control
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<Text
														type={attribute}
														field="password"
														id="password"
														placeholder="Введите свой пароль"
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
											</Field>
											<Field>
												<span>Пароль утерян? </span>
												<a
													style={{
														marginLeft: '10px',
													}}
													onClick={() =>
														onStateChange(
															'forgotPassword',
														)
													}
												>
													Запросить новый пароль
												</a>
											</Field>
										</CardContent>
										<CardFooter
											style={{ flexWrap: 'wrap' }}
										>
											<CardFooterItem>
												<Button
													isFullWidth
													isColor="primary"
													type="submit"
													onClick={() =>
														signIn(formState)
													}
												>
													Войти
												</Button>
											</CardFooterItem>
											<CardFooterItem>
												<span>Нет профиля?</span>
												<a
													style={{
														marginLeft: '10px',
													}}
													onClick={() =>
														onStateChange('signUp')
													}
												>
													Зарегистрироваться
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

export default CustomizedSignIn;
