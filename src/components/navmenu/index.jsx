import React from 'react'
import { Link } from 'react-router-dom';
import './navmenu.css';

const NavMenu = () => {
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
          <div className='menu-items-container'>
            <Link className='menu-item' key={mnu.title} to={mnu.link}> {mnu.title} </Link>
          </div>
        );
      })}

      <div className='login-container'>
        <p> Login </p>
      </div>

    </div>
  )
}

export default NavMenu;
