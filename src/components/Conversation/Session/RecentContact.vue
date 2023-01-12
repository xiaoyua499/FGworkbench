<template>
  <el-collapse class="list-box" v-model="activeNames" @click="handleChange">
    <el-collapse-item name="星标用户" class="list">
      <template #title>
        星标用户
        <span>({{ starCustomer?.length }}/200)</span>
      </template>
      <Customer :customers="starCustomer" />
    </el-collapse-item>
    <el-collapse-item name="今日咨询未下单" class="list">
      <template #title>
        今日咨询未下单
        <span>({{ shoppingCustomer?.length }})</span>
      </template>
      <Customer :customers="shoppingCustomer" />
    </el-collapse-item>
    <el-collapse-item name="今日下单未付款" class="list">
      <template #title>
        今日下单未付款
        <span>({{ payCustomer?.length }})</span>
      </template>
      <Customer :customers="payCustomer" />
    </el-collapse-item>
    <el-collapse-item name="最近联系人" class="list">
      <template #title>
        最近联系人
      </template>
      <Customer :customers="recentlyCustomer" />
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts' setup>
import { onMounted, reactive, ref } from 'vue'
import { useCustomerStore } from '@/store/customer'
import { storeToRefs } from 'pinia'
// import { Customer } from '@/plugin/types'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  // console.log(val)
}

//顾客信息
const customerStore = useCustomerStore()

const { starCustomer, shoppingCustomer, payCustomer, recentlyCustomer } = storeToRefs(customerStore)

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