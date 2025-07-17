import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRole } from '../utils/jwtHelpers';

const PrivateRoute = ({ children, roles }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const userRole = getUserRole();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
