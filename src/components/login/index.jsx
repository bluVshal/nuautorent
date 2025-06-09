import React from 'react';
import LoginModal from './loginModal';
import SignIn from './signin';
import './login.css';

const Login = (props) => {
    const {type, show} = props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
       { type === 'Login' ?  <LoginModal />  : <SignIn /> }
    </div>
  )
}

export default Login
