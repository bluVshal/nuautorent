  import { configureStore } from '@reduxjs/toolkit';
  import { carSlice } from './slices/carsSlice';

   const store = configureStore({
     reducer: {
      cars: carSlice.reducer
     }, // Add reducers here
   });

   export default store;