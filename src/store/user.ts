import { defineStore } from "pinia";
import { Names } from './name'
export const useUserStore = defineStore(Names.User, {
  state: () => {
    return {
      // 用户信息
      userInfo: {
        nickname: '',  //昵称
        id: '', //id
        email: '', //邮箱
        mobile: '' //手机号码
      },
      //用户状态
      userCondition: [
        //在线
        {
          text: '在线',
          state: false
        },
        //小休
        {
          text: '小休',
          state: false
        },
        //离线
        {
          text: '离线',
          state: false
        }
      ]
    }
  },
  actions: {
    getUserCondition(value: any) {
      return this.userCondition[value].text
    }
  },
  getters: {}
})

