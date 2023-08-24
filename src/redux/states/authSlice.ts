import { IauthState, Ilogin, Iuser } from "@/models";
import AuthService from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { messageSlice } from "./messageSlice";


const initialState: IauthState = {};

// // Get token user🔐
// const token = getUserToken()
// // If the token is
// if (token) {
//     !isTokenExpired(token) && (initialState._token = token);
// }

export const login = createAsyncThunk(
    "auth/login",
    async (dataLogin: Ilogin, thunkAPI) => {
        try {
            const res = await AuthService.loginService(dataLogin);
            const { message } = res?.data;
            const data: Iuser = res?.data;
            thunkAPI.dispatch(messageSlice.actions.setMessage(message))
            if (res?.status == 200) {
                return { userResponse: data };
            } else {
                return thunkAPI.rejectWithValue(message);
            }
        } catch (error: object | any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(messageSlice.actions.setMessage(message))
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    await AuthService.logout();
    thunkAPI.dispatch(messageSlice.actions.clearMessage());
});

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        // Login
        builder
            .addCase(login.pending, (state) => {
                state.isLoanding = true;
                state._token = "";
                state.userInfo = initialState.userInfo;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoanding = false;
                state._token = action.payload?.userResponse._token;
                state.userInfo = action.payload?.userResponse;
            })
            .addCase(login.rejected, (state) => {
                state.isLoanding = false;
                state._token = "";
                state.userInfo = initialState.userInfo;
            })
        // logout 
        builder
            .addCase(logout.fulfilled, (state) => {
                state.isLoanding = false;
                state._token = "";
                state.userInfo = initialState.userInfo;
            })
    }
});

export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
