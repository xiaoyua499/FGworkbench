<template>
  <el-menu class="menu" :collapse="true">
    <div class="menu-top">
      <el-menu-item index="1">
        <i class='iconfont gf-bubbles4'></i>
        <span class="title">会话</span>
        <template #title>会话</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class='iconfont shuzhuangtu'></i>
        <span class="title">数据</span>
        <template #title>数据</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class='iconfont tianchongxing-'></i>
        <span class="title">留言</span>
        <template #title>留言</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class='iconfont yingyongzhongxin'></i>
        <span class="title">客服管理</span>
        <template #title>客服管理</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class='iconfont kefu'></i>
        <span class="title">平台客服</span>
        <template #title>平台客服</template>
      </el-menu-item>
    </div>
    <div class="menu-bottom">
      <el-menu-item index="6">
        <i class='iconfont renwu'></i>
        <template #title>数据/短语导出明细</template>
      </el-menu-item>
      <el-menu-item index="7">
        <i class='iconfont shezhi'></i>
        <template #title>设置</template>
      </el-menu-item>
      <el-menu-item index="8">
        <i class='iconfont dianpu1'></i>
        <template #title>前往商家后台</template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

</script>

<style lang='less' scoped>
.menu {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px 0;
  height: 740px;
  border: none;
  background-image: linear-gradient(180deg, #81b3fe, #1966ff);

  .menu-bottom,
  .menu-top {
    /deep/.el-menu-item {
      margin: 5px 0;
      border-radius: 10px;

      .el-menu-tooltip__trigger {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 0;
      }

      .title {
        display: block;
        font-size: 12px;
        color: #fff;
      }

      &:hover {
        border-radius: 10px;
        background-color: transparent;

        .iconfont {
          color: #fff;
        }
      }

      .iconfont {
        font-size: 25px;
        color: #d6e6ff;
      }
    }
  }

  .menu-top {
    .el-menu-item {
      .title {
        height: 90%;
      }

      &:hover {
        .iconfont {
          height: 33%;
        }
      }

      .iconfont {
        height: 33%;
      }
    }
  }

  .menu-top {
    .is-active {
      background-color: #2364f5 !important;
      border-radius: 10px;

      .iconfont {
        color: #fff !important;
      }
    }
  }


}
</style>