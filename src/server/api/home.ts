import service from '@/server'

export function getUser() {
  return service({
    method: 'GET',
    url: '/user'
  })
}