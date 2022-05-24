const baseUrl = "https://norma.nomoreparties.space/api";

export const getResponseData = (res) => {
return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getApiResponse = () => {
  return fetch(`${baseUrl}/ingredients`)
    .then(getResponseData)
    .catch(getResponseData);
};

/* export const sendOrder = (ingredients) => {
  const ids = ingredients.map((ingredient) => ingredient._id);
  const body = JSON.stringify({ ingredients: ids });
  return sendRequest("POST", body, `${baseURL}/orders`);
}; */