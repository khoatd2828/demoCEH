import { createSlice } from "@reduxjs/toolkit";
import { getUserLogin } from "../../utils/getuserlogin";
import { loginThunk } from "./thunk";

const LOCAL_USER_LOGIN_KEY = "USER";
const initialState = {
};
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login thunk
      .addCase(
        loginThunk.fulfilled,
        (state, payload) => {
          localStorage.setItem(LOCAL_USER_LOGIN_KEY, JSON.stringify(payload));
          state.userLogin = payload;
        }
      )
  },
});
