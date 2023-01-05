<template>
  <el-tabs v-model="activeName" class="tabs-box" @tab-click="handleClick">
    <el-scrollbar height="527px">
      <el-tab-pane name="CurrentSession">
        <template #label>
          <span class="lable-box">
            <span class="lable">当前会话</span>
            <span class="num">({{ inServiceNum }})</span>
            <i class="iconfont jiantou_qiehuanxiangxia_o uparrow"></i>
            <i class="iconfont jiantou_qiehuanxiangshang_o downarrow"></i>
          </span>
        </template>
        <CurrentSession />
      </el-tab-pane>
      <el-tab-pane label="最近联系" name="RecentContact">
        <RecentContact />
      </el-tab-pane>
    </el-scrollbar>

  </el-tabs>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const inServiceNumProps = defineProps({
  inServiceNum: {
    type: Object,
    default: () => { }
  }
})
const activeName = ref('CurrentSession')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang='less' scoped>
.tabs-box {
  width: 100%;
  height: 581px;

  :deep(.el-tabs__nav-wrap) {
    .el-tabs__nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      .el-tabs__item.is-active {
        .iconfont {
          color: #000;
        }

        .uparrow {
          color: var(--el-color-primary);
        }
      }

      .el-tabs__item {
        &:hover {
          .iconfont {
            color: #000;
          }

          .uparrow {
            color: var(--el-color-primary);
          }
        }
      }

      .lable-box {
        position: relative;

        .uparrow {
          position: absolute;
          top: -8px;
          right: -14px;
          color: var(--el-color-primary);
        }

        .downarrow {
          position: absolute;
          top: -8px;
          right: -17px;
        }
      }
    }
  }
}
</style>