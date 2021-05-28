import * as actionTypes from "../action/actionTypes";
import db from "../../db.json";
let initState = {
  sessions: [],
  userList: [],
};
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS || actionTypes.ADD_EDIT_USER_SUCCESS:
      return { ...state, userList: action.payload };
    case actionTypes.FETCH_SESSION_SUCCESS:
      return { ...state, sessions: action.payload };
    // case actionTypes.ADD_USER:
    //   console.log(action.payload);
    //   return { ...state, userList: [...state.userList, action.payload] };
    // case actionTypes.EDIT_USER:
    //   return { ...state, userList: action.payload };
    default:
      return state;
  }
};
export const getFilteredUserListReducer = (session) => {
  if (!session) return initState.userList;
  else return initState.userList.filter((i) => i.campaign_name === session);
};
export const getUserData = (id) => {
  return initState.userList.find((i) => i.id === id);
};
