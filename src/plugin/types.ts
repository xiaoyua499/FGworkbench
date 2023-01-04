interface LoginRouterData {
  account: string,
  validation: string,
  showCode: boolean,
  type: string
}

interface EmailData {
  email: string,
  password: string
}

interface PhoneData {
  mobile: string,
  validation: string
}

interface UserData {
  nickname: string,
  id: string,
  email: string,
  mobile: string
}

//顾客
interface Customer {
  id: string, //id
  nikename: string, //昵称
  headImg: string,//头像
  RecentNews: string, //最近消息
  RecentTime: string, //最近会话时间
  isStar: string, //是否标星
  starColor: string//星星颜色
}

export {
  LoginRouterData,
  EmailData,
  PhoneData,
  UserData,
  Customer
}