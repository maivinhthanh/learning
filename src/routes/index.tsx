import HomeLayout from 'components/layouts/HomeLayout';
import RequireAuth from 'components/RequireAuth';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import { RouteObject, useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
      { path: `*`, element: <NotFound /> },
    ],
  },
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
