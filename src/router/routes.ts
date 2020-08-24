import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/goodness-of-fit', component: () => import('pages/GoodnessOfFit.vue') },
    ],
  },

  // Always leave last
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
