import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navmenu.css';
import LoginModal from '../../components/login';

const NavMenu = () => {
  const [modalShow, setModalShow] = useState(false);
  const menuItemsArr = [
    { "link": "/", "title": "Home" },
    { "link": "/cars", "title": "Cars" },
    { "link": "/suppliers", "title": "Suppliers" },
    { "link": "/customers", "title": "Customers" },
    { "link": "/maintenance", "title": "Maintenance" },
    { "link": "/rental", "title": "Rental" }
  ];

  return (
    <div className='menu-container'>
      <img className='comp-logo' src='/nuAuto512x512.png' />
      {menuItemsArr.map((mnu) => {
        return (
          <div key={mnu.title} className='menu-items-container'>
            <Link className='menu-item' to={mnu.link}> {mnu.title} </Link>
          </div>
        );
      })}
      <LoginModal type='Login' show={modalShow} onHide={() => setModalShow(false)} />
      <div className='login-container'>
        <Link onClick={() => { setModalShow(true) }}> Login </Link>
      </div>

    </div>
  )
}

export default NavMenu;
