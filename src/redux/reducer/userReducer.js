import * as actionTypes from "../action/actionTypes";
import db from "../../db.json";
let initState = {
  sessions: db["Sessions"],
  userList: db["Player Contact Details"],
};
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      console.log(action.payload);
      return { ...state, userList: [...state.userList, action.payload] };
    case actionTypes.EDIT_USER:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};
export const getFilteredUserListReducer = (session) => {
  console.log(initState.userList, "userList");
  if (!session) return initState.userList;
  else return initState.userList.filter((i) => i["Campaign Name"] === session);
};
export const getUserData = (id) => {
  return initState.userList.find((i) => i["Id"] === id);
};
