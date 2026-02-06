import { lazy } from 'react';

const Home = lazy(() => import("../pages/buffer"))
const Fabricate = lazy(() => import("../pages/fabricate"))
const Loading = lazy(() => import("../pages/load"))

const routes = [
  {
    // 路由路径
    path: '/',
    // 路由对应的组件
    component: Home,
    // React Router v6 已移除 exact 属性
    // 故删除以下 exact 属性，此备注只做了解
    // exact: true
  },
  {
    path: '/fabricate',
    component: Fabricate,
  },
  {
    path: '/load',
    component: Loading,
  },
  // {
  //   path: '/contact',
  //   component: lazy(() => import('./views/Contact')),
  // },
  // 可以添加更多的路由配置...
];

export default routes;
