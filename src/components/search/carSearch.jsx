import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { fetchCars } from '../../api/slices/carsSlice';
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
  const carTransmission = ['AT', 'MT']
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [carElectric, setCarElectric] = useState();
  const [carHybrid, setCarHybrid] = useState();
  const resetAll = () => {
    setIsFormReset(true);
    makeInput.current.focus();
  }
  const setDisplayValue = () => {
    if (carsStatus === 'failed' && isFormReset === false) {
      return t("messages.error.nocarsfound")
    }
    else {
      return '';
    }
  }
  const searchCar = () => {
    setIsFormReset(false);
    dispatch(fetchCars());
  }

  return (
    <div>
      <div className='search-main-container'>
        <h4 className='header-text'>Car Search</h4>
        <div className='search-item-container'>

          <label htmlFor="carmake"> {t('api.cars.carMake')} </label>
          <InputText ref={makeInput} autoFocus className='txt-search-item' id="carmake" />

          <label className='lbl-search-item' htmlFor="carmodel"> {t('api.cars.carModel')} </label>
          <InputText className='txt-search-item' id="carmodel" />

          <label className='lbl-search-item' htmlFor="cartype"> {t('api.cars.carType')} </label>
          <Dropdown className='txt-search-item' id="cartype" value={selectedType} onChange={(e) => setSelectedType(e.value)} options={carType} optionLabel="name"
            placeholder="Select a Type" checkmark={true} highlightOnSelect={false} />

          <label className='lbl-search-item' htmlFor="carntaregnumber"> {t('api.cars.carNTARegNumber')} </label>
          <InputText className='txt-search-item' id="carntaregnumber" />

        </div>

        <div className='search-item-container'>
          <label htmlFor="carprice"> {t('api.cars.carPrice')} </label>
          <InputText className='txt-search-item' id="carprice" />

          <label className='lbl-search-item' htmlFor="carstatus"> {t('api.cars.carStatus')} </label>
          <Dropdown className='txt-search-item' id="carstatus" value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={carStatus} optionLabel="name"
            placeholder="Select a Status" checkmark={true} highlightOnSelect={false} />

          <label className='lbl-search-item' htmlFor="cartransmission"> {t('api.cars.carTransmission')} </label>
          <Dropdown className='txt-search-item' id="cartransmission" value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.value)} options={carTransmission} optionLabel="name"
            placeholder="Select a Transmission" checkmark={true} highlightOnSelect={false} />

          <RadioButton className='rd-btn' inputId="electric" name="fuel" value="Electric" onChange={(e) => setCarElectric(e.value)} checked={carElectric === 1} />
          <label htmlFor="electric" className="ml-2">{t('api.cars.isCarElectric')}</label>

          <RadioButton className='rd-btn' inputId="hybrid" name="fuel" value="Hybrid" onChange={(e) => setCarHybrid(e.value)} checked={carHybrid === 1} />
          <label htmlFor="hybrid" className="ml-2">{t('api.cars.isCarHybrid')}</label>

        </div>

        <Button raised label={carsStatus === 'loading' ? 'Searching...' : 'Search'} disabled={carsStatus === 'loading'} onClick={searchCar} />
        <Button label={t('buttons.reset')} disabled={carsStatus === 'loading'} onClick={resetAll}></Button>
      </div>

      <p>{setDisplayValue()}</p>
    </div>
  )
};

export default CarSearch;
