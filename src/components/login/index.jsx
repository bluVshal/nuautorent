import React from 'react';
import LoginModal from './loginModal';
import SignIn from './signin';
import './login.css';

const Login = (props) => {
  const { type } = props;

  return (
    <div>
      {type === 'Login' ? <LoginModal /> : <SignIn />}
    </div>
  )
}

export default Login
