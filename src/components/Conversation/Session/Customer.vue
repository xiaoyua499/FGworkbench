<template>
  <div class="customer-box" v-for="item in customers" :key="item.userId" @click="getChitchatInfo(item.customerId)">
    <!-- 头像 -->
    <img class="headImg" :src="item.headImg" alt="">
    <div class="center">
      <!-- 昵称 -->
      <span class="nikename">{{ item.customerNickName }}</span>
      <!-- 最近会话内容 -->
      <span class="recentNews">{{ item.RecentNews }}</span>
    </div>
    <div class="right">
      <!-- 最近会话时间 -->
      <span class="recentTime">{{ item.updateTime }}</span>
      <!-- 星星 -->
      <el-popover placement="top" v-if="item.isStar" width="175px" trigger="hover" ref="popover">
        <div style=" 
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;">
          <p style="font-size">快捷标星(Ctrl+Shift+Y)</p>
          <div style="
          margin-top: 5px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;">
            <div class="round" style="
            margin: 0; 
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color:#ff574d;" @click="setColor(item, ' #ff574d')"></div>
            <div class="round" style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color:#ffb340;" @click="setColor(item, ' #ffb340')"></div>
            <div class="round" style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color:#669eff;" @click="setColor(item, ' #669eff')"></div>
            <div class="round" style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color:#6ccc3d;" @click="setColor(item, ' #6ccc3d')"></div>
            <div class="round" style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color:#ccc;" @click="setColor(item, ' #ccc')"></div>
          </div>
        </div>
        <template #reference>
          <i class="iconfont shoucang star" :style="getStyle(item.starColor)" @click="item.isPopover = true"></i>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
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

//动态设置星星颜色
const getStyle = (starColor: string) => {
  return {
    color: starColor
  }
}

//动态设置星星颜色
const setColor = (item: any, color: string) => {
  item.isPopover = false
  item.starColor = color
  customerStore.updataColor(item.customerId, color)
}

const getChitchatInfo = (customerId: string) => {
  const userId:string = userStore.userInfo.id
  chitchatStore.getChitchat(userId,customerId)
  // console.log(sendId);
}

</script>

<style lang='less' scoped>
.customer-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
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

  :deep(.right) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    .round {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>