import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: ""
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (_, action) => {
            return { message: action.payload };
        },
        clearMessage: () => {
            return { message: "" };
        },
    },
});

export default messageSlice.reducer;
