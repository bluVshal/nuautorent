import React, { useRef } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import './login.css'

const LoginModal = () => {
  const uNameInput = useRef(null);
    const [t, i18n] = useTranslation("global");

  return (
    <div className='items-container'>
      <div className='text-container'>
        <label className='lbl-text' htmlFor="username">
          {t('signUp.username')}
        </label>
        <InputText className='txt-search-item'ref={uNameInput} autoFocus id="username" label="Username" ></InputText>
      </div>

      <div className='text-container'>
        <label className='lbl-text' htmlFor="password">
          {t('signUp.password')}
        </label>
        <InputText className='txt-search-item' id="password" label="Password" type="password"></InputText>
      </div>

      <div className="btn-container">
        <Button label={t('signUp.signIn')} onClick={(e) => hide(e)} text className="btn-submit"></Button>
        <Button label={t('signUp.cancel')} onClick={(e) => hide(e)} text className="btn-cancel"></Button>
      </div>

    </div>
  )
}

export default LoginModal
