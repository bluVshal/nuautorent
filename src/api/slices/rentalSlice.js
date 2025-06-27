import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeRental = createAsyncThunk(
    'rental/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/rental/short',{
            headers: {Accept: 'application/json'}
        });
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
