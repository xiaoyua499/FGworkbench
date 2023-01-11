import service from '@/server'

//发送信息
export function sendChitchat(params: any) {
  return service.post('/chitchat/create', params)
}
//获取对应信息
export function getChitchat(sendId: string, acceptId: string) {
  return service.get('/chitchat/chitchatInfo', { params: { sendId: sendId, acceptId: acceptId } })
}