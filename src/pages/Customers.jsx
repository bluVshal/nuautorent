import React from 'react'
import Search from '../components/search';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Customers = () => {
  return (
    <div>
      <h1> CUSTOMERS </h1>
      <div>
        <Search type="Customers" />
      </div>
    </div>
  )
}

export default Customers
