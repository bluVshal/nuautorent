import React from 'react'
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div>
    <Link to="/">Go to Home</Link>
      <Link to="/about">Go to About</Link>
    </div>
  )
}

export default NavMenu;
