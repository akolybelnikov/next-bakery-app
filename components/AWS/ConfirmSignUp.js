import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, Column, Columns, Container, Control, Field, Label } from 'bloomer';
import { Form, Text } from 'informed';
import { handleError, validateEmail } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

const CustomizedConfirmSignUp = props => {
	const confirmSignUp = async formState => {
		props.setError(null);

		if (formState.values.email && formState.values.code) {
            try {
                await Auth.confirmSignUp(
                    formState.values.email.trim(),
                    formState.values.code.trim(),
                    {
                        forceAliasCreation: 'true',
                    },
                );
                props.onStateChange('signIn');
            } catch (e) {
                const error = handleError(e.code);
                props.setError(error);
            }
        }
	};

	const resendCode = async formState => {
		props.setError(null);

		if (formState.values.email) {
			try {
				await Auth.resendSignUp(formState.values.email.trim());
				props.setError(
					'Код подтверждения выслан на Ваш адрес эл. почты',
				);
			} catch (e) {
				const error = handleError(e.code);
				props.setError(error);
			}
		}
	};

	const dismiss = () => props.setError(null);

	const { authState, onStateChange, error } = props;

	return (
		<React.Fragment>
			{error && (
				<ErrorNotification notification={error} dismiss={dismiss} />
			)}
			{authState === 'confirmSignUp' && (
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
									Подтвердить регистрацию
								</span>
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
														required
														field="email"
														id="email"
														placeholder="Введите свой адрес эл.почты"
														className="input"
														validate={validateEmail}
														validateOnBlur
													/>
												</Control>
												<p className="has-text-left is-size-7 has-text-primary">
													{formState.errors.email &&
														formState.errors.email}
												</p>
											</Field>
											<Field>
												<Label htmlFor="code">
													Код подтверждения
												</Label>
												<Control
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<Text
														required
														type="text"
														field="code"
														id="code"
														placeholder="Введите код"
														className="input"
													/>
												</Control>
											</Field>
											<Field>
												<span>Код утерян? </span>
												<a
													style={{
														marginLeft: '10px',
													}}
													onClick={() =>
														resendCode(formState)
													}
												>
													Выслать повторно
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
														confirmSignUp(formState)
													}
												>
													Подтвердить
												</Button>
											</CardFooterItem>
											<CardFooterItem>
												<a
													role="button"
													style={{
														marginLeft: '10px',
													}}
													onClick={() =>
														onStateChange('signIn')
													}
												>
													Вход пользователя
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

export default CustomizedConfirmSignUp;
