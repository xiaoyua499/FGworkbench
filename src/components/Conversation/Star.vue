<template>
  <el-popover placement="top" width="175px" trigger="hover" ref="popover" v-if="item.isStar">
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
      <i class="iconfont shoucang star" :style="getStyle(item.starColor)" @click="setStar(item, false)"
        v-if="isStarStyle"></i>
      <i class="iconfont shoucang xingxing" :style="getStyle(item.starColor)" v-else></i>
    </template>
  </el-popover>

</template>

<script lang='ts' setup>
import { useCustomerStore } from "@/store/customer"

const customerStore = useCustomerStore()
//获取顾客数据
const currentCustomerProps = defineProps({
  item: {
    type: Object,
    default: () => { }
  },
  starIcon: {
    type: String,
    default: () => { }
  },
  isStarStyle: {
    type: Boolean,
    default: true
  }
})

//动态设置星星颜色
const getStyle = (starColor: string, display = 'block') => {
  return {
    display: display,
    color: starColor
  }
}
//动态设置星星颜色
const setColor = (item: any, color: string) => {
  item.starColor = color
  customerStore.updataColor(item.customerId, color)
}
//设置是否标星  
const setStar = (item: any, isStar: boolean) => {
  // getStyle('#fff', 'none')
  item.starColor = '#fff'
  customerStore.updataColor(item.customerId, '#fff', isStar)

}
</script>

<style lang='less' scoped>

</style>