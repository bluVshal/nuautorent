import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    suppliers: suppliersSlice.reducer,
  }, // Add reducers here
});

export default store;