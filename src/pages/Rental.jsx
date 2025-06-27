import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Search from '../components/search';

const Rental = () => {
  const [t, i18n] = useTranslation("global");
  const rentalStatus = useSelector(state => state.rental.status);
  const rentalArr = useSelector(state => state.rental.value);

  return (
    <div>
      <h1> RENTAL </h1>
      <div>
        <Search type="Rental" />
      </div>
      <div>
        {rentalStatus === 'succeeded' &&
          <DataTable value={rentalArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(rentalArr[0]).map((objKey) => {
              return <Column key={objKey} field={objKey} header={t("api.rental." + objKey)}></Column>
            })}
          </DataTable>
        }
      </div>
    </div>
  )
}

export default Rental;
