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
  customerId: string, //id
  nikename: string, //昵称
  headImg: string,//头像
  RecentNews: string, //最近消息
  RecentTime: string, //最近会话时间
  isShopping: boolean,//是否下单
  isPay: boolean,//是否付款
  isStar: boolean, //是否标星
  isEnd: boolean,//是否结束会话
  isRecently: boolean,//是否为最近会话
  starColor: string//星星颜色
  updateTime:string//更新时间
}

export {
  LoginRouterData,
  EmailData,
  PhoneData,
  UserData,
  Customer
}