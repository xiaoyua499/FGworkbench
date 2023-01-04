<template>
  <Customer :customers="customers" />
</template>

<script lang='ts' setup>
// import { Customer } from '@/plugin/types'

//顾客信息
const customers = [
  {
    id: '1', //id
    nikename: '体重', //昵称
    headImg: '/src/assets/头像.jpg',//头像
    RecentNews: '用户超时未回复，系统关闭会话', //最近消息
    RecentTime: '08:04', //最近会话时间
    isStar: '', //是否标星
    starColor: 'red'//星星颜色
  },
  {
    id: '2', //id
    nikename: '哈哈哈', //昵称
    headImg: '/src/assets/头像.jpg',//头像
    RecentNews: '好的呢亲亲', //最近消息
    RecentTime: '08:04', //最近会话时间
    isStar: 'none', //是否标星
    starColor: 'none'//星星颜色
  },
]


</script>

<style lang='less' scoped>

</style>