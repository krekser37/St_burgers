import { TIngredientsResponse, TAuth, TOrdersResponse} from "../services/types/types";
import { getCookie } from "./cookie";

const baseUrl = "https://norma.nomoreparties.space/api";
export const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
export const wsUrlOwner = 'wss://norma.nomoreparties.space/orders';

export const getResponseData = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiResponse = () => {
  return fetch(`${baseUrl}/ingredients`)
    .then(res=>getResponseData<TIngredientsResponse>(res))
};

export const getApiOrder = (ids:Array<string>) => {
  return fetch(`${baseUrl}/orders`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "POST",
      body: JSON.stringify({ ingredients: ids }),
    })
      .then(res=>getResponseData<TOrdersResponse>(res))
};

export const getApiForgotPassword = (emailValue:string) => {
  return fetch(`${baseUrl}/password-reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email: emailValue }),
    })
      .then(getResponseData)
};

export const getApiResetPassword = (password: string, token: number) => {
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
export const postApiRegistration = (name: string, email: string, password: string) => {
  return fetch(`${baseUrl}/auth/register`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then(res=>getResponseData<TAuth>(res))
};

//обновление данных о пользователе
export const patchApiRegistration = async (name: string, email: string, password: string) => {
  return fetch(`${baseUrl}/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "PATCH",
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then(res=>getResponseData<TAuth>(res))
};

//авторизация
export const postApiAutorisation = async (email:string, password: string) => {
  return fetch(`${baseUrl}/auth/login`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: 'Bearer ' + getCookie('token'),
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password}),
    })
      .then(res=>getResponseData<TAuth>(res))
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
      .then(res=>getResponseData<TAuth>(res))
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
      .then(res=>getResponseData<TAuth>(res))
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
      .then(res=>getResponseData<TAuth>(res))
}; 
