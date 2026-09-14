import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navmenu.css';
import { logout } from '../../api/slices/authSlice';

const NavMenu = () => {
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
  // Navigation only appears once logged in; admin-only items are hidden from
  // non-admins. Logged-out users just see the logo (login is its own page).
  const visibleMenuItems = isAuthenticated
    ? menuItemsArr.filter((mnu) => !mnu.adminOnly || role === 'admin')
    : [];

  return (
    <div className='menu-container'>
      <img className='comp-logo' src='/nuAuto512x512.png' />
      {visibleMenuItems.map((mnu) => (
        <div key={mnu.title} className='menu-items-container'>
          <NavLink className='menu-item' to={mnu.link}> {mnu.title} </NavLink>
        </div>
      ))}

      {isAuthenticated && (
        <div className='menu-items-container user-info'>
          <span className='user-name'>{username}</span>
          {role && <span className='user-role'>{role}</span>}
        </div>
      )}

      {isAuthenticated && (
        <div className='menu-items-container'>
          <a className='menu-item' role="button" tabIndex={0} onClick={() => dispatch(logout())}> Logout </a>
        </div>
      )}
    </div>
  )
}

export default NavMenu;
