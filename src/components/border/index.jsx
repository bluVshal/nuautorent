import React from 'react'
import './border.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Cars from '../../pages/Cars';
import Suppliers from '../../pages/Suppliers';
import Customers from '../../pages/Customers';
import Maintenance from '../../pages/Maintenance';
import Rental from '../../pages/Rental';
import Booking from '../../pages/Booking';
import NavMenu from '../../components/navmenu';
import Users from '../../pages/Users';

const Border = () => {
  return (
    <div className='outer-border'>
      <div className='middle-border'>
        <div className='inner-border'>
          <div className='content-container'>
            <NavMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/rental" element={<Rental />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Border
