import * as actionTypes from "./actionTypes";

import { httpRequest } from "../../utils/httpRequest";
const API_URL = "http://localhost:3000";

// To fetch user list
export const FETCH_USER = () => async (dispatch) => {
  const res = await fetch(API_URL + "/players");
  const final = await res.json();
  dispatch({
    type: actionTypes.FETCH_USER_SUCCESS,
    payload: final,
  });
};

// To fetch session
export const FETCH_SESSION = () => async (dispatch) => {
  const res = await fetch(API_URL + "/sessions");
  const final = await res.json();
  dispatch({
    type: actionTypes.FETCH_SESSION_SUCCESS,
    payload: final,
  });
};

export const ADD_USER = (data) => () => {
  return httpRequest("POST", "players", data);
};
export const UPDATE_USER = (data) => () => {
  return httpRequest("PUT", `players/${data.id}`, data);
};
export const DELETE_USER = (id) => () => {
  return httpRequest("DELETE", `players/${id}`);
};
