import { defineStore } from "pinia";
import { Names } from './name'
export const useUserStore = defineStore(Names.User, {
  state: () => {
    return {
      userInfo: {
        nickname: '',
        id: '',
        email: '',
        mobile: ''
      }
    }
  },
  actions: {},
  getters: {}
})

