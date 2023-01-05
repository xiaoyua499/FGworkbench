import { toRaw } from 'vue'
//引入Pinia
import { createPinia, PiniaPluginContext } from 'pinia'

//定义入参类型
type Options = {
  key?: string
}

//定义兜底变量
const __piniakey: string = '__PINIAKEY__'


//将数据存在本地
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

//存缓存中读取数据
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}


//利用函数闭包接受用户入参
const piniaPlugin = (options: Options) => {
  //将函数返回给pinia  让pinia  调用 注入 context
  return (context: PiniaPluginContext) => {
    const { store } = context
    const data = getStorage(`${options?.key ?? __piniakey}-${store.$id}`)
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniakey}-${store.$id}`, toRaw(store.$state))
    })
    //返回值覆盖pinia 原始值
    return {
      ...data
    }
  }
}

//初始化pinia并导出
export const pinia = createPinia()

//注册pinia 插件
pinia.use(piniaPlugin({
  key: "pinia"
}))