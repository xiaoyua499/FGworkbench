import service from '@/server'

//注册用户
export function register(params:any) {
  return service.post('/user/register', params)
}

//用户登录
export function login(params: any) {
  return service.post('/auth/login', params)
}

