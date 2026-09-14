import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginModal from '../components/popups/login/loginModal';

// Login-first landing page. Unauthenticated users are routed here; on success
// they are sent to the page they originally requested (or Home).
const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const [t] = useTranslation('global');
  const from = location.state?.from?.pathname || '/';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="login-page">
      <h2 className="login-title">{t('app.title')}</h2>
      <div className="login-card">
        <LoginModal />
      </div>
    </div>
  );
};

export default Login;
