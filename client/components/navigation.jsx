import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const selectedPage = event.target.value;
    navigate(selectedPage); // navigate ('./search')
  };

  return (
    <div className='navbar'>
      <Link to='/' className='nav-logo'>
        MyShop
      </Link>
      <select className='nav-dropdown' onChange={handleClick}>
        <option value='navigation'>Navigate</option>
        <option value='/search-bar'>Search</option>
        <option value='/sell-item'>Sell</option>
      </select>
      <Link to='/login' className='nav-link'>
        Login
      </Link>
    </div>
  );
};

export default Navigation;
