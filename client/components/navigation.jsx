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
      <select className='nav-dropdown' onChange={handleClick}>
        <option value='navigation'>Navigate</option>
        <option value='/'>Home Page</option>
        <option value='/sell-item'>Sell</option>
      </select>

      <div className='action-buttons'>
        <Link to='/sellItem' className='nav-sell'>
          Sell
        </Link>
        <Link to='/login-page' className='nav-login'>
          Login
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
