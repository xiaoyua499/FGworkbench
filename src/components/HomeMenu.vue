<template>
  <el-menu class="menu" :collapse="true" router>
    <div class="menu-top">
      <el-menu-item :index="item.router" v-for="item in menuDataTop" :key="item.index">
        <i class='iconfont' :class="item.iconfont"></i>
        <span class="title">{{ item.title }}</span>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </div>
    <div class="menu-bottom">
      <el-menu-item :index="item.router" v-for="item in menuDataBottom" :key="item.index">
        <i class='iconfont' :class="item.iconfont"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang='ts' setup>
import router from '@/router'
import { ref } from 'vue'

//menu顶部数据
const menuDataTop = [
  {
    router: 'conversation',
    iconfont: 'gf-bubbles4',
    title: '会话',
    index: 1
  },
  {
    router: 'information',
    iconfont: 'shuzhuangtu',
    title: '数据',
    index: 2
  },
  {
    router: 'messageBoard',
    iconfont: 'tianchongxing-',
    title: '留言',
    index: 3
  },
  {
    router: 'management',
    iconfont: 'yingyongzhongxin',
    title: '客服管理',
    index: 4
  },
  {
    router: 'platform',
    iconfont: 'kefu',
    title: '平台客服',
    index: 5
  },
]

//menu底部数据
const menuDataBottom = [
  {
    router: 'derive',
    iconfont: 'renwu',
    title: '数据/短语导出明细',
    index: 1
  },
  {
    router: 'setting',
    iconfont: 'shezhi',
    title: '设置',
    index: 2
  },
  {
    router: 'backstage',
    iconfont: 'dianpu1',
    title: '前往商家后台',
    index: 3
  }
]
</script>

<style lang='less' scoped>
.menu {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px 0;
  height: 740px;
  border: none;
  background-image: linear-gradient(180deg, #618efb, #1966ff);

  .menu-bottom,
  .menu-top {
    :deep(.el-menu-item) {
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