import * as actionTypes from "./actionTypes";
import { httpRequest } from "../../utils/httpRequest";
const API_URL = "http://localhost:3000";
export const FETCH_USER = () => async (dispatch) => {
  const res = await fetch(API_URL + "/players");
  const final = await res.json();
  dispatch(FETCH_USER_SUCCESS(final));
};
export const FETCH_USER_SUCCESS = (data) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  payload: data,
});

export const FETCH_SESSION = () => async (dispatch) => {
  const res = await fetch(API_URL + "/sessions");
  const final = await res.json();
  dispatch(FETCH_SESSION_SUCCESS(final));
};
export const FETCH_SESSION_SUCCESS = (data) => ({
  type: actionTypes.FETCH_SESSION_SUCCESS,
  payload: data,
});

export const ADD_USER = (data) => ({
  type: actionTypes.ADD_USER,
  payload: data,
});
export const EDIT_USER = (data) => ({
  type: actionTypes.EDIT_USER,
  payload: data,
});

export const ADD_EDIT_USER = (data) => async (dispatch) => {
  let option = {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(API_URL + "/players", option);
  //   const final = await res.json();
  //   dispatch(actionTypes.ADD_EDIT_USER_SUCCESS(final));
};
export const UPDATE_USER = (data) => (dispatch) => {
  httpRequest("PUT", `players/${data.id}`, data).then((resp) => {
    console.log("success");
  });
};
export const DELETE_USER = (id) => (dispatch) => {
  httpRequest("DELETE", `players/${id}`).then((resp) => {
    console.log("success");
  });
};
