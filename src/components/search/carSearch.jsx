import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { fetchSomeCars } from '../../api/slices/carsSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const schema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(6)
});

const CarSearch = () => {
  const dispatch = useDispatch();
  const makeInput = useRef(null);
  const [isFormReset, setIsFormReset] = useState('true');
  const carsStatus = useSelector(state => state.cars.status);
  const [t, i18n] = useTranslation("global");
  const carStatus = ['Available', 'Rented', 'Maintenance', 'Sold'];
  const carType = ['Small', 'Compact', 'Large', 'Limousine'];
  const carTransmission = ['AT', 'MT'];
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carNTARegNumber, setCarNTARegNumber] = useState('');
  const [carRentPrice, setCarRentPrice] = useState('0');
  const [carSelectedStatus, setCarSelectedStatus] = useState(null);
  const [carSelectedType, setCarSelectedType] = useState(null);
  const [carSelectedTransmission, setCarSelectedTransmission] = useState(null);
  const [carElectric, setCarElectric] = useState();
  const [carHybrid, setCarHybrid] = useState();
  const resetAll = () => {
    setIsFormReset(true);
    resetAllValuesToEmpty();
    makeInput.current.focus();
  };
  const resetAllValuesToEmpty = () => {
    setCarMake('');
    setCarModel('');
    setCarNTARegNumber('');
    setCarRentPrice('0');
    setCarSelectedStatus(null);
    setCarSelectedType(null);
    setCarSelectedTransmission(null);
    setCarElectric(false);
    setCarHybrid(false);
  };
  const setDisplayValue = () => {
    if (carsStatus === 'failed' && isFormReset === false) {
      return t("messages.error.nocarsfound")
    }
    else {
      return '';
    }
  };
  const searchCar = () => {
    setIsFormReset(false);
    dispatch(fetchSomeCars());
  };

  return (
    <div>
      <div className='search-main-container'>
        <h4 className='header-text'>Car Search</h4>
        <div className='search-item-container'>

          <label className='lbl-search-item' htmlFor="carmake"> {t('api.cars.carMake')} </label>
          <InputText value={carMake} ref={makeInput} autoFocus className='txt-search-item' id="carmake" onChange={(event) => setCarMake(event.target.value)}/>

          <label className='lbl-search-item' htmlFor="carmodel"> {t('api.cars.carModel')} </label>
          <InputText value={carModel} className='txt-search-item' id="carmodel" onChange={(event) => setCarModel(event.target.value)}/>

          <label className='lbl-search-item' htmlFor="cartype"> {t('api.cars.carType')} </label>
          <Dropdown value={carSelectedType} className='drp-search-item' id="cartype" onChange={(e) => setCarSelectedType(e.value)} options={carType} optionLabel="name"
            placeholder="Select a Type" checkmark={true} highlightOnSelect={false} />

          <label className='lbl-search-item' htmlFor="carntaregnumber"> {t('api.cars.carNTARegNumber')} </label>
          <InputText value={carNTARegNumber} className='txt-search-item' id="carntaregnumber" onChange={(event) => setCarNTARegNumber(event.target.value)}/>

        </div>

        <div className='search-item-container'>
          <label className='lbl-search-item' htmlFor="carprice"> {t('api.cars.carPrice')} </label>
          <InputText value={carRentPrice} className='txt-search-item' id="carprice" onChange={(event) => setCarRentPrice(event.target.value)}/>

          <label className='lbl-search-item' htmlFor="carstatus"> {t('api.cars.carStatus')} </label>
          <Dropdown value={carSelectedStatus} className='drp-search-item' id="carstatus" onChange={(e) => setCarSelectedStatus(e.value)} options={carStatus} optionLabel="name"
            placeholder="Select a Status" checkmark={true} highlightOnSelect={false} />

          <label className='lbl-search-item' htmlFor="cartransmission"> {t('api.cars.carTransmission')} </label>
          <Dropdown value={carSelectedTransmission} className='drp-search-item' id="cartransmission" onChange={(e) => setCarSelectedTransmission(e.value)} options={carTransmission} optionLabel="name"
            placeholder="Select a Transmission" checkmark={true} highlightOnSelect={false} />

          <RadioButton className='rd-btn' inputId="electric" name="fuel" value="Electric" onChange={(e) => setCarElectric(e.value)} checked={carElectric === true} />
          <label className='lbl-search-item' htmlFor="electric">{t('api.cars.isCarElectric')}</label>

          <RadioButton className='rd-btn' inputId="hybrid" name="fuel" value="Hybrid" onChange={(e) => setCarHybrid(e.value)} checked={carHybrid === true} />
          <label className='lbl-search-item' htmlFor="hybrid">{t('api.cars.isCarHybrid')}</label>

        </div>

        <Button raised label={carsStatus === 'loading' ? 'Searching...' : 'Search'} disabled={carsStatus === 'loading'} onClick={searchCar} />
        <Button label={t('buttons.reset')} disabled={carsStatus === 'loading'} onClick={resetAll}></Button>
      </div>

      <p>{setDisplayValue()}</p>
    </div>
  )
};

export default CarSearch;
