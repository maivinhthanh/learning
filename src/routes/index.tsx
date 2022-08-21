import EmptyLayout from 'components/layouts/EmptyLayout';
import RequireAuth from 'components/RequireAuth';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import { RouteObject, useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <EmptyLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about-me',
        element: <HomePage />,
      },
      {
        path: '/project',
        element: <HomePage />,
      },
      { path: `*`, element: <NotFound /> },
    ],
  },

  { path: `*`, element: <NotFound /> },
];

export const MainRoutes = () => {
  const element = useRoutes(routes);
  return (
    <RequireAuth>
      <>{element}</>
    </RequireAuth>
  );
};

export default routes;
