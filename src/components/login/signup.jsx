import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './login.css'

const SignIn = () => {
  return (
    <div>
      <p> SIGN UP HERE! </p>

      <div className="text-container">
        <label htmlFor="username" className='lbl-text'>
          Username
        </label>
        <InputText id="username" label="Username" className=""></InputText>
      </div>

      <div className="text-container">
        <label htmlFor="password" className='lbl-text'>
          Password
        </label>
        <InputText id="password" label="Password" className="" type="password"></InputText>
      </div>

      <div className="text-container">
        <label htmlFor="cpassword" className='lbl-text'>
          Confirm Password
        </label>
        <InputText id="cpassword" label="Confirm Password" className="" type="password"></InputText>
      </div>

      <div className="btn-container">
        <Button label="Sign-In" onClick={(e) => hide(e)} text className="btn-submit"></Button>
        <Button label="Cancel" onClick={(e) => hide(e)} text className="btn-cancel"></Button>
      </div>

    </div>
  )
}

export default SignIn
