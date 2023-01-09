import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { LoginAuthority } from "@/server/api/login";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home', //首页
    component: () => import('@/views/home/home.vue'),
    redirect: '/conversation',//设置默认页面
    meta: {
      requireAuth: true,//该路由需要权限校验
    },
    children: [
      {
        path: 'conversation', //会话
        name: 'Conversation',
        redirect: '/conversation/order',//设置默认页面
        component: () => import('@/views/conversation/conversation.vue'),
        children: [
          {
            path: 'order',//订单
            name: 'Order',
            component: () => import('@/views/conversation/order.vue')
          },
          {
            path: 'commodity',//商品
            name: 'Commodity',
            component: () => import('@/views/conversation/commodity.vue')
          },
          {
            path: 'phrase',//快捷短语
            name: 'Phrase',
            component: () => import('@/views/conversation/phrase.vue')
          },
          {
            path: 'assistant',//智能助手
            name: 'Assistant',
            component: () => import('@/views/conversation/assistant.vue')
          }
        ]
      },
      {
        path: 'information', //数据
        name: 'Information',
        component: () => import('@/views/home/information.vue')
      },
      {
        path: 'messageBoard', //留言
        name: 'MessageBoard',
        component: () => import('@/views/home/messageBoard.vue')
      },
      {
        path: 'management', //客服管理
        name: 'Management',
        component: () => import('@/views/home/management.vue')
      },
      {
        path: 'platform', //平台客服
        name: 'Platform',
        component: () => import('@/views/home/platform.vue')
      },
      {
        path: 'derive', //数据/短语导出明细
        name: 'Derive',
        component: () => import('@/views/home/derive.vue')
      },
      {
        path: 'setting', //设置
        name: 'Setting',
        component: () => import('@/views/home/setting.vue')
      }

    ]
  },

  {
    path: '/login', //登录页面
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
          },
          {
            path: 'Tregister',//注册页面
            name: 'TRegister',
            component: () => import('@/views/login/register.vue')
          }
        ]
      },
      {
        path: 'register',//注册页面 
        name: 'Register',
        component: () => import('@/views/login/register.vue')
      }
    ]
  },
  {
    path: '/backstage', //后台
    name: 'Backstage',
    meta: {
      requireAuth: true,//该路由需要权限校验
    },
    component: () => import('@/views/backstage/backstage.vue')
  },
  {
    path: '/guide', //指南
    name: 'Guide',
    meta: {
      requireAuth: true,//该路由需要权限校验
    },
    component: () => import('@/views/guide/guide.vue')
  },
  {
    path: '/download', //下载
    name: 'Download',
    meta: {
      requireAuth: true,//该路由需要权限校验
    },
    component: () => import('@/views/download/download.vue')
  }
]


const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
