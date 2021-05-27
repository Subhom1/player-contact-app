import * as actionTypes from "./actionTypes";
export const ADD_USER = (data) => ({
  type: actionTypes.ADD_USER,
  payload: data,
});
export const EDIT_USER = (data) => ({
  type: actionTypes.EDIT_USER,
  payload: data,
});
