import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    children: [
      {
        path: 'merchants', //商家路由
        component: () => import('../views/login/merchants.vue')
      },
      {
        path: 'talent',//达人路由
        component: () => import('../views/login/talent.vue')
      },
    ]
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router
