import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';
import { usersSlice} from './slices/usersSlice';
import { customersSlice } from './slices/customersSlice';
import { bookingSlice } from './slices/bookingSlice';
import { rentalSlice } from './slices/rentalSlice';
import { maintenanceSlice } from './slices/maintenanceSlice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    suppliers: suppliersSlice.reducer,
    users: usersSlice.reducer,
    customers: customersSlice.reducer,
    booking: bookingSlice.reducer,
    rental: rentalSlice.reducer,
    maintenance: maintenanceSlice.reducer,
  }, // Add reducers here
});

export default store;