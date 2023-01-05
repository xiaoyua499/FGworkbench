<template>
  <el-collapse class="list-box" v-model="activeNames" @click="handleChange" v-for=" item,index in listData"
    :key="index">
    <el-collapse-item :name="index" class="list">
      <template #title>
        {{ item.title }}
        <span v-if="item.showStarNum">({{ customers.starCustomer.length }}/200)</span>
        <span v-if="item.showPayNum">({{ customers.shoppingCustomer.length }})</span>
        <span v-if="item.showRecentlyNum">({{ customers.payCustomer.length }})</span>
      </template>
      <Customer :customers="item.data" />
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { useCustomerStore } from '@/store/customer'
// import { Customer } from '@/plugin/types'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}

//顾客信息
let customers: any = {
  starCustomer: [], //标星用户
  shoppingCustomer: [],//今日咨询未下单用户
  payCustomer: [],//今日下单未付款
  recentlyCustomer: [],//最近联系人
}
const customerStore = useCustomerStore()
//获取标星用户
customers.starCustomer = customerStore.starCustomer
//获取今日咨询未下单用户
customers.shoppingCustomer = customerStore.shoppingCustomer
//获取今日下单未付款
customers.payCustomer = customerStore.payCustomer
//获取最近联系人
customers.recentlyCustomer = customerStore.recentlyCustomer


//分组列表
const listData = [
  {
    title: '星标用户',
    data: customers.starCustomer,
    showStarNum: true,
    showPayNum: false,
    showRecentlyNum: false,
  },
  {
    title: '今日咨询未下单',
    data: customers.shoppingCustomer,
    showStarNum: false,
    showPayNum: true,
    showRecentlyNum: false,
  },
  {
    title: '今日下单未付款',
    data: customers.payCustomer,
    showStarNum: false,
    showPayNum: false,
    showRecentlyNum: true,
  },
  {
    title: '最近联系人',
    data: customers.recentlyCustomer,
    showStarNum: false,
    showPayNum: false,
    showRecentlyNum: false,
  },
]
</script>

<style lang='less' scoped>
.list-box {
  width: 100%;
  // height: 30px;
  border: none;


  :deep(.list) {
    .el-collapse-item__wrap {
      border: none;
    }

    .el-collapse-item__header {
      height: 30px;
      padding: 0 10px;
      border: none;
    }
  }

}
</style>