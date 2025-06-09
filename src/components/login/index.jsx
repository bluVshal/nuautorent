import React from 'react';
import LoginModal from './loginModal';
import SignIn from './signin';
import './login.css';

const Login = (props) => {
  const { type, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleClose = () => { show=false;}
  return (
    <div className={showHideClassName}>
      <button type="button" onClick={handleClose}>
        Close
      </button>
      {type === 'Login' ? <LoginModal /> : <SignIn />}
    </div>
  )
}

export default Login
