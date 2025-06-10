import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const SignIn = () => {
  return (
    <div>
      <p> SIGN UP HERE! </p>

      <div className="inline-flex flex-column gap-2">
        <label htmlFor="username" className="text-primary-50 font-semibold">
          Username
        </label>
        <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
      </div>

      <div className="inline-flex flex-column gap-2">
        <label htmlFor="password" className="text-primary-50 font-semibold">
          Password
        </label>
        <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"></InputText>
      </div>

      <div className="inline-flex flex-column gap-2">
        <label htmlFor="cpassword" className="text-primary-50 font-semibold">
          Confirm Password
        </label>
        <InputText id="cpassword" label="Confirm Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"></InputText>
      </div>

      <div className="flex align-items-center gap-2">
        <Button label="Sign-In" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
        <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
      </div>

    </div>
  )
}

export default SignIn
