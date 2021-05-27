import * as actionTypes from "../action/actionTypes";
import db from "../../db.json";
let initState = {
  sessions: [
    "Black Rain",
    "One Last Riddle",
    "The Burning Plague",
    "The Sea Witch",
    "Tomb of Horrors",
  ],
  userList: [
    {
      Id: "1",
      "First Name": "Joe",
      "Last Name": "Caputo",
      "Contact Number": "07658312387",
      "Campaign Name": "Black Rain",
    },
    {
      Id: "2",
      "First Name": "Piper",
      "Last Name": "Chapman",
      "Contact Number": "07142548798",
      "Campaign Name": "Black Rain",
    },
    {
      Id: "3",
      "First Name": "Tasha",
      "Last Name": "Jefferson",
      "Contact Number": "07998987220",
      "Campaign Name": "Black Rain",
    },
    {
      Id: "4",
      "First Name": "Gloria",
      "Last Name": "Mendoza",
      "Contact Number": "07512645873",
      "Campaign Name": "Black Rain",
    },
    {
      Id: "5",
      "First Name": "Theodore",
      "Last Name": "Bagwell",
      "Contact Number": "07561384896",
      "Campaign Name": "Tomb of Horrors",
    },
    {
      Id: "6",
      "First Name": "Brad",
      "Last Name": "Bellick",
      "Contact Number": "07883256418",
      "Campaign Name": "One Last Riddle",
    },
    {
      Id: "7",
      "First Name": "Lincoln",
      "Last Name": "Burrows",
      "Contact Number": "07112356983",
      "Campaign Name": "One Last Riddle",
    },
    {
      Id: "8",
      "First Name": "Fernando",
      "Last Name": "Sucre",
      "Contact Number": "07963212321",
      "Campaign Name": "One Last Riddle",
    },
    {
      Id: "9",
      "First Name": "Sara",
      "Last Name": "Tancredi",
      "Contact Number": "07954186684",
      "Campaign Name": "One Last Riddle",
    },
    {
      Id: "10",
      "First Name": "Daryl",
      "Last Name": "Dixon",
      "Contact Number": "07325649845",
      "Campaign Name": "The Burning Plague",
    },
    {
      Id: "11",
      "First Name": "Maggie",
      "Last Name": "Greene",
      "Contact Number": "07459832185",
      "Campaign Name": "The Burning Plague",
    },
    {
      Id: "12",
      "First Name": "Carol",
      "Last Name": "Peletier",
      "Contact Number": "07124979566",
      "Campaign Name": "The Burning Plague",
    },
    {
      Id: "13",
      "First Name": "Eugene",
      "Last Name": "Porter",
      "Contact Number": "07223654987",
      "Campaign Name": "The Burning Plague",
    },
    {
      Id: "14",
      "First Name": "Billy",
      "Last Name": "Cranston",
      "Contact Number": "07985645784",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "15",
      "First Name": "Kimberly",
      "Last Name": "Hart",
      "Contact Number": "07815307459",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "16",
      "First Name": "Trini",
      "Last Name": "Kwan",
      "Contact Number": "07548755285",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "17",
      "First Name": "Tommy",
      "Last Name": "Oliver",
      "Contact Number": "07989444568",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "18",
      "First Name": "Jason",
      "Last Name": "Scott",
      "Contact Number": "07774854987",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "19",
      "First Name": "Zack",
      "Last Name": "Taylor",
      "Contact Number": "07845222547",
      "Campaign Name": "The Sea Witch",
    },
    {
      Id: "20",
      "First Name": "Joyce",
      "Last Name": "Byers",
      "Contact Number": "07954668187",
      "Campaign Name": "Tomb of Horrors",
    },
    {
      Id: "21",
      "First Name": "Dustin",
      "Last Name": "Henderson",
      "Contact Number": "07889554857",
      "Campaign Name": "Tomb of Horrors",
    },
    {
      Id: "22",
      "First Name": "Jim",
      "Last Name": "Hopper",
      "Contact Number": "07954845148",
      "Campaign Name": "Tomb of Horrors",
    },
    {
      Id: "23",
      "First Name": "Nancy",
      "Last Name": "Wheeler",
      "Contact Number": "07445845711",
      "Campaign Name": "Tomb of Horrors",
    },
  ],
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
