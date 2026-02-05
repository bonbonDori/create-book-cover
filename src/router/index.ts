import { lazy } from 'react';

const Home = lazy(() => import("../pages/buffer"))
const Fabricate = lazy(() => import("../pages/fabricate"))

const routes = [
  {
    path: '/', // 路由路径
    component: Home, // 路由对应的组件
    exact: true
  },
  {
    path: '/fabricate',
    component: Fabricate,
  },
  // {
  //   path: '/contact',
  //   component: lazy(() => import('./views/Contact')),
  // },
  // 可以添加更多的路由配置...
];

export default routes;
