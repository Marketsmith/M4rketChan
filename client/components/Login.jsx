import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          navigate('./home');
        } else {
          setErrorMessage('Invalid username/password. Try again!');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='loginpage'>
      <div className='loginbox'>
        <div>
          <h3 className='loginHeader'>Welcome to the Goblin Market</h3>
          <div id='errormsg'>{errorMessage}</div>
          <form onSubmit={handleSubmitLogin}>
            <input
              id='username'
              name='username'
              type='text'
              placeholder='username'
              required
              onChange={handleInputChange}
              value={username}
            ></input>{' '}
            <br />
            <input
              id='password'
              name='password'
              type='password'
              placeholder='password'
              required
              onChange={handleInputChange}
              value={password}
            ></input>{' '}
            <br />
            <button className='loginButton' type='submit' value='log in'>
              Log In
            </button>{' '}
            <br />
          </form>
          <h3 id='loginOr'></h3>
          <div />
          <h3 className='loginHeader'>Sign Up</h3>
          <button
            className='loginButton'
            type='submit'
            value='sign up'
            onClick={() => navigate('/signup-page')}
          >
            Sign Up
          </button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Login;

//send back the user information to server
//reference the user, have a router handler that fetches user information, when reac app loads and saves user
//have an endpoint to call the user and store it in react
//cookies send back the user id
