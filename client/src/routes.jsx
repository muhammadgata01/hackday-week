import { Routes, Route } from 'react-router-dom';

// Pages
import Discover from './Pages/Discover';
import ArticlesDetail from './Pages/ArticlesDetail';
import Dashboard from './Pages/Dashboard';
import Create from './Pages/Create';
import Update from './Pages/Update';

const routes = [
  {
    name: 'Discover',
    path: '/',
    component: Discover,
  },
  {
    name: 'ArticlesDetail',
    path: '/articles/:id',
    component: ArticlesDetail,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'Create',
    path: '/create',
    component: Create,
  },
  {
    name: 'Update',
    path: '/update/:id',
    component: Update,
  },
];

const RoutesComp = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.component />} />
        );
      })}
    </Routes>
  );
};

export default RoutesComp;
