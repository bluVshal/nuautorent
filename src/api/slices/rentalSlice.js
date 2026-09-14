import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../http';

export const fetchSomeRental = createAsyncThunk(
    'rental/fetch',
    async (params) => {
        const response = await http.get('/rental/short', { params });
        return response.data;
    }
);

export const rentalSlice = createSlice({
    name:'rental',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeRental.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeRental.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeRental.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch rental'
        })
    }
});
