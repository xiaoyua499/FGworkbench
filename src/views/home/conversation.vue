<template>
  <div>conversation
    <button @click="getUserInfo">111</button>
  </div>
</template>

<script lang='ts' setup>
import { userInfo } from "@/server/api/login";
const getUserInfo = async () => {
  await userInfo().then(res => {
    console.log(res);

  })
}
</script>

<style lang='less' scoped>

</style>