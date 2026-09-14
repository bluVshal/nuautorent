import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../http';

export const fetchSomeCustomers = createAsyncThunk(
    'customers/fetch',
    async (params) => {
        const response = await http.get('/customers/short', { params });
        return response.data;
    }
);

export const customersSlice = createSlice({
    name:'customers',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeCustomers.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeCustomers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeCustomers.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch customers'
        })
    }
});
