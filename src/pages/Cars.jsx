import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../api/slices/carsSlice';

const Cars = () => {
  const carsStatus = useSelector(state => state.status);
  const dispatch = useDispatch();
  const carsArr = useSelector(state => state.value);

  return (
    <div>
      <h1> CARS </h1>
      <div>
        <button onClick={() => dispatch(fetchCars())}>{carsStatus === 'loading' ? 'Loading...' : 'Fetch the Cars'}</button>
        {carsStatus === 'succeeded' &&
          <div>
            <p>User Roles: </p>
            {carsArr.map((cr) => {
              return <p key={cr.carId}>{cr.carId}</p>
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Cars
