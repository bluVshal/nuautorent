import React from 'react';
import './search.css';
import CarSearch from './carSearch';
import SuppliersSearch from './suppliersSearch';
import UsersSearch from './usersSearch';
import CustomersSearch from './customersSearch';
import BookingSearch from './bookingSearch';
import RentalSearch from './rentalSearch';
import MaintenanceSearch from './maintenanceSearch';

const Search = (props) => {
  const { type } = props;

  return (
    <div>
      {type === "Cars" ? <CarSearch /> :
        type === "Suppliers" ? <SuppliersSearch /> :
          type === "Customers" ? <CustomersSearch /> :
            type === "Users" ? <UsersSearch /> :
              type === "Booking" ? <BookingSearch /> :
                type === "Rental" ? <RentalSearch /> :
                  type === "Maintenance" ? <MaintenanceSearch /> :
                    <p>Type</p>}
    </div>
  )
}

export default Search
