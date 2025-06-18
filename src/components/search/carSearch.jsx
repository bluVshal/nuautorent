import React from 'react';
import { Button } from 'primereact/button';
import { fetchCars } from '../../api/slices/carsSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const CarSearch = () => {
  const dispatch = useDispatch();
  const carsStatus = useSelector(state => state.cars.status);
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h4>Car Search</h4>
      <Button raised label={carsStatus === 'loading' ? 'Loading...' : 'Search'} disabled={carsStatus === 'loading'} onClick={() => dispatch(fetchCars())} />
      {carsStatus === "failed" ? <p>{t("messages.error.nocarsfound")}</p> : ""}
    </div>
  )
};

export default CarSearch;
