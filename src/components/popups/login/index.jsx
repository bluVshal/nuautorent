import React from 'react';
import LoginModal from './loginModal';
import SignUp from './signup';
import './login.css';

const Login = (props) => {
  const { type } = props;

  return (
    <div>
      {type === 'Login' ? <LoginModal /> : <SignUp />}
    </div>
  )
}

export default Login
