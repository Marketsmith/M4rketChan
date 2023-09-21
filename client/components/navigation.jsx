import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navigation.css';
import useUserStore from '../zuStore';

const Navigation = () => {
  const navigate = useNavigate();
  const { zuUsername } = useUserStore();

  const handleClick = (event) => {
    const selectedPage = event.target.value;
    if (
      (selectedPage === '/sellItem' && !zuUsername) ||
      (selectedPage === '/myAccount' && !zuUsername)
    ) {
      navigate('/login-page');
    } else {
      navigate(selectedPage);
    }
  };

  return (
    <div className='navbar'>
      <select className='nav-dropdown' onChange={handleClick}>
        <option value='navigation'>Navigate</option>
        <option value='/myAccount'>My Account</option>
        <option value='/'>Home Page</option>
        <option value='/sellItem'>Sell Item</option>
      </select>

      <div className='action-buttons'>
        {zuUsername ? (
          <Link to='/sellItem' className='nav-sell'>
            Sell
          </Link>
        ) : (
          <Link to='/login-page' className='nav-login'>
            Sell
          </Link>
        )}
        ;
        {zuUsername ? (
          <span className='nav-username'> Welcome, {zuUsername}</span>
        ) : (
          <Link to='/login-page' className='nav-login'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navigation;
