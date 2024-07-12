import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { refreshThunk } from '../redux/auth/auth.reducer';

import * as ROUTES from '../constants/routes';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from 'PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisteredPage = lazy(() => import('pages/RegisteredPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <RegisteredPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: <ContactsPage />,
  },
  {
    path: ROUTES.PRODUCTS_ROUTE,
    element: (
      <PrivateRoute>
        <ProductsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.POSTS_ROUTE,
    element: (
      <PrivateRoute>
        <PostsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.POST_DETAILS_ROUTE,
    element: <PostDetails />,
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
