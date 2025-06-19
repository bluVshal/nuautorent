import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './login.css'

const LoginModal = () => {
  return (
    <div>
      <p> LOGIN HERE! </p>
      
      <div>
        <label htmlFor="username">
          Username
        </label>
        <InputText id="username" label="Username" ></InputText>
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>
        <InputText id="password" label="Password" type="password"></InputText>
      </div>

      <div className="flex align-items-center gap-2">
        <Button label="Sign-In" onClick={(e) => hide(e)} text></Button>
        <Button label="Cancel" onClick={(e) => hide(e)} text></Button>
      </div>

    </div>
  )
}

export default LoginModal
