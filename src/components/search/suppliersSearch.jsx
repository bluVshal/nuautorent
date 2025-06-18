import React from 'react';
import { Button } from 'primereact/button';
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
      <Button raised label={suppliersStatus === 'loading' ? 'Loading...' : 'Search'} disabled={suppliersStatus === 'loading'} onClick={() => dispatch(fetchSuppliers())} />
      {suppliersStatus === "failed" ? <p>{t("messages.error.nosupppliersfound")}</p> : ""}
    </div>
  )
}

export default SuppliersSearch;
