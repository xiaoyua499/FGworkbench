<template>
  <Customer :customers="inServiceCustomer" />
</template>

<script lang='ts' setup>
import { useCustomerStore } from '@/store/customer';

const customerStore = useCustomerStore()
//获取顾客数据
const inServiceCustomer = customerStore.inServiceCustomer
</script>

<style lang='less' scoped>

</style>