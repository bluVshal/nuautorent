import React from 'react'
import './border.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import NavMenu from '../../components/navmenu';

const Border = () => {
  return (
    <div className='outer-border'>
      <div className='middle-border'>
        <div className='inner-border'>
          <div className='content-container'>
            <NavMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Border
