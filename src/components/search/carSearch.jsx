import React from 'react';
import { fetchCars } from '../../api/slices/carsSlice';
import { useDispatch, useSelector } from 'react-redux';

const CarSearch = () => {
    const dispatch = useDispatch();
    const carsStatus = useSelector(state => state.cars.status);

  return (
    <div>
      <h4>Car Search</h4>
      <button disabled={carsStatus === 'loading'} onClick={() => dispatch(fetchCars())}>{carsStatus === 'loading' ? 'Loading...' : 'Search'}</button>
      { carsStatus === "failed" ? <p>No cars found</p>:""}
    </div>
  )
};

export default CarSearch;
