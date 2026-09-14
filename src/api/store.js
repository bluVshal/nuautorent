import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carSlice } from './slices/carsSlice';
import { suppliersSlice } from './slices/suppliersSlice';
import { usersSlice} from './slices/usersSlice';
import { customersSlice } from './slices/customersSlice';
import { bookingSlice } from './slices/bookingSlice';
import { rentalSlice } from './slices/rentalSlice';
import { maintenanceSlice } from './slices/maintenanceSlice';
import { maintenanceAgenciesSlice } from './slices/maintenanceAgenciesSlice';
import { authSlice, logout } from './slices/authSlice';

const appReducer = combineReducers({
  cars: carSlice.reducer,
  suppliers: suppliersSlice.reducer,
  users: usersSlice.reducer,
  customers: customersSlice.reducer,
  booking: bookingSlice.reducer,
  rental: rentalSlice.reducer,
  maintenance: maintenanceSlice.reducer,
  maintenanceAgenciesSlice: maintenanceAgenciesSlice.reducer,
  auth: authSlice.reducer,
}); // Add reducers here

// Data slices whose cached results must not survive a logout.
const DATA_SLICES = [
  'cars',
  'suppliers',
  'users',
  'customers',
  'booking',
  'rental',
  'maintenance',
  'maintenanceAgenciesSlice',
];

// On logout, drop all cached resource data so nothing is retained in memory for
// a logged-out user. Setting a slice to undefined makes combineReducers reset
// it to its initial state; the auth slice handles clearing its own state.
const rootReducer = (state, action) => {
  if (action.type === logout.type && state) {
    const cleared = { ...state };
    for (const key of DATA_SLICES) {
      cleared[key] = undefined;
    }
    state = cleared;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

// When the http layer detects a 401 (expired/invalid token) it emits this
// event; drop the app back to a logged-out state so the UI updates.
window.addEventListener('auth:unauthorized', () => {
  store.dispatch(logout());
});

export default store;
