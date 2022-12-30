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
        component: () => import('@/views/home/conversation.vue')
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
  }
]


const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)


router.beforeEach((to, from, next) => {
  //获取登录权限
  const getAuthority = async () => {
    const status = await LoginAuthority().then(res => {
      const status = res.status
      return status
    })
      .catch(res => {
        const status = res.response.status
        // console.log(res.response.status);
        return status
      })
    // console.log(status);
    //判断是否取得登录权限
    if (status === 200) {
      next()
    } else {
      next('/login')
    }
  }
  if (to.meta.requireAuth) {
    getAuthority()
  } else {
    next()
  }
})

export default router
