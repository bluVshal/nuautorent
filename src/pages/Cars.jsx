import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/search';

const Cars = () => {
  const carsStatus = useSelector(state => state.cars.status);
  const carsArr = useSelector(state => state.cars.value);

  return (
    <div>
      <h1> CARS </h1>
      <div>
        <Search type="Cars"/>
      </div>
      <div>
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
