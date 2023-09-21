import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navigation.css';
import useUserStore from '../zuStore'

const Navigation = () => {
  const navigate = useNavigate();
  // added this for user level
  //const [userLevel, setUserLevel] = useState(null);
  const [userExp, setUserExp] = useState(null);
  const { zuUsername } = useUserStore();

 

  useEffect(() => {
      fetch(`http://localhost:3000/getUserXP/${zuUsername}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the data', data);
        setUserExp(data);
//         if (zuUsername) {
//           // Now you can access XP from the 'data' object
//           setUserExp(data.xp)
// ; // Update XP in your store
//         } else {
//           console.error('XP data not found in the response:', data);
//         }
      })
      .catch((error) => {
        console.error('Error fetching user level:', error);
      });
  }, [zuUsername]);


  // useEffect(() => {
  //   fetch('http://localhost:3000/getUsers')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Data from server for users', data[0].level);
  //       setUserLevel(data[22].level);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user level:', error);
  //     });
  // }, []);

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
        {zuUsername ? (
          <span className='nav-username'> Welcome,{zuUsername}</span>
        ) : (
          <Link to='/login-page' className='nav-login'>
            Login
          </Link>
        )}
        <span className='xp-level'>{`Exp:${userExp}`} </span>
      </div>
    </div>
  );
};
export default Navigation;
