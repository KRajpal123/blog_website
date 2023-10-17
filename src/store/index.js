import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";

const getUserInfo = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

  const initialState = {
    user:{userInfo:getUserInfo}
  }
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState:initialState,
});

export default store;
