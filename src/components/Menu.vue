<template>
  <el-menu class="menu" :collapse="true" router>
    <div class="menu-top">
      <el-menu-item :index="item.router" v-for="item in menuDataTop" :key="item.index">
        <i class='iconfont' :class="item.iconfont"></i>
        <span class="title" v-if="item.showTile">{{ item.title }}</span>
        <template #title v-if="item.Tooltip">{{ item.title }}</template>
      </el-menu-item>
    </div>
    <div class="menu-bottom">
      <el-menu-item :index="item.router" v-for="item in menuDataBottom" :key="item.index">
        <i class='iconfont' :class="item.iconfont"></i>
        <span class="title" v-if="item.showTile">{{ item.title }}</span>
        <template #title v-if="item.Tooltip">{{ item.title }}</template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang='ts' setup>
import router from '@/router'
import { computed, ref } from 'vue'

const props = defineProps({
  menuDataTop: {
    type: Object,
    default: () => { }
  },
  menuDataBottom: {
    type: Object,
    default: () => { }
  },
  activeStyle: {
    type: Object,
    default: () => { }
  }
})
const bgc = {
  color: 'red'
}
</script>

<style lang='less' scoped >
.menu {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  .menu-bottom,
  .menu-top {
    display: inline-block;

    :deep(.el-menu-item) {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin: 5px 0;
      border-radius: 10px;
      padding: 0;

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
        color: v-bind('activeStyle.color')
      }

      &:hover {
        border-radius: 10px;
        background-color: transparent;

        .iconfont {
          color: v-bind('activeStyle.activeIconColor')
        }

        .title {
          color: v-bind('activeStyle.activeIconColor')
        }
      }

      .iconfont {
        font-size: 25px;
        color: v-bind('activeStyle.color')
      }
    }
  }

  .menu-top {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;

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
    margin-bottom: 150px;

    .is-active {
      width: 100%;
      // height: 100%;
      background-color: v-bind('activeStyle.activeColor') !important;
      border-radius: 10px;
      color: v-bind('activeStyle.activeIconColor');

      .iconfont {
        color: v-bind('activeStyle.activeIconColor') !important;
      }

      .title {
        color: v-bind('activeStyle.activeIconColor')
      }
    }
  }
}
</style>