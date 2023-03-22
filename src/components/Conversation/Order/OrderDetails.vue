<template>
  <div class="order-details" ref="orderRef">
    <div class="order-left">
      <el-scrollbar ref="scrollbarRef">
        <el-tabs v-model="activeName" class="order-tabs" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <OrderInfo />
          </el-tab-pane>
          <el-tab-pane label="未完结" name="second">
            <OrderInfo />
          </el-tab-pane>
          <el-tab-pane label="已完结" name="third">
            <OrderInfo />
          </el-tab-pane>
          <el-tab-pane label="已关闭" name="fourth">
            <OrderInfo />
          </el-tab-pane>
        </el-tabs>
      </el-scrollbar>
    </div>
    <div class="order-right">
      <i class="iconfont a-jiqirenzhineng-01"></i>
      <i class="iconfont shuaxin"></i>
      <i class="iconfont sousuo"></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'


const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const scrollbarRef = ref()
const orderRef = ref()

//动态设置scrollbar高度
const setScrollbarHeight = () => {
  //获取order实例
  const orderEntity = orderRef.value
  //获取order高度
  const orderHeight = orderRef.value.offsetTop
  //获取body高度
  const bodyHeight = orderEntity.offsetParent.clientHeight
  //获取scrollbar实例
  const scrollbarEntity = scrollbarRef.value.wrapRef
  //设置scrollbar高度
  scrollbarEntity.style.height = `${bodyHeight - orderHeight - 20}` + 'px'
}
onMounted(() => {
  setScrollbarHeight()
})

</script>

<style lang='less' scoped>
.order-details {
  position: relative;
  width: 100%;
  height: 100%;

  :deep(.order-left) {
    .order-tabs {
      max-height: 100%;
      overflow: hidden;
    }

    .el-tabs {
      .el-tabs__header {
        // position: fixed;
        position: absolute;
        top: 0;
        left: 0;
        margin-bottom: 0;
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        background-color: #fff;
        z-index: 1;
      }

      .el-tabs__content {
        margin-top: 40px;
      }
    }


    .el-tabs__nav {
      padding: 0 10px;
    }

    .el-tabs__nav-wrap::after {
      height: 0;
    }
  }

  .order-right {
    position: absolute;
    top: 7px;
    right: 0;
    padding: 0 10px;
    z-index: 2;

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