import React from 'react';

const Login = () => {
  return (
  <>
    <h3 className='loginHeader'>Log In</h3>
    <form method="POST" action='/login'>
      <div>
        <input name="username" type="text" placeholder="username"></input>
      </div>
      <div>
        <input name="password" type="password" placeholder="password"></input>
      </div>
      <div>
        <input className='loginButton' type='submit' value="log in"></input>
      </div>
    </form>
    <h3 id='loginOr'>------------------------------   or  ------------------------------</h3>
    <h3 className='loginHeader'>Sign Up</h3>
    <form method="POST" action='/signup'>
      <div>
        <input name="username" type="text" placeholder="username"></input>
      </div>
      <div>
        <input name="password" type="password" placeholder="password"></input>
      </div>
      <div>
        <input className='loginButton' type='submit' value="sign up"></input>
      </div>
    </form>
  </>
  );
};

export default Login;