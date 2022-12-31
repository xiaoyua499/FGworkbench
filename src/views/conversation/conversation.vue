<template>
  <ul class="conversation-box">
    <li class="Session-list">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </li>
    <li class="Chat-box">
      <div>1</div>
      <div>2</div>
    </li>
    <li class="sidebar-details">
      <router-view></router-view>
    </li>
    <li class="Session-sidebar">
      <Menu :menuDataTop="menuDataTop" :menuDataBottom="menuDataBottom" :activeStyle="activeStyle" />
    </li>
  </ul>
</template>

<script lang='ts' setup>
//menu顶部数据
const menuDataTop = [
  {
    router: '/conversation/order',
    iconfont: 'wodedingdan',
    title: '订单',
    showTile: true,
    Tooltip: false,
    index: 1
  },
  {
    router: '/conversation/commodity',
    iconfont: 'shangpin',
    title: '商品',
    showTile: true,
    Tooltip: false,
    index: 2
  },
  {
    router: '/conversation/phrase',
    iconfont: 'fasong',
    title: '快捷短语',
    showTile: true,
    Tooltip: false,
    index: 3
  },
  {
    router: '/conversation/assistant',
    iconfont: 'jiqiren',
    title: '智能助手',
    showTile: true,
    Tooltip: false,
    index: 4
  }
]

//menu底部数据
const menuDataBottom = [
  {
    router: '/guide',
    iconfont: 'zhinan',
    title: '新手指南',
    showTile: false,
    Tooltip: true,
    index: 1
  },
  {
    router: '/download',
    iconfont: 'xiazai',
    title: '下载',
    showTile: false,
    Tooltip: true,
    index: 2
  }
]
const activeStyle = {
  color: '#999999',
  activeIconColor: '#1966ff',
  activeColor: 'none'
}
</script>

<style lang='less' scoped>
.conversation-box {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .Session-list {
    width: 20%;
    height: 100%;
    background-color: #fff;
  }

  .Chat-box {
    width: 38%;
    height: 100%;
    background-color: #f7f7f7;
  }

  .sidebar-details {
    width: 38%;
    height: 100%;
    background-color: #fff;
  }

  .Session-sidebar {
    width: 4%;
    height: 100%;
    background-color: #f7f7f7;
  }
}
</style>