import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../http';

export const fetchSomeMaintenance = createAsyncThunk(
    'maintenance/fetch',
    async () => {
        const response = await http.get('/maintenance/short');
        return response.data;
    }
);

export const maintenanceSlice = createSlice({
    name:'maintenance',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeMaintenance.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeMaintenance.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeMaintenance.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch maintenance'
        })
    }
});
