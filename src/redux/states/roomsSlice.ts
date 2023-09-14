import { IRoomsRequestModel } from '@/models/rooms.model';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoomsService } from '@/services';
import { RootState } from '../store';

const initialState: IRoomsRequestModel = {
    data: [],
};

export const getAllRooms = createAsyncThunk('rooms/getAllRooms', async (_, thunkAPI) => {
    try {
        const res = await RoomsService.getAllRooms();
        const data = res?.data;
        if (res?.status == 200) {
            return { roomsResponse: data };
        } else {
            return thunkAPI.rejectWithValue(`Error en la peticion`);
        }
    } catch (error: object | any) {
        const message =
            (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(message);
    }
});

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: initialState,
    reducers: {},
    extraReducers: (buldier) => {
        // Login
        buldier
            .addCase(getAllRooms.pending, (state) => {
                state.isLoanding = true;
                state.data = initialState.data;
            })
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.isLoanding = false;
                state.data = action.payload?.roomsResponse;
            })
            .addCase(getAllRooms.rejected, (state) => {
                state.isLoanding = false;
                state.data = initialState.data;
            });
    },
});

export const roomsSelector = (state: RootState) => state.rooms;
export default roomsSlice.reducer;
