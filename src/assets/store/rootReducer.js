import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./auth/slice";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
})