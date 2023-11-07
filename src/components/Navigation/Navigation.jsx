import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth/authSelectors';
import { logOutThunk } from 'redux/auth/authOperations';

import { StyledNavigation, StyledNavigationLogin } from './Navigation.styled';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <StyledNavigation>
      <nav>
        <NavLink to="/" className="logo">
          Your<span className="logo_black">Phonebook</span>
        </NavLink>
        {authenticated ? (
          <>
            <NavLink to="/contacts" className="header">
              Contacts
            </NavLink>
            <button onClick={onLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/" className="header">
              Home
            </NavLink>

            <StyledNavigationLogin>
              <NavLink to="/register" className="header_link">
                Register
              </NavLink>
              <NavLink to="/login" className="header_link">
                Login
              </NavLink>
            </StyledNavigationLogin>
          </>
        )}
      </nav>

      <Outlet />
    </StyledNavigation>
  );
};

export default Header;
