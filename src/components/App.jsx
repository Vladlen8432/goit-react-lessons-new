import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId/*" element={<PostDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
