import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';
import { usersSlice} from './slices/usersSlice';
import { customersSlice } from './slices/customersSlice';
import { bookingSlice } from './slices/bookingSlice';
import { rentalSlice } from './slices/rentalSlice';
import { maintenanceSlice } from './slices/maintenanceSlice';
import { maintenanceAgenciesSlice } from './slices/maintenanceAgenciesSlice';
import { authSlice, logout } from './slices/authSlice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    suppliers: suppliersSlice.reducer,
    users: usersSlice.reducer,
    customers: customersSlice.reducer,
    booking: bookingSlice.reducer,
    rental: rentalSlice.reducer,
    maintenance: maintenanceSlice.reducer,
    maintenanceAgenciesSlice: maintenanceAgenciesSlice.reducer,
    auth: authSlice.reducer,
  }, // Add reducers here
});

// When the http layer detects a 401 (expired/invalid token) it emits this
// event; drop the app back to a logged-out state so the UI updates.
window.addEventListener('auth:unauthorized', () => {
  store.dispatch(logout());
});

export default store;
