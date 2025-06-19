import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navmenu.css';
import LoginModal from '../../components/login';
import { Dialog } from 'primereact/dialog';

const NavMenu = () => {
  const [visible, setVisible] = useState(false);
  const menuItemsArr = [
    { "link": "/", "title": "Home" },
    { "link": "/cars", "title": "Cars" },
    { "link": "/suppliers", "title": "Suppliers" },
    { "link": "/customers", "title": "Customers" },
    { "link": "/maintenance", "title": "Maintenance" },
    { "link": "/rental", "title": "Rental" },
    { "link": "/users", "title": "Users" }  
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

      <div>
        <Link label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)}> Login </Link>
        <Dialog className='modal-container' header="Login" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
          <LoginModal type='SignUp'/>
        </Dialog>
      </div>

    </div>
  )
}

export default NavMenu;
