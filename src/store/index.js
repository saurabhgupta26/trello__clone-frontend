import { createStore, applyMiddleware } from "redux";

import { userInfo, error, isLogged } from "./types";

import thunk from "redux-thunk";

const initialState = {
  userInfo: [],
  error: "",
  isLogged: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case userInfo:
      console.log("in reducer, userinfo");
      return {
        ...state,
        userInfo: action.payload,
      };
    case error:
      return {
        ...state,
        error: action.payload,
      };
    case isLogged:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
}
export let store = createStore(reducer, applyMiddleware(thunk));
