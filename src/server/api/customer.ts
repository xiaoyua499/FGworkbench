import service from '@/server'

//获取顾客信息
export function getCustomerInfo(userId: string) {
  return service.get('/customer/customerInfo', { params: { userId: userId } })
}

//修改顾客状态
export function updataCustomer(params: any) {
  return service.patch('/customer/updata', params)
}
