import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderTitle, Control, Field, Icon, Label } from 'bloomer';
import { Form, Text } from 'informed';
import { currentUser, handleError } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

const CustomizedSignIn = props => {
  const {
    authState,
    onStateChange,
    attribute,
    onAttributeToggle,
    setNotification,
    error,
  } = props

  const signIn = async formState => {
    setNotification(null)

    if (formState.values.email && formState.values.password) {
      try {
        await Auth.signIn(
          formState.values.email.trim(),
          formState.values.password.trim(),
        )
        const authUser = await currentUser()
        if (!authUser.attributes.email_verified) {
          onStateChange('verifyContact')
        } else {
          onStateChange('signedIn')
        }
      } catch (e) {
        if (e.code === 'UserNotConfirmedException') {
          setNotification(
            'Подтвердите свой адрес эл. почты с помощью высланного Вам кода',
          )
          onStateChange('confirmSignUp')
        } else {
          const error = handleError(e.code)
          setNotification(error)
        }
      }
    }
  }

  const dismiss = () => setNotification(null)

  return (
    <React.Fragment>
      {error && <ErrorNotification notification={error} dismiss={dismiss} />}
      {(authState === 'signIn' || authState === 'signedOut') && (
        <Form>
          {({ formState }) => {
            return (
              <Card>
                <CardHeader>
                  <CardHeaderTitle>Вход пользователя</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Field>
                    <Label htmlFor='email'>Адрес эл. почты</Label>
                    <Control>
                      <Text
                        field='email'
                        id='email'
                        placeholder='Введите свой адрес эл.почты'
                        className='input'
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label htmlFor='password'>Пароль</Label>
                    <Control
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                      <Text
                        type={attribute}
                        field='password'
                        id='password'
                        placeholder='Введите свой пароль'
                        className='input'
                      />
                      <Icon
                        onClick={onAttributeToggle}
                        style={{
                          cursor: 'pointer',
                          margin: '0 0 0 10px',
                        }}
                        className='fas fa-eye has-text-primary'
                      />
                    </Control>
                  </Field>
                  <Field>
                    <span>Пароль утерян? </span>
                    <a
                      style={{
                        marginLeft: '10px',
                      }}
                      onClick={() => onStateChange('forgotPassword')}>
                      Запросить новый пароль
                    </a>
                  </Field>
                </CardContent>
                <CardFooter style={{ flexWrap: 'wrap' }}>
                  <CardFooterItem>
                    <Button
                      isFullWidth
                      isColor='primary'
                      type='submit'
                      onClick={() => signIn(formState)}>
                      Войти
                    </Button>
                  </CardFooterItem>
                  <CardFooterItem>
                    <span>Нет профиля?</span>
                    <a
                      style={{
                        marginLeft: '10px',
                      }}
                      onClick={() => onStateChange('signUp')}>
                      Зарегистрироваться
                    </a>
                  </CardFooterItem>
                </CardFooter>
              </Card>
            )
          }}
        </Form>
      )}
    </React.Fragment>
  )
}

export default CustomizedSignIn
