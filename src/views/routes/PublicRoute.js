import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTE, routeName } from './Routes';
import Login from '../pages/auth/Login';


const PublicRoute = () => {
  return (
    <Routes>
      <Route path={ADMIN_ROUTE.concat(routeName.LOGIN)} element={Login} />
    </Routes>
  );
}

export default PublicRoute;

