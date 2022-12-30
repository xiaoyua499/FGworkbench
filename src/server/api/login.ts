import service from '@/server'

//注册用户
export function register(params: any) {
  return service.post('/user/register', params)
}

//用户登录
export function login(params: any) {
  return service.post('/auth/login', params)
}

//获取登录权限
export function LoginAuthority() {
  return service.get('/auth/allow')
}

//获取用户信息
export function userInfo() {
  // const token = localStorage.getItem('token')
  return service.get('/auth/info')
}