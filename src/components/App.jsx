import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux/store';

import AuthLayout from './AuthLayout/AuthLayout';
import NavMenu from './NavMenu/NavMenu';

const StartPage = lazy(() => import('../pages/StartPage/StartPage'));
const PhoneBookPage = lazy(() =>
  import('../pages/PhoneBookPage/PhoneBookPage')
);
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter>
              <NavMenu />
              <Suspense fallback={<p>...Loading</p>}>
                <Routes>
                  <Route path="/" element={<StartPage />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<PhoneBookPage />} />
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
