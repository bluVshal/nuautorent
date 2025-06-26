import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';
import { usersSlice} from './slices/usersSlice';
import { customersSlice } from './slices/customersSlice';
import { bookingSlice } from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    suppliers: suppliersSlice.reducer,
    users: usersSlice.reducer,
    customers: customersSlice.reducer,
    booking: bookingSlice.reducer
  }, // Add reducers here
});

export default store;