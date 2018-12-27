import { Auth } from 'aws-amplify';
import { Button, Card, CardContent, CardFooter, CardFooterItem, Column, Columns, Container, Control, Field, Icon, Label } from 'bloomer';
import { Form, Text } from 'informed';
import React from 'react';
import { email_invalid, email_regex, handleError, lower, lower_invalid, minMaxLength, minMaxLength_invalid, number, number_invalid, password_missing, special, special_invalid, upper, upper_invalid } from '../../lib/awsAuth';
import ErrorNotification from '../ErrorNotification';

const CustomizedSignUp = props => {
    console.log(props)
  const validateEmail = value => {
    return !value || !email_regex.test(value) ? email_invalid : null
  }

  const validatePassword = value => {
    return [
      validateNotNull(value),
      validateLength(value),
      validateLower(value),
      validateNumber(value),
      validateUpper(value),
      validateSpecial(value),
    ]
  }

  const validateNotNull = value => {
    return !value ? <p>{password_missing}</p> : null
  }

  const validateLength = value => {
    return !minMaxLength.test(value) ? <p>{minMaxLength_invalid}</p> : null
  }

  const validateLower = value => {
    return !lower.test(value) ? <p>{lower_invalid}</p> : null
  }

  const validateUpper = value => {
    return !upper.test(value) ? <p>{upper_invalid}</p> : null
  }

  const validateNumber = value => {
    return !number.test(value) ? <p>{number_invalid}</p> : null
  }

  const validateSpecial = value => {
    return !special.test(value) ? <p>{special_invalid}</p> : null
  }

  const handleSignUp = async formState => {
    props.setError(null)
    if (formState.values.email && formState.values.password) {
      try {
        await Auth.signUp(
          formState.values.email.trim(),
          formState.values.password.trim(),
        )
        props.onStateChange('signedUp')
      } catch (e) {
        console.error(e)
        const error = handleError(e.code)
        props.setError(error)
      }
    }
  }

  const dismiss = () => props.setError(null)

  const {
    authState,
    onStateChange,
    attribute,
    onAttributeToggle,
    error,
  } = props
  return (
    <React.Fragment>
      {authState === 'signUp' && (
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
          }}>
          <Columns style={{ margin: '0 auto' }}>
            <Column>
              <Form>
                {({ formState }) => (
                  <Card>
                    {error && (
                      <ErrorNotification
                        notification={error}
                        dismiss={dismiss}
                      />
                    )}
                    <CardContent>
                      <Field>
                        <Label htmlFor='state-email'>Адрес эл. почты</Label>
                        <Control>
                          <Text
                            validate={validateEmail}
                            validateOnBlur
                            field='email'
                            id='email'
                            placeholder='Введите свой адрес эл.почты'
                            className='input'
                          />
                        </Control>
                        <p className='has-text-left is-size-7-mobile has-text-primary form-error'>
                          {formState.errors.email && formState.errors.email}
                        </p>
                      </Field>
                      <Field>
                        <Label htmlFor='state-password'>Пароль</Label>
                        <Control className='has-icons-right'>
                          <Text
                            validate={validatePassword}
                            validateOnBlur
                            type={attribute}
                            field='password'
                            id='state-password'
                            placeholder='password'
                            className='input'
                          />
                          <span
                            onClick={onAttributeToggle}
                            className='icon has-text-primary is-right'>
                            <Icon className='fas fa-eye' />
                          </span>
                        </Control>
                        <div className='has-text-left is-size-7-mobile has-text-primary'>
                          {formState.errors.password &&
                            formState.errors.password.map((error, index) => (
                              <React.Fragment key={index}>
                                {error}
                              </React.Fragment>
                            ))}
                        </div>
                      </Field>
                    </CardContent>
                    <CardFooter>
                      <CardFooterItem>
                        <Button
                          onClick={() => handleSignUp(formState)}
                          isFullWidth
                          isColor='primary'
                          type='submit'>
                          Зарегистрироваться
                        </Button>
                      </CardFooterItem>
                      <CardFooterItem>
                        <span>Зарегистрированы?</span>
                        <a
                          style={{
                            marginLeft: '10px',
                          }}
                          className='has-text-success'
                          onClick={() => onStateChange('signIn')}>
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
      )}
    </React.Fragment>
  )
}

export default CustomizedSignUp
