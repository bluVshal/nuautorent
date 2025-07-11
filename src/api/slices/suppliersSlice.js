import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeSuppliers = createAsyncThunk(
    'cars/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/suppliers/short',{
            headers: {Accept: 'application/json'}
        });
        return response.data;
    }
);

export const suppliersSlice = createSlice({
    name:'suppliers',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeSuppliers.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeSuppliers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeSuppliers.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch suppliers'
        })
    }
});
