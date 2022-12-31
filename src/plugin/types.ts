interface LoginRouterData {
  account: string,
  validation: string,
  showCode: boolean,
  type: string
}

interface EmailData{
  email:string,
  password:string
}

interface PhoneData{
  mobile:string,
  validation:string
}

interface UserData {
  nickname: string,
  id: string,
  email: string,
  mobile: string
}

export {
  LoginRouterData,
  EmailData,
  PhoneData,
  UserData
}