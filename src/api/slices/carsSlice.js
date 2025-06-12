import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
    'cars/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/cars/all',{
            headers: {Accept: 'application/json'}
        });
        return response.data;
    }
);

export const carSlice = createSlice({
    name:'cars',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchCars.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchCars.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch cars'
        })
    }
});
