import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Route guard: renders its children only when the user is authenticated (and,
 * if `roles` is given, has one of those roles). Unauthenticated users are sent
 * to the login page, with the attempted location stashed so we can return to it
 * after a successful login.
 */
const RequireAuth = ({ children, roles }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
