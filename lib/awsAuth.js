import { Auth } from 'aws-amplify'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export async function currentUser() {
  try {
    const info = await Auth.currentUserInfo()
    if (info && info.attributes.sub !== publicRuntimeConfig.defaultUsername) {
      return info
    }
    return null
  } catch (e) {
    console.error(e)
  }
}

export const dict = {
  ru: {
    'Back to Sign In': 'Вход пользователя',
    'Reset your password': 'Сменить пароль',
    'Username cannot be empty': 'Введите свой адрес эл. почты',
    Username: 'Адрес эл. почты',
    'Enter your username': 'Введите свой адрес эл. почты',
    'Send Code': 'Выслать код',
    'Sign in to your account': 'Вход пользователя',
    Password: 'Пароль',
    'Enter your password': 'Введите свой пароль',
    'Forget your password? ': 'Забыли пароль? ',
    'Reset password': 'Сброс пароля',
    'Sign In': 'Войти',
    'No account? ': 'Нет профиля? ',
    'Create account': 'Зарегистрироваться',
    'Create a new account': 'Зарегистрировать пользователя',
    'Create a username': 'Введите свой адрес эл. почты',
    Email: 'Адрес Электронной Почты',
    'Phone Number': 'Номер телефона',
    'Create Account': 'Создать профиль',
    'Have an account? ': 'Зарегистрированы?  ',
    'Sign in': 'Войти',
    'Confirm Sign Up': 'Подтвердить регистрацию',
    'Confirmation Code': 'Код подтверждения',
    'Enter your code': 'Введите код',
    'Lost your code? ': 'Код утерян? ',
    'Resend Code': 'Выслать повторно',
    Confirm: 'Подтвердить',
    'Invalid verification code provided, please try again.':
      'Неверный код подтверждения, попробуйте ещё раз.',
    'Incorrect username or password': 'Неверный адрес эл. почты или пароль',
    'Username/client id combination not found.':
      'Адрес эл. почты не найден в базе данных.',
    Code: 'Код',
    'New Password': 'Новый пароль',
    'The following fields need to be filled out: Username, Password, Email, Phone Number':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль, Номер телефона',
    'The following fields need to be filled out: Username, Password, Email':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль',
    'The following fields need to be filled out: Username, Password':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль',
    'The following fields need to be filled out: Username, Email':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты',
    'The following fields need to be filled out: Email':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты',
    'The following fields need to be filled out: Username':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты',
    'The following fields need to be filled out: Password':
      'Необходимо заполнить следующие поля: Пароль',
    'The following fields need to be filled out: Phone Number':
      'Необходимо заполнить следующие поля: Номер телефона',
    'The following fields need to be filled out: Email, Phone Number':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты, Номер телефона',
    'The following fields need to be filled out: Password, Email, Phone Number':
      'Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль, Номер телефона',
    'Username should be an email.':
      'Введите действительный адрес электронной почты.',
    'User email should be empty or same as username, since username attribute is email.':
      'Адрес электронной почты пользователя должен совпадать',
    'An account with the given email already exists.':
      'Пользователь с таким адресом эл. почты уже существует',
    'Password did not conform with policy: Password must have uppercase characters':
      'Пароль должен включать не менее одной заглавной буквы',
    'Password did not conform with policy: Password not long enough':
      'Пароль должен состоять из не менее чем 8 знаков',
    'Password did not conform with policy: Password must have numeric characters':
      'Пароль должен содержать цифры',
    'Password did not conform with policy: Password must have symbol characters':
      'Пароль не соответствует политике: пароль должен содержать символы',
    'Account recovery requires verified contact information':
      'Восстановление профиля требует подтвержденной контактной информации',
    Verify: 'Подтвердить',
    'Verify Contact': 'Подтвердить контактные данные',
    Skip: 'В другой раз',
    Submit: 'Отправить',
    'Sign Out': 'Выйдти',
    'User does not exist.': 'Пользователь не существует.',
    'null failed with error Generate callenges lambda cannot be called..':
      'Неверный пароль',
  },
}

export const map = message => {
  if (/incorrect.*username.*password/i.test(message)) {
    return 'Неверный адрес эл. почты или пароль'
  }

  if (/invalid.*phone/i.test(message)) {
    return 'Неверный формат номера телефона. Пожалуйста, используйте формат номера телефона +12345678900'
  }

  if (/user.*already.*exist/i.test(message)) {
    return 'Пользователь с таким адресом эл. почты уже существует'
  }

  if (/validation.*password/i.test(message)) {
    return 'Пароль не соответствует требованиям: не менее 8 знаков, включая заглавные буквы, цифры и специальные знаки'
  }

  return message
}

export function handleError(code) {
  switch (code) {
    case 'UsernameExistsException':
      return 'Пользователь с указанным адресом электронной почты уже существует.'
      break
    case 'NotAuthorizedException':
      return 'Неверное имя пользователя или пароль.'
      break
    case 'UserNotFoundException':
      return 'Пользователь не существует.'
      break
    case 'InvalidPasswordException':
      return 'Введите действительный пароль'
      break
    case 'InvalidParameterException':
      return 'Введённые данные недействительны'
      break
    default:
      return 'Произошла ошибка и мы не смогли получить ваши данные ... Печально.'
  }
}

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const minMaxLength = /^[\s\S]{8,32}$/,
  upper = /[A-Z]/,
  lower = /[a-z]/,
  number = /[0-9]/,
  special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
  email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const email_invalid = 'Введите действительный адрес электронной почты',
  minMaxLength_invalid = 'Пароль должен быть длинной не менее восьми знаков',
  upper_invalid = 'Пароль должен содержать не менее 1 заглавной буквы',
  lower_invalid = 'Пароль должен содержать не менее 1 строчной буквы',
  number_invalid = 'Пароль должен содержать не менее 1 цифры',
  special_invalid =
    'Пароль должен содержать не менее 1 специального символа (!, @, #, $, %, ^, &)',
  password_missing = 'Введите действительный пароль'
