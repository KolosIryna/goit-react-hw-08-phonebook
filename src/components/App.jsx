import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperations';
import RestictedRoute from './Routes/RestictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};