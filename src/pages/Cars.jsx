import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../api/slices/carsSlice';

const Cars = () => {
  const carsStatus = useSelector(state => state.cars.status);
  const dispatch = useDispatch();
  const carsArr = useSelector(state => state.cars.value);

  return (
    <div>
      <h1> CARS </h1>
    </div>
  )
}

export default Cars
