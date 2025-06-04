import React from 'react';
import Login from './login';
import SignIn from './signin';

const Login = (props) => {
    const {type} = props;

  return (
    <div>
       { type === 'Login' ?  <p> <Login />  </p> : <p> <SignIn /> </p>}
    </div>
  )
}

export default Login
