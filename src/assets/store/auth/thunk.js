import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from "../../services/qlNguoiDung.service";

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload, { rejectWithValue}) => {
        try {
            const result = await qlNguoiDungServices.dangNhap(payload)
            return result.data.content
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const registerThunk = createAsyncThunk (
    'quanLyNguoiDung/login',
    async (payload, {rejectWithValue}) => {
        try {
            return await qlNguoiDungServices.dangKy(payload)
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)