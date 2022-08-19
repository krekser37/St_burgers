import { getCookie } from "./cookie";

const baseUrl = "https://norma.nomoreparties.space/api";

export const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiResponse = () => {
  return fetch(`${baseUrl}/ingredients`)
    .then(getResponseData)
};

export const getApiOrder = (ids) => {
  return fetch(`${baseUrl}/orders`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "POST",
      body: JSON.stringify({ ingredients: ids }),
    })
      .then(getResponseData)
};

export const getApiForgotPassword = (emailValue) => {
  return fetch(`${baseUrl}/password-reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email: emailValue }),
    })
      .then(getResponseData)
};

export const getApiResetPassword = (password, token) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ password: password,  token: token}),
    })
      .then(getResponseData)
};

//регистрация
export const postApiRegistration = async (name, email, password) => {
  return fetch(`${baseUrl}/auth/register`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then(getResponseData)
};

//обновление данных о пользователе
export const patchApiRegistration = async (name, email, password) => {
  return fetch(`${baseUrl}/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "PATCH",
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then(getResponseData)
};

//авторизация
export const postApiAutorisation = async (email, password) => {
  return fetch(`${baseUrl}/auth/login`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password}),
    })
      .then(getResponseData)
};

//получение данных пользователя 
export const getApiUser = async  () => {
  return fetch(`${baseUrl}/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // Отправляем токен и схему авторизации в заголовке при запросе данных
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "GET",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
};

//выход пользователя
export const postApiLogout= async () => {
  return fetch(`${baseUrl}/auth/logout`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
    }),
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
}; 

//обновление токена
export const postUpdateToken= async () => {
  return fetch(`${baseUrl}/auth/token`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
    }),
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
}; 
