import React from 'react';
import './search.css';
import CarSearch from './carSearch';
import SuppliersSearch from './suppliersSearch';
import UsersSearch from './usersSearch';

const Search = (props) => {
  const { type } = props;

  return (
    <div>
     { type ==="Cars" ? <CarSearch /> : 
     type==="Suppliers" ? <SuppliersSearch /> :
     type ==="Users" ? <UsersSearch /> :
     <p>Type</p>}
    </div>
  )
}

export default Search
