import React from 'react';

const Login = () => {
  return (
  <>
    <h3 className='loginHeader'>Log In</h3>
    <form method="POST" action='/login'>
        <input name="username" type="text" placeholder="username"></input> <br/>
        <input name="password" type="password" placeholder="password"></input> <br/>
        <input className='loginButton' type='submit' value="log in"></input> <br/>
    </form>
    <h3 id='loginOr'>------------------------------   or  ------------------------------</h3>
    <h3 className='loginHeader'>Sign Up</h3>
    <form method="POST" action='/signup'>
        <input name="username" type="text" placeholder="username"></input> <br/>
        <input name="password" type="password" placeholder="password"></input> <br/>
        <input className='loginButton' type='submit' value="sign up"></input> <br/>
    </form>
  </>
  );
};

export default Login;