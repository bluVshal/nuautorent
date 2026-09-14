import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../http';

export const fetchSomeUsers = createAsyncThunk(
    'Users/fetch',
    async () => {
        const response = await http.get('/users/short');
        return response.data;
    }
);

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeUsers.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeUsers.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch Users'
        })
    }
});
