import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-xl text-gray-600">Loading...</div>
  </div>
);

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: '/blog',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: '/blog/:slug',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <BlogPost />
              </Suspense>
            ),
          },
          {
            path: '/projects',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Projects />
              </Suspense>
            ),
          },
          {
            path: '/contact',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Contact />
              </Suspense>
            ),
          },
          {
            path: '*',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <NotFound />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
