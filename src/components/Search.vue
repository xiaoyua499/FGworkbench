<template>
  <div class="search-box">
    <input class="sratch" type="text" v-model="search" placeholder="用户昵称/抖音号/订单号">
    <i class="iconfont sousuo"></i>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const search = ref('')
</script>

<style lang='less' scoped>
.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;

  .sratch {
    height: 100%;
    &::-webkit-input-placeholder{
      line-height: 30px;
      text-align: center;
      color: #ccc;
    }
  }
  .iconfont{
    margin-right: 5px;
    color: #ccc;
  }
}
</style>