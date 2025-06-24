import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Search from '../components/search';

const Users = () => {
  const [t, i18n] = useTranslation("global");
  const usersStatus = useSelector(state => state.users.status);
  const usersArr = useSelector(state => state.users.value);

  return (
    <div>
      <h1> USERS </h1>
      <div>
        <Search type="Users" />
      </div>
      <div>
        {usersStatus === 'succeeded' &&
          <DataTable value={usersArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(usersArr[0]).map((objKey) => {
              return <Column key={objKey} field={objKey} header={t("api.users."+objKey)}></Column>
            })}
          </DataTable>
        }
      </div>
    </div>
  )
}

export default Users;
