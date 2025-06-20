import React, { useState } from 'react';
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

  return (
    <div>
      <h4>Car Search</h4>
      <div>

        <div>
          <label htmlFor="carmake"> {t('api.cars.carMake')} </label>
          <InputText id="carmake" />

          <label htmlFor="carmodel"> {t('api.cars.carModel')} </label>
          <InputText id="carmodel" />

          <label htmlFor="cartype"> {t('api.cars.carType')} </label>
          <Dropdown id="cartype" value={selectedType} onChange={(e) => setSelectedType(e.value)} options={carType} optionLabel="name"
            placeholder="Select a Type" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />

          <label htmlFor="carntaregnumber"> {t('api.cars.carNTARegNumber')} </label>
          <InputText id="carntaregnumber" />

        </div>

        <div>
          <label htmlFor="carprice"> {t('api.cars.carPrice')} </label>
          <InputText id="carprice" />

          <label htmlFor="carstatus"> {t('api.cars.carStatus')} </label>
          <Dropdown id="carstatus" value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={carStatus} optionLabel="name"
            placeholder="Select a Status" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />

          <label htmlFor="cartransmission"> {t('api.cars.carTransmission')} </label>
          <Dropdown id="cartransmission" value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.value)} options={carTransmission} optionLabel="name"
            placeholder="Select a Transmission" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />

          <RadioButton inputId="electric" name="fuel" value="Electric" onChange={(e) => setCarElectric(e.value)} checked={carElectric === 1} />
          <label htmlFor="electric" className="ml-2">{t('api.cars.isCarElectric')}</label>

          <RadioButton inputId="hybrid" name="fuel" value="Hybrid" onChange={(e) => setCarHybrid(e.value)} checked={carHybrid === 1} />
          <label htmlFor="hybrid" className="ml-2">{t('api.cars.isCarHybrid')}</label>

        </div>

      </div>
      <Button raised label={carsStatus === 'loading' ? 'Searching...' : 'Search'} disabled={carsStatus === 'loading'} onClick={() => dispatch(fetchCars())} />
      {carsStatus === "failed" ? <p>{t("messages.error.nocarsfound")}</p> : ""}
    </div>
  )
};

export default CarSearch;
