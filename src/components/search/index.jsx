import React from 'react';
import CarSearch from './carSearch';

const Search = (props) => {
  const { type } = props.type;

  return (
    <div>
     { type ==="Cars" ? <CarSearch /> : <p>Type</p>}
    </div>
  )
}

export default Search
