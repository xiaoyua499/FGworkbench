import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue'),
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
    children: [
      {
        path: 'merchants', //商家路由
        component: () => import('@/views/login/merchants.vue'),
        redirect: '/login/merchants/Mphone',//设置默认页面
        children: [
          {
            path: 'Mphone',//手机登录
            name: 'MPhone',
            component: () => import('@/views/login/phone.vue'),

          },
          {
            path: 'Memail',//邮箱登录
            name: 'MEmail',
            component: () => import('@/views/login/email.vue')
          }
        ]
      },
      {
        path: 'talent',//达人路由
        component: () => import('@/views/login/talent.vue'),
        redirect: '/login/talent/Tphone',//设置默认页面
        children: [
          {
            path: 'Tphone',//手机登录
            name: 'TPhone',
            component: () => import('@/views/login/phone.vue'),
          },
          {
            path: 'Temail',//邮箱登录
            name: 'TEmail',
            component: () => import('@/views/login/email.vue')
          }
        ]
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
