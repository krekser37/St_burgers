import { getCookie } from "./cookie";

const baseUrl = "https://norma.nomoreparties.space/api";

export const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiResponse = () => {
  return fetch(`${baseUrl}/ingredients`)
    .then(getResponseData)
    .catch(getResponseData);
};

export const getApiOrder = (ids) => {
  return fetch(`${baseUrl}/orders`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ ingredients: ids }),
    })
      .then(getResponseData)
      .catch(getResponseData)
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
      .catch(getResponseData)
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
      .catch(getResponseData)
};

//регистрация
export const getApiRegistration= (email, password, name) => {
  return fetch(`${baseUrl}/auth/register`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password,  name: name}),
    })
      .then(getResponseData)
      .catch(getResponseData)
};

//авторизация
export const postApiAutorisation= (email, password) => {
  return fetch(`${baseUrl}/auth/login`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password}),
    })
      .then(getResponseData)
      .catch(getResponseData)
};

//получение данных пользователя 
export const getApiUser= () => {
  return fetch(`${baseUrl}/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // Отправляем токен и схему авторизации в заголовке при запросе данных
        Authorization: 'Bearer ' + getCookie('token')
      },
      method: "GET",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
      .catch(getResponseData)
};

//выход пользователя
export const postApiLogout= (refreshToken) => {
  return fetch(`${baseUrl}/auth/logout`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: refreshToken
    }),
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
      .catch(getResponseData)
}; 