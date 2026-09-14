import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navmenu.css';
import LoginModal from '../popups/login';
import { logout } from '../../api/slices/authSlice';
import { Dialog } from 'primereact/dialog';

const NavMenu = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const username = useSelector((state) => state.auth.username);
  const menuItemsArr = [
    { "link": "/", "title": "Home" },
    { "link": "/cars", "title": "Cars" },
    { "link": "/suppliers", "title": "Suppliers" },
    { "link": "/customers", "title": "Customers" },
    { "link": "/maintenance", "title": "Maintenance" },
    { "link": "/booking", "title": "Booking"},
    { "link": "/rental", "title": "Rental" },
    { "link": "/users", "title": "Users", "adminOnly": true }
  ];
  // Hide admin-only items from non-admins.
  const visibleMenuItems = menuItemsArr.filter(
    (mnu) => !mnu.adminOnly || role === 'admin'
  );

  let type="Login";

  return (
    <div className='menu-container'>
      <img className='comp-logo' src='/nuAuto512x512.png' />
      {visibleMenuItems.map((mnu) => {
        return (
          <div key={mnu.title} className='menu-items-container'>
            <NavLink className='menu-item' to={mnu.link}> {mnu.title} </NavLink>
          </div>
        );
      })}

      {isAuthenticated && (
        <div className='menu-items-container user-info'>
          <span className='user-name'>{username}</span>
          {role && <span className='user-role'>{role}</span>}
        </div>
      )}

      <div className='menu-items-container'>
        {isAuthenticated ? (
          <a className='menu-item' role="button" tabIndex={0} onClick={() => dispatch(logout())}> Logout </a>
        ) : (
          <a className='menu-item' role="button" tabIndex={0} onClick={() => setVisible(true)}> Login </a>
        )}
        <Dialog className='modal-container' header={type.toUpperCase()} visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
          <LoginModal type={type} onClose={() => setVisible(false)}/>
        </Dialog>
      </div>

    </div>
  )
}

export default NavMenu;
