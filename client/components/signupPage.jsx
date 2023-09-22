import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Styles/SignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(new Set());
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    function fetchUsers() {
      return fetch('http://localhost:3000/getUsers')
        .then((data) => data.json())
        .then((data) => {
          console.log('here are the users: ', data);
          const userSet = new Set();
          data.forEach((user) => {
            userSet.add(user.username);
          });
          setUsers(userSet);
        })
        .catch((err) => {
          console.error('Fetching users failed: ', err);
        });
    }
    fetchUsers();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('we are in the submit');
    if (usernameTaken) {
      alert('Username is already taken. Please try again.');
    } else {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => navigate('/login-page'))
        // .then((data) => data.json())
        // .then((data) => {
        //     console.log('out of the if statement');
        //     if (data) {
        //         console.log('in the if statement');
        //         navigate('./home');
        //     }
        // })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsernameInput(value);
      if (users.has(value)) {
        setUsernameTaken(true);
      } else {
        setUsernameTaken(false);
      }
    } else if (name === 'password') {
      setPasswordInput(value);
    }
  };

  return (
    <div id='signup-page'>
      <div id='signup-container'>
        <h1 id='welcome-banner'>Welcome to Marketsmith!</h1>
        <div id='submit-form'>
          <form id='signup-form' onSubmit={handleSubmit}>
            <div id='user-credentials-form'>
              <div id='username-input'>
                <input
                  name='username'
                  placeholder='username'
                  value={usernameInput}
                  onChange={handleInput}
                ></input>
                {usernameTaken && (
                  <p id='username-taken-notification'>Username is already taken.</p>
                )}
              </div>
              <input
                name='password'
                value={passwordInput}
                onChange={handleInput}
                type='password'
                placeholder='password'
                required
              ></input>
            </div>
            <div id='submit-button'>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
