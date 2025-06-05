import React from 'react'
import { Link } from 'react-router-dom';
import './navmenu.css';

const NavMenu = () => {
  const menuItemsArr = [
    { "link": "/", "title": "Home" },
    { "link": "/about", "title": "About" }
  ];

  return (
    <div>
      {menuItemsArr.map((mnu) => {
        return (
          <>
            <Link key={mnu.title} to={mnu.link}> {mnu.title} </Link>
          </>
        );
      })}


    </div>
  )
}

export default NavMenu;
