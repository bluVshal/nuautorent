import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { fetchSuppliers } from '../../api/slices/suppliersSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const SuppliersSearch = () => {
  const dispatch = useDispatch();
  const suppliersStatus = useSelector(state => state.suppliers.status);
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h4> Suppliers Search </h4>
      <div>
        <label htmlFor="suppliername"> {t('api.suppliers.supplierName')} </label>
        <InputText id="suppliername" />

        <label htmlFor="supplieraddress"> {t('api.suppliers.supplierAddress')} </label>
        <InputText id="supplieraddress" />

        <label htmlFor="supplieremail"> {t('api.suppliers.supplierEmail')} </label>
        <InputText id="supplieremail" />

      </div>
      <div>
        <label htmlFor="suppliercontactname"> {t('api.suppliers.supplierContactName')} </label>
        <InputText id="suppliercontactname" />

        <label htmlFor="supplierphone"> {t('api.suppliers.supplierPhone')} </label>
        <InputText id="supplierphone" />

      </div>
      <Button raised label={suppliersStatus === 'loading' ? 'Loading...' : 'Search'} disabled={suppliersStatus === 'loading'} onClick={() => dispatch(fetchSuppliers())} />
      {suppliersStatus === "failed" ? <p>{t("messages.error.nosupppliersfound")}</p> : ""}
    </div>
  )
}

export default SuppliersSearch;
