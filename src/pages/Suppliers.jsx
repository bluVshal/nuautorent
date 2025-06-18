import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Search from '../components/search';

const Suppliers = () => {
  const [t, i18n] = useTranslation("global");
  const suppliersStatus= useSelector(state => state.suppliers.status);
  const suppliersArr = useSelector(state => state.suppliers.value);

  return (
    <div>
      <h1> SUPPLIERS </h1>
      <div>
        <Search type="Suppliers" />
      </div>
      <div>
        {suppliersStatus === 'succeeded' &&
          <DataTable value={suppliersArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(suppliersArr[0]).map((objKey) => {
              return <Column key={objKey} field={objKey} header={t("api.suppliers." + objKey)}></Column>
            })}
          </DataTable>
        }
      </div>
    </div>
  )
}

export default Suppliers
