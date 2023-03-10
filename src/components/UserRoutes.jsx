import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoutes redirectTo="/contacts" component={Register} />}
        />
        <Route path="/login" element={<PublicRoutes redirectTo="/contacts" component={Login} />} />
        <Route
          path="/contacts"
          element={<PrivateRoutes redirectTo="/login" component={Contacts} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
