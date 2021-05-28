import { store } from "../redux/store";
const BASE_URL = "http://localhost:3000";
export const httpRequest = (type, endpoint, data) => {
  let option;
  if (type === "POST" || type === "PUT" || type === "PATCH") {
    option = {
      method: type, // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } else {
    option = { method: type };
  }
  let finalUrl = `${BASE_URL}/${endpoint}`;
  return fetch(finalUrl, option)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json().then((jsonData) => {
          return {
            data: jsonData,
            status: response.status,
          };
        });
      } else if (response.status === 400) {
      } else if (response.status === 404) {
      }
    })
    .catch((error) => console.error(error));
};
