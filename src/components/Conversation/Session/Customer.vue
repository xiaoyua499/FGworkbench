<template>
  <div class="customer-box" v-for="item in customers" :key="item.userId">
    <div @click="getChitchatInfo(item)" class="left">
      <!-- 头像 -->
      <img class="headImg" :src="item.headImg" alt="">
      <div class="center">
        <!-- 昵称 -->
        <span class="nikename">{{ item.customerNickName }}</span>
        <!-- 最近会话内容 -->
        <span class="recentNews">{{ item.RecentNews }}</span>
      </div>
    </div>

    <div class="right">
      <!-- 最近会话时间 -->
      <span class="recentTime">{{ item.updateTime }}</span>
      <!-- 星星 -->
      <star :item="item" :starIcon="starIcon" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { Customer } from "@/plugin/types"
import { useCustomerStore } from '@/store/customer'
import { updataCustomer } from '@/server/api/customer'
import { useChitchatStore } from '@/store/chitchat';
import { useUserStore } from '@/store/user';

//获取顾客仓库
const customerStore = useCustomerStore()
const chitchatStore = useChitchatStore()
const userStore = useUserStore()
//获取顾客数据
const customerProps = defineProps({
  customers: {
    type: Object,
    default: () => { }
  }
})

//标星icon样式  
const starIcon = 'star'

//获取聊天信息  
const getChitchatInfo = (customer: any) => {
  const userId: string = userStore.userInfo.id
  chitchatStore.getChitchat(customer.customerId, userId)
  customerStore.getCurrentCustomer(customer)
}

</script>

<style lang='less' scoped>
.customer-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;

  &:hover {
    background-color: #f7f7f7;
  }

  .headImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }

  .center {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;

    .nikename {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }

    .recentNews {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #9e9e9e;
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 10px;
    width: 75%;
  }

  :deep(.right) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-right: 10px;

    .round {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>