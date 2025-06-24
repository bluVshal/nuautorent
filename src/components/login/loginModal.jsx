import React, { useRef } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './login.css'

const LoginModal = () => {
  const uNameInput = useRef(null);

  return (
    <div className='items-container'>
      <div className='text-container'>
        <label className='lbl-text' htmlFor="username">
          Username
        </label>
        <InputText ref={uNameInput} autoFocus id="username" label="Username" ></InputText>
      </div>

      <div className='text-container'>
        <label className='lbl-text' htmlFor="password">
          Password
        </label>
        <InputText id="password" label="Password" type="password"></InputText>
      </div>

      <div className="btn-container">
        <Button label="Sign-In" onClick={(e) => hide(e)} text className="btn-submit"></Button>
        <Button label="Cancel" onClick={(e) => hide(e)} text className="btn-cancel"></Button>
      </div>

    </div>
  )
}

export default LoginModal
