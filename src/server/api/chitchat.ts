import service from '@/server'

//发送信息
export function sendChitchat(params: any) {
  return service.post('/chitchat/create', params)
}
/**
 * 获取对应信息
 * @param {string} customerId 顾客id
 * @param {string} userId 用户id
 * @returns {Promise} 返回用户与顾客对应的聊天列表
 */
export function getChitchat(customerId: string,userId:string) {
  return service.get('/chitchat/chitchatInfo', { params: { customerId: customerId,userId:userId } })
}