import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeMaintenance = createAsyncThunk(
    'maintenance/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/maintenance/short',{
            headers: {Accept: 'application/json'}
        });
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
