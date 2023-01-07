<template>
  <Customer :customers="inServiceCustomer" />
</template>

<script lang='ts' setup>
import { useCustomerStore } from '@/store/customer';
import { storeToRefs } from 'pinia';

const customerStore = useCustomerStore()
//获取顾客数据
const { inServiceCustomer }  = storeToRefs(customerStore) 

</script>

<style lang='less' scoped>

</style>