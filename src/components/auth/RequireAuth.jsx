import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Route guard: renders its children only when the user is authenticated (and,
 * if `roles` is given, has one of those roles). Otherwise redirects to Home
 * (where the Login dialog lives). The attempted location is stashed in
 * navigation state so we could return to it after login.
 */
const RequireAuth = ({ children, roles }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
