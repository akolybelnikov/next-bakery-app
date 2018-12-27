import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, Column, Columns, Container, Control, Field, Label } from 'bloomer';
import { Form, Text } from 'informed';
import { Mutation } from 'react-apollo';
import CREATE_USER from '../../graphql/mutations/user';
import { handleError, validateEmail } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

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

const ConfirmSignUp = props => {
  const confirmSignUp = async formState => {
    props.setNotification(null)

    if (formState.values.email && formState.values.code) {
      try {
        await Auth.confirmSignUp(
          formState.values.email.trim(),
          formState.values.code.trim(),
          {
            forceAliasCreation: 'true',
          },
        )
        props.mutate({
          variables: {
            input: {
              id: this.state.currentUser.username,
              email: this.state.currentUser.attributes.email,
            },
          },
        })
        if (props.loading) {
          return <LoadingScreen />
        }
        if (props.error) return <ErrorScreen />
        setTimeout(() => props.onStateChange('signIn'), 500)
        return <SuccessScreen />
      } catch (e) {
		  console.log(e)
        const error = handleError(e.code)
        props.setNotification(error)
      }
    }
  }

  const resendCode = async formState => {
    props.setNotification(null)

    if (formState.values.email) {
      try {
        await Auth.resendSignUp(formState.values.email.trim())
        props.setNotification('Код подтверждения выслан на Ваш адрес эл. почты')
      } catch (e) {
        const error = handleError(e.code)
        props.setNotification(error)
      }
    }
  }

  const dismiss = () => props.setNotification(null)

  const { authState, onStateChange, error } = props

  return (
    <React.Fragment>
      {error && <ErrorNotification notification={error} dismiss={dismiss} />}

      {(authState === 'confirmSignUp' || authState === 'signedUp') && (
        <Container>
          <Columns
            style={{
              margin: '0 auto',
              maxWidth: '100%',
              padding: '35px 0 50px 0',
            }}>
            <Column isSize={{ mobile: 12, tablet: 8 }} isOffset={{ tablet: 2 }}>
              <div
                className='is-size-7-mobile'
                style={{ marginBottom: '24px' }}>
                <span className='subtitle'>Подтвердить регистрацию</span>
              </div>
              <Form>
                {({ formState }) => (
                  <Card>
                    <CardContent>
                      <Field>
                        <Label htmlFor='username'>Адрес эл. почты</Label>
                        <Control>
                          <Text
                            required
                            field='email'
                            id='email'
                            placeholder='Введите свой адрес эл.почты'
                            className='input'
                            validate={validateEmail}
                            validateOnBlur
                          />
                        </Control>
                        <p className='has-text-left is-size-7 has-text-primary'>
                          {formState.errors.email && formState.errors.email}
                        </p>
                      </Field>
                      <Field>
                        <Label htmlFor='code'>Код подтверждения</Label>
                        <Control
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}>
                          <Text
                            required
                            type='text'
                            field='code'
                            id='code'
                            placeholder='Введите код'
                            className='input'
                          />
                        </Control>
                      </Field>
                      <Field>
                        <span>Код утерян? </span>
                        <a
                          style={{
                            marginLeft: '10px',
                          }}
                          onClick={() => resendCode(formState)}>
                          Выслать повторно
                        </a>
                      </Field>
                    </CardContent>
                    <CardFooter style={{ flexWrap: 'wrap' }}>
                      <CardFooterItem>
                        <Button
                          isFullWidth
                          isColor='primary'
                          type='submit'
                          onClick={() => confirmSignUp(formState)}>
                          Подтвердить
                        </Button>
                      </CardFooterItem>
                      <CardFooterItem>
                        <a
                          role='button'
                          style={{
                            marginLeft: '10px',
                          }}
                          onClick={() => onStateChange('signIn')}>
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
  )
}

const CustomizedConfirmSignUp = withMutation(ConfirmSignUp)

export default CustomizedConfirmSignUp
