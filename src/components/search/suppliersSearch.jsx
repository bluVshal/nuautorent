import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { fetchSomeSuppliers } from '../../api/slices/suppliersSlice';
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
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();
  const suppliersStatus = useSelector(state => state.suppliers.status);
  const [t, i18n] = useTranslation("global");

  const validateEmail = (value) => {
    // Email is an optional filter: empty is fine, but if provided it must be valid.
    if (!value || value.trim() === '') {
      setEmailError('');
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(t('validation.emailInvalid'));
      return false;
    }
    setEmailError('');
    return true;
  };

  const resetAll = () => {
    setIsFormReset(true);
    nameInput.value=''
    setSupplierName('');
    setSupplierAddress('');
    setSupplierContact('');
    setSupplierEmail('');
    setSupplierPhone('');
    setEmailError('');
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
    if (!validateEmail(supplierEmail)) {
      return;
    }
    setIsFormReset(false);
    dispatch(fetchSomeSuppliers());
  };

  const handleChangeSupName = (event) => {
    setSupplierName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setSupplierAddress(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setSupplierEmail(event.target.value);
    validateEmail(event.target.value);
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

          <label className='lbl-search-item' htmlFor="suppliername"> {t('api.suppliers.supplierName')} </label>
          <InputText value={supplierName} ref={nameInput} autoFocus className='txt-search-item' id="suppliername" onChange={handleChangeSupName}/>

          <label className='lbl-search-item' htmlFor="supplieraddress"> {t('api.suppliers.supplierAddress')} </label>
          <InputText value={supplierAddress} className='txt-search-item' id="supplieraddress" onChange={handleChangeAddress}/>

          <label className='lbl-search-item' htmlFor="supplieremail"> {t('api.suppliers.supplierEmail')} </label>
          <span className='email-field'>
            <InputText value={supplierEmail} className='txt-search-item' id="supplieremail" onChange={handleChangeEmail}/>
            {emailError && <small className='email-error'>{emailError}</small>}
          </span>

        </div>

        <div className='search-item-container'>
        
          <label className='lbl-search-item' htmlFor="suppliercontactname"> {t('api.suppliers.supplierContactName')} </label>
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
