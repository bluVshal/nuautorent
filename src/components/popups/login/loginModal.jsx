import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearAuthError } from '../../../api/slices/authSlice';
import './login.css'

const LoginModal = ({ onClose }) => {
  const uNameInput = useRef(null);
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Clear any stale error from a previous attempt when the modal opens.
  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ username, password }));
    if (login.fulfilled.match(result)) {
      setUsername('');
      setPassword('');
      onClose?.();
    }
  };

  const handleCancel = () => {
    dispatch(clearAuthError());
    onClose?.();
  };

  return (
    <form className='items-container' onSubmit={handleSubmit}>
      <div className='text-container'>
        <label className='lbl-text' htmlFor="username">
          {t('signUp.username')}
        </label>
        <InputText className='txt-search-item' ref={uNameInput} autoFocus id="username"
          value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='text-container'>
        <label className='lbl-text' htmlFor="password">
          {t('signUp.password')}
        </label>
        <InputText className='txt-search-item' id="password" type="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {authError && <small className='login-error'>{authError}</small>}

      <div className="btn-container">
        <Button label={authStatus === 'loading' ? '…' : t('signUp.signIn')} type="submit"
          disabled={authStatus === 'loading'} text className="btn-submit" />
        <Button label={t('signUp.cancel')} type="button" onClick={handleCancel}
          text className="btn-cancel" />
      </div>

    </form>
  )
}

export default LoginModal
