const baseUrl = "https://norma.nomoreparties.space/api";

export const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiResponse = () => {
  return fetch(`${baseUrl}/ingredients`)
    .then(getResponseData)
    .catch(getResponseData);
};

/* const sendRequest = (method, body, url) => {
  return fetch(`${url}`, {
    method: method,
    body: body,
    headers: headers,
  }).then(getResponseData);
};

export const getApiOrder = (ids) => {
  const body = JSON.stringify({ ingredients: ids });
  console.log(body);
  return sendRequest("POST", body, `${baseUrl}/orders`);
}; */

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