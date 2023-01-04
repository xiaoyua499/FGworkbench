<template>
  <div class="customer-box" v-for="item in customers" :key="item.id">
    <img class="headImg" :src="item.headImg" alt="">
    <div class="center">
      <span class="nikename">{{ item.nikename }}</span>
      <span class="recentNews">{{ item.RecentNews }}</span>
    </div>
    <div class="right">
      <span class="recentTime">{{ item.RecentTime }}</span>
      <i class="iconfont shoucang star" :style="getStyle(item.starColor, item.isStar)"></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { Customer } from "@/plugin/types"
const customerProps = defineProps({
  customers: {
    type: Object,
    default: () => { }
  }
})

//动态设置星星颜色
const getStyle = (starColor: string, isStar: string) => {
  return {
    display: isStar,
    color: starColor
  }
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

  .right {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}
</style>