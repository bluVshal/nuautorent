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
import Login from '../../pages/Login';
import RequireAuth from '../auth/RequireAuth';

const Border = () => {
  return (
    <div className='outer-border'>
      <div className='middle-border'>
        <div className='inner-border'>
          <div className='content-container'>
            <NavMenu />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/cars" element={<RequireAuth><Cars /></RequireAuth>} />
              <Route path="/suppliers" element={<RequireAuth><Suppliers /></RequireAuth>} />
              <Route path="/customers" element={<RequireAuth><Customers /></RequireAuth>} />
              <Route path="/maintenance" element={<RequireAuth><Maintenance /></RequireAuth>} />
              <Route path="/booking" element={<RequireAuth><Booking /></RequireAuth>} />
              <Route path="/rental" element={<RequireAuth><Rental /></RequireAuth>} />
              <Route path="/users" element={<RequireAuth roles={['admin']}><Users /></RequireAuth>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Border
