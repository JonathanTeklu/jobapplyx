import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/jwtHelpers';

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  const userRole = getUserRole();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
