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

export {
  LoginRouterData,
  EmailData,
  PhoneData
}