import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  // const handleSubmitSignUp = (e) => {
  //   e.preventDefault();
  //   const { username, password } = e.target;

  //   if (!username.value.trim() || !password.value.trim()) {
  //     setErrorMessage('Username and Password are required.');
  //   }
  //   fetch("/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: username.value,
  //       password: password.value,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (data) {
  //         navigate("../home");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          navigate("./home");
        } else {
          setErrorMessage("Invalid username/password. Try again!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='loginpage'>
      <div className='loginbox'>
        <div>
          <h3 className="loginHeader">Welcome to the Goblin Market</h3>
          <div id="errormsg">{errorMessage}</div>
          <form onSubmit={handleSubmitLogin}>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="username"
            ></input>{" "}
            <br />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
            ></input>{" "}
            <br />
            <button className="loginButton" type="submit" value="log in">
              Log In
            </button>{" "}
            <br />
          </form>
          <h3 id="loginOr">
          </h3>
          <div />
          <h3 className="loginHeader">Sign Up</h3>
          <button className="loginButton" type="submit" value="sign up" onClick={() => navigate('/signup-page')}>
            Sign Up
          </button>{" "}
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
