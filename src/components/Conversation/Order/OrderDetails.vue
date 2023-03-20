<template>
  <div class="order-details">
    <div class="order-left">
      <el-tabs v-model="activeName" class="order-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <OrderInfo/>
          <OrderInfo/>
          <OrderInfo/>
        </el-tab-pane>
        <el-tab-pane label="未完结" name="second">
          <OrderInfo/>
        </el-tab-pane>
        <el-tab-pane label="已完结" name="third">
          <OrderInfo/>
        </el-tab-pane>
        <el-tab-pane label="已关闭" name="fourth">
          <OrderInfo/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="order-right">
      <i class="iconfont a-jiqirenzhineng-01"></i>
      <i class="iconfont shuaxin"></i>
      <i class="iconfont sousuo"></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang='less' scoped>
.order-details {
  position: relative;
  width: 100%;
  height: 100%;

  :deep(.order-left) {
    .el-tabs__header{
      margin-bottom: 0;
      border-bottom: 1px solid #f1f1f1;
    }
    .el-tabs__nav{
      padding: 0 10px;
    }
    .el-tabs__nav-wrap::after{
      height: 0;
    }
  }


  .order-right {
    position: absolute;
    top: 7px;
    right: 0;
    padding: 0 10px;

    .iconfont {
      font-size: 20px;
      font-weight: 600;
      color: #8e8e8e;
    }

    .a-jiqirenzhineng-01 {
      font-size: 22px;
    }

    .shuaxin {
      margin: 0 10px;
    }

    .sousuo {
      font-size: 18px;
    }
  }
}
</style>