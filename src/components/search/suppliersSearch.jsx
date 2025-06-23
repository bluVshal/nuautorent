import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { fetchSuppliers } from '../../api/slices/suppliersSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const SuppliersSearch = () => {
  const nameInput = useRef(null);
  const [isFormReset, setIsFormReset] = useState('true');
  const [supplierName, setSupplierName] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierContact, setSupplierContact] = useState('');
  const [supplierPhone, setSupplierPhone] = useState('');
  const dispatch = useDispatch();
  const suppliersStatus = useSelector(state => state.suppliers.status);
  const [t, i18n] = useTranslation("global");
  const resetAll = () => {
    setIsFormReset(true);
    nameInput.value=''
    setSupplierName('');
    setSupplierAddress('');
    setSupplierContact('');
    setSupplierEmail('');
    setSupplierPhone('');
    nameInput.current.focus();
  };
  const setDisplayValue = () => {
    if(suppliersStatus === 'failed' && isFormReset === false){
      return t("messages.error.nosupppliersfound")
    }
    else {
      return '';
    }
  };
  const searchSupplier = () => {
    setIsFormReset(false);
    dispatch(fetchSuppliers());
    console.log(supplierName);
  };

  const handleChangeSupName = (event) => {
    setSupplierName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setSupplierAddress(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setSupplierEmail(event.target.value);
  }

  const handleChangeContact = (event) => {
    setSupplierContact(event.target.value);
  };
  
  const handleChangePhone = (event) => {
    setSupplierPhone(event.target.value);
  }

  return (
    <div>
      <div className='search-main-container'>
        <h4 className='header-text'> Suppliers Search </h4>
        <div className='search-item-container'>

          <label htmlFor="suppliername"> {t('api.suppliers.supplierName')} </label>
          <InputText value={supplierName} ref={nameInput} autoFocus className='txt-search-item' id="suppliername" onChange={handleChangeSupName}/>

          <label className='lbl-search-item' htmlFor="supplieraddress"> {t('api.suppliers.supplierAddress')} </label>
          <InputText value={supplierAddress} className='txt-search-item' id="supplieraddress" onChange={handleChangeAddress}/>

          <label className='lbl-search-item' htmlFor="supplieremail"> {t('api.suppliers.supplierEmail')} </label>
          <InputText value={supplierEmail} className='txt-search-item' id="supplieremail" onChange={handleChangeEmail}/>

        </div>

        <div className='search-item-container'>
          <label htmlFor="suppliercontactname"> {t('api.suppliers.supplierContactName')} </label>
          <InputText value={supplierContact} className='txt-search-item' id="suppliercontactname" onChange={handleChangeContact}/>

          <label className='lbl-search-item' htmlFor="supplierphone"> {t('api.suppliers.supplierPhone')} </label>
          <InputText value={supplierPhone} className='txt-search-item' id="supplierphone" onChange={handleChangePhone}/>
        </div>

        <Button raised label={suppliersStatus === 'loading' ? 'Searching...' : 'Search'} disabled={suppliersStatus === 'loading'} onClick={searchSupplier} />
        <Button label={t('buttons.reset')} disabled={suppliersStatus === 'loading'} onClick={resetAll}></Button>
      </div>

      <p>{setDisplayValue()}</p>
    </div>
  )
}

export default SuppliersSearch;
