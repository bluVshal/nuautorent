import React from 'react';
import LoginModal from './loginModal';
import SignUp from './signup';
import './login.css';

const Login = (props) => {
  const { type, onClose } = props;

  return (
    <div>
      {type === 'Login' ? <LoginModal onClose={onClose} /> : <SignUp />}
    </div>
  )
}

export default Login
