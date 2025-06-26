import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeCustomers = createAsyncThunk(
    'customers/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/customers/short',{
            headers: {Accept: 'application/json'}
        });
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
