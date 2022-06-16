const baseUrl = "https://norma.nomoreparties.space/api";
const headers = { "Content-Type": "application/json" };

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
