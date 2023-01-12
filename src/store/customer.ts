import { defineStore } from 'pinia'
import { Names } from "./name";
import { Customer } from "@/plugin/types";
import { updataCustomer } from '@/server/api/customer';
export const useCustomerStore = defineStore(Names.Customer, {
  state: () => {
    return {
      customerData: [] as Customer[], //顾客数据
      starCustomer: [] as Customer[], //星标用户
      shoppingCustomer: [] as Customer[], //未下单用户
      payCustomer: [] as Customer[], //未付款用户
      recentlyCustomer: [] as Customer[], //最近用户
      inServiceCustomer: [] as Customer[], //服务中用户
    }
  },
  getters: {
  },
  actions: {
    //获取顾客数据
    getCustomer(value: Customer[]) {
      //获取客户数据
      this.customerData = value

      //获取星标用户
      this.starCustomer = this.customerData?.filter((item: Customer) => {
        return item.isStar === true
      })

      //获取未下单用户
      this.shoppingCustomer = this.customerData?.filter((item: Customer) => {
        return item.isShopping === true
      })

      //获取未付款用户
      this.payCustomer = this.customerData?.filter((item: Customer) => {
        return item.isPay === true
      })

      //获取最近用户
      this.recentlyCustomer = this.customerData?.filter((item: Customer) => {
        return item.isRecently === true
      })

      //获取服务中用户
      this.inServiceCustomer = this.customerData?.filter((item: Customer) => {
        return item.isEnd === false
      })
    },

    //更新星星颜色
    async updataColor(customerId: any, color: any) {
      this.customerData.forEach(async item => {
        if (item.customerId === customerId) {
          item.starColor = color
          // console.log(item);
          //与数据库同步星星颜色
          this.updataCustomers(item)
        }
      })
    },
    //更新数据库中对应颜色
    async updataCustomers(item: any) {
      const params = {
        customerId: '',
        isReceive: '',
        isShopping: '',
        isPay: '',
        isStar: '',
        starColor: '',
        isEnd: '',
        RecentNews: '',
        isRecently: '',
      }
      params.customerId = item.customerId
      params.isReceive = item.isReceive
      params.isShopping = item.isShopping
      params.isPay = item.isPay
      params.isStar = item.isStar
      params.starColor = item.starColor
      params.isEnd = item.isEnd
      params.RecentNews = item.RecentNews
      params.isRecently = item.isRecently
      // console.log(params);

      await updataCustomer(params).then(res => {
        // console.log(res);
      })
    }
  }
})