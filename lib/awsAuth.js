import getConfig from "next/config"
import { Auth } from "aws-amplify"

const { publicRuntimeConfig } = getConfig()

export async function currentUser() {
    try {
        const info = await Auth.currentUserInfo()
        if (
            info &&
            info.attributes.sub !== publicRuntimeConfig.defaultUsername
        ) {
            return info
        }
        return null
    } catch (e) {
        console.error(e)
    }
}

export const dict = {
    ru: {
        "Back to Sign In": "Вход пользователя",
        "Reset your password": "Сменить пароль",
        "Username cannot be empty": "Введите Ваш адрес эл. почты",
        Username: "Адрес эл. почты",
        "Enter your username": "Введите Ваш адрес эл. почты",
        "Send Code": "Выслать код",
        "Sign in to your account": "Вход пользователя",
        Password: "Пароль",
        "Enter your password": "Введите свой пароль",
        "Forget your password? ": "Забыли пароль? ",
        "Reset password": "Сброс пароля",
        "Sign In": "Войти",
        "No account? ": "Нет профиля? ",
        "Create account": "Зарегистрироваться",
        "Create a new account": "Зарегистрировать пользователя",
        "Create a username": "Введите свой адрес эл. почты",
        Email: "Адрес Электронной Почты",
        "Phone Number": "Номер телефона",
        "Create Account": "Создать профиль",
        "Have an account? ": "Уже регистрировались? ",
        "Sign in": "Войти",
        "Confirm Sign Up": "Подтвердить регистрацию",
        "Confirmation Code": "Код подтверждения",
        "Enter your code": "Введите код",
        "Lost your code? ": "Код утерян? ",
        "Resend Code": "Выслать повторно",
        Confirm: "Подтвердить",
        "Invalid verification code provided, please try again.":
            "Неверный код подтверждения, попробуйте ещё раз.",
        "Incorrect username or password": "Неверный адрес эл. почты или пароль",
        "Username/client id combination not found.":
            "Адрес эл. почты не найден в базе данных.",
        Code: "Код",
        "New Password": "Новый пароль",
        "The following fields need to be filled out: Username, Password, Email, Phone Number":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль, Номер телефона",
        "The following fields need to be filled out: Username, Password, Email":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль",
        "The following fields need to be filled out: Username, Password":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль",
        "The following fields need to be filled out: Username, Email":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты",
        "The following fields need to be filled out: Email":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты",
        "The following fields need to be filled out: Username":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты",
        "The following fields need to be filled out: Password":
            "Необходимо заполнить следующие поля: Пароль",
        "The following fields need to be filled out: Phone Number":
            "Необходимо заполнить следующие поля: Номер телефона",
        "The following fields need to be filled out: Email, Phone Number":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты, Номер телефона",
        "The following fields need to be filled out: Password, Email, Phone Number":
            "Необходимо заполнить следующие поля: Адрес Электронной Почты, Пароль, Номер телефона",
        "Username should be an email.":
            "Введите действительный адрес электронной почты.",
        "User email should be empty or same as username, since username attribute is email.":
            "Адрес электронной почты пользователя должен совпадать",
        "An account with the given email already exists.":
            "Пользователь с таким адресом эл. почты уже существует",
        "Password did not conform with policy: Password must have uppercase characters":
            "Пароль должен включать не менее одной заглавной буквы",
        "Password did not conform with policy: Password not long enough":
            "Пароль должен состоять из не менее чем 8 знаков",
        "Password did not conform with policy: Password must have numeric characters":
            "Пароль должен содержать цифры",
        "Password did not conform with policy: Password must have symbol characters":
            "Пароль не соответствует политике: пароль должен содержать символы",
        "Account recovery requires verified contact information":
            "Восстановление профиля требует подтвержденной контактной информации",
        "Verify": "Подтвердить",
        "Verify Contact": "Подтвердить контактные данные",
        'Skip': "В другой раз",
        'Submit': "Отправить",
    }
}
