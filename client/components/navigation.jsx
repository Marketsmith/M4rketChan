import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navigation.css';
import useUserStore from '../zuStore';

const Navigation = () => {
  const navigate = useNavigate();
  const [userLevel, setUserLevel] = useState(null);
  const [userExp, setUserExp] = useState(null);
  const { zuUsername } = useUserStore();

 

  useEffect(() => {
      fetch(`http://localhost:3000/getUserXP/${zuUsername}`)
      .then((res) => res.json())
      .then((data) => {
        setUserExp(data);
      })
      .catch((error) => {
        console.error('Error fetching user level:', error);
      });
  }, [zuUsername]);


  useEffect(() => {
    fetch(`http://localhost:3000/getUserLevel/${zuUsername}`)
      .then((res) => res.json())
      .then((data) => {

        setUserLevel(data);
      })
      .catch((error) => {
        console.error('Error fetching user level:', error);
      });
  }, [zuUsername]);

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
        <Link to='/sellItem' className='nav-sell'>
          Sell
        </Link>
        {zuUsername ? (
          <span className='nav-username'> Welcome, {zuUsername}</span>
        ) : (
          <Link to='/login-page' className='nav-login'>
            Login
          </Link>
        )}
        {zuUsername ? (
          <span className='user-level'>{`Level:${userLevel}`} </span>
        ) : <span className='user-level'>{`Level: 0`} </span>}
        {zuUsername ? (
          <span className='xp-level'>{`Exp:${userExp}`} </span>
        ) : <span className='xp-level'>{`Exp: 0`} </span>}
      </div>
    </div>
  );
};
export default Navigation;
