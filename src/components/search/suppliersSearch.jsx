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
  const dispatch = useDispatch();
  const suppliersStatus = useSelector(state => state.suppliers.status);
  const [t, i18n] = useTranslation("global");
  const resetAll = () => {
    setIsFormReset(true);
    nameInput.current.focus();
  }
  const setDisplayValue = () => {
    if(suppliersStatus === 'failed' && isFormReset === false){
      return t("messages.error.nosupppliersfound")
    }
    else {
      return '';
    }
  }
  const searchSupplier = () => {
    setIsFormReset(false);
    dispatch(fetchSuppliers());
  }

  return (
    <div>
      <div className='search-main-container'>
        <h4 className='header-text'> Suppliers Search </h4>
        <div className='search-item-container'>

          <label htmlFor="suppliername"> {t('api.suppliers.supplierName')} </label>
          <InputText ref={nameInput} autoFocus className='txt-search-item' id="suppliername" />

          <label className='lbl-search-item' htmlFor="supplieraddress"> {t('api.suppliers.supplierAddress')} </label>
          <InputText className='txt-search-item' id="supplieraddress" />

          <label className='lbl-search-item' htmlFor="supplieremail"> {t('api.suppliers.supplierEmail')} </label>
          <InputText className='txt-search-item' id="supplieremail" />

        </div>

        <div className='search-item-container'>
          <label htmlFor="suppliercontactname"> {t('api.suppliers.supplierContactName')} </label>
          <InputText className='txt-search-item' id="suppliercontactname" />

          <label className='lbl-search-item' htmlFor="supplierphone"> {t('api.suppliers.supplierPhone')} </label>
          <InputText className='txt-search-item' id="supplierphone" />
        </div>

        <Button raised label={suppliersStatus === 'loading' ? 'Searching...' : 'Search'} disabled={suppliersStatus === 'loading'} onClick={searchSupplier} />
        <Button label={t('buttons.reset')} disabled={suppliersStatus === 'loading'} onClick={resetAll}></Button>
      </div>
      
      <p>{setDisplayValue()}</p>
    </div>
  )
}

export default SuppliersSearch;
