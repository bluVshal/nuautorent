import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';
import { usersSlice} from './slices/usersSlice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    suppliers: suppliersSlice.reducer,
    users: usersSlice.reducer,
  }, // Add reducers here
});

export default store;