import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Search from '../components/search';

const Cars = () => {
  const [t, i18n] = useTranslation("global");
  const carsStatus = useSelector(state => state.cars.status);
  const carsArr = useSelector(state => state.cars.value);

  console.log(carsArr)

  return (
    <div>
      <h1> CARS </h1>
      <div>
        <Search type="Cars" />
      </div>
      <div>
        {carsStatus === 'succeeded' &&
          <DataTable value={carsArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(carsArr[0]).map((objKey) => {
              return <Column key={objKey} field={objKey} header={t("api.cars."+objKey)}></Column>
            })}
          </DataTable>
        }
      </div>
    </div>
  )
}

export default Cars;
