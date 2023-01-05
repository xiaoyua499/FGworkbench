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
          bgc: '#28c728'
        },
        //小休
        {
          text: '小休',
          bgc: '#ff9a0d'
        },
        //离线
        {
          text: '离线',
          bgc: '#ccc'
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

