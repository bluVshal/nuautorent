import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name:'cars',
    initialState:{},
    reducers:{}
});

export const { getCars } = carSlice.actions;
export default carSlice.reducer;