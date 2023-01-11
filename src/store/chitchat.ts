import { sendChitchat, getChitchat } from '@/server/api/chitchat';
import { defineStore } from 'pinia'
import { Names } from "./name";

export const useChitchatStore = defineStore(Names.Chitchat, {
  state: () => {
    return {
      chitchat: []
    }
  },
  getters: {},
  actions: {
    async getChitchat(sendId: string, acceptId: string) {
      await getChitchat(sendId, acceptId).then((res: any) => {
        this.chitchat = res.data.data
        console.log(this.chitchat);
      })
        .catch(res => {
          console.log(res);
        })
    }
  }
})