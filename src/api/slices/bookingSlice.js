import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeBooking = createAsyncThunk(
    'booking/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/booking/short',{
            headers: {Accept: 'application/json'}
        });
        return response.data;
    }
);

export const bookingSlice = createSlice({
    name:'booking',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeBooking.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeBooking.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeBooking.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch booking'
        })
    }
});
