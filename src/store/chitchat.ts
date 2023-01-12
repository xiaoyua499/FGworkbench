import { sendChitchat, getChitchat } from '@/server/api/chitchat';
import { defineStore } from 'pinia'
import { useCustomerStore } from './customer';
import { Names } from "./name";

const chustomreStoer = useCustomerStore()

export const useChitchatStore = defineStore(Names.Chitchat, {
  state: () => {
    return {
      // 聊天列表
      chitchat: [{
        chitchatid:'',
        send:'',
        type:'',
        message:'',
        status:''
      }]
    }
  },
  getters: {},
  actions: {
    // 获取聊天列表
    async getChitchat(customerId: string,userId:string) {
      await getChitchat(customerId,userId).then((res: any) => {
        this.chitchat = res.data.data
        console.log(res.data.data);
        this.chitchat.forEach((item: any) => {
          if (item.sendId === chustomreStoer.currentCustomer.customerId) {
            item.type = 1
            item.send = 1
          } else {
            item.type = 1
            item.send = 0
          }
        })
      }).catch(res=>{
        console.log(res);
        
      })
      
    }
  }
})