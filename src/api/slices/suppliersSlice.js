import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../http';

export const fetchSomeSuppliers = createAsyncThunk(
    'suppliers/fetch',
    async (params) => {
        const response = await http.get('/suppliers/short', { params });
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
