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

const sendRequest = (method, body = null, url = baseUrl) => {
  return fetch(`${url}`, {
    method: method,
    body: body,
    headers: headers,
  }).then(getResponseData);
};

export const getApiOrder = (orderIngredients) => {
  const ids = orderIngredients.map((ingredient) => ingredient._id);
  const body = JSON.stringify({ orderIngredients: ids });
  return sendRequest("POST", body, `${baseUrl}/orders`);
};