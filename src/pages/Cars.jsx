import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../api/slices/carsSlice';
import Search from '../components/search';

const Cars = () => {
  const carsStatus = useSelector(state => state.cars.status);
  const dispatch = useDispatch();
  const carsArr = useSelector(state => state.cars.value);

  return (
    <div>
      <h1> CARS </h1>
      <div>
        <Search type="Cars"/>
      </div>
      <div>
        <button disabled={carsStatus === 'loading'} onClick={() => dispatch(fetchCars())}>{carsStatus === 'loading' ? 'Loading...' : 'Fetch the Cars'}</button>
        {carsStatus === 'succeeded' &&
          <div>
            <p>Cars List: </p>
            {carsArr.map((cr) => {
              return <p key={cr.carId}>{cr.carMake}</p>
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Cars
