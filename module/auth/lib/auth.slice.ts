"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./auth.api";
import { LoginDatas } from "../type";
import { setSession } from "@/utils/auth-session";

export interface AuthState {
    profile: any;
    loading: boolean
    authenticated: boolean;
}

const initialState: AuthState = {
    profile: null,
    loading: false,
    authenticated: false
};


export const login = createAsyncThunk("auth/login", async (datas: LoginDatas) => {
    try {
        let response = await loginAPI(datas);
        return response
    } catch (error) {
        console.error(error)
    }
});

// export const register = createAsyncThunk("auth/register", async (tag: string) => {
//   try {
//     let response = await getQuestionsAPI(1, tag);
//     return {response, tag};
//   } catch (error) {
//     console.error(error)
//   }
// });

export const AuthPageSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload?.data.data?.user
                if(action.payload) setSession(action.payload?.data.data?.token)
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            })

    }
});

export default AuthPageSlice.reducer;