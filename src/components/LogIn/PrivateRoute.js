import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;

    return decodedToken.exp > currentTime;
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/signInPage',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
