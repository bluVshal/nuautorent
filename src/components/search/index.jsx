import React from 'react';
import CarSearch from './carSearch';
import SuppliersSearch from './suppliersSearch';

const Search = (props) => {
  const { type } = props;

  return (
    <div>
     { type ==="Cars" ? <CarSearch /> : type==="Suppliers" ? <SuppliersSearch /> : <p>Type</p>}
    </div>
  )
}

export default Search
