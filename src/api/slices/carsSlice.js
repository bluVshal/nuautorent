import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeCars = createAsyncThunk(
    'cars/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/cars/short',{
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
        builder.addCase(fetchSomeCars.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeCars.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeCars.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch cars'
        })
    }
});
