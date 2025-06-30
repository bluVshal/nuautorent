import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSomeMaintenanceAgencies = createAsyncThunk(
    'maintenanceagency/fetch',
    async () => {
        const response = await axios.get('http://localhost:5000/maintenanceagency/short',{
            headers: {Accept: 'application/json'}
        });
        return response.data;
    }
);

export const maintenanceAgenciesSlice = createSlice({
    name:'maintenanceAgencies',
    initialState:{
        value:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSomeMaintenanceAgencies.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchSomeMaintenanceAgencies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchSomeMaintenanceAgencies.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch maintenance agencies'
        })
    }
});
