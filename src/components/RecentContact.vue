<template>
  <el-collapse class="list-box" v-model="activeNames" @click="handleChange" v-for="(item,index) in listData"
    :key="index">
    <el-collapse-item :name="index" class="list">
      <template #title>
        {{ item }}
      </template>
      <Customer :customers="customers" />
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}

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
const listData = ['星标用户', '今日咨询未下单', '今日下单未付款', '最近联系人']
</script>

<style lang='less' scoped>
.list-box {
  border: none;


  :deep(.list) {
    .el-collapse-item__header {
      padding: 0 10px;
    }
  }

}
</style>