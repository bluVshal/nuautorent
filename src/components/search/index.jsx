import React from 'react';
import './search.css';
import CarSearch from './carSearch';
import SuppliersSearch from './suppliersSearch';
import UsersSearch from './usersSearch';
import CustomersSearch from './customersSearch';

const Search = (props) => {
  const { type } = props;

  return (
    <div>
     { type ==="Cars" ? <CarSearch /> : 
     type==="Suppliers" ? <SuppliersSearch /> :
     type==="Customers" ? <CustomersSearch /> :
     type ==="Users" ? <UsersSearch /> :
     <p>Type</p>}
    </div>
  )
}

export default Search
