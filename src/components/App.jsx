import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux/store';

import StartPage from 'pages/StartPage/StartPage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import RegisterPage from 'pages/RegisterPage/Registerpage';
import LoginPage from 'pages/LoginPage/LoginPage';

import UserMenu from './UserMenu/UserMenu';
import AuthLayout from './AuthLayout/AuthLayout';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter>
              <UserMenu />
              <Suspense fallback={<p>...Loading</p>}>
                <Routes>
                  <Route path="/" element={<StartPage />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/phonebook" element={<PhoneBookPage />} />
                  </Route>
                  <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </>
  );
};
