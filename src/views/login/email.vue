<template>
  <div>
    <LoginForm :data="data" />
  </div>
</template>

<script lang='ts' setup>
import { LoginRouterData } from '../../plugin/types'
name: 'Email'
const data: LoginRouterData = {
  account: '邮箱',
  validation: '密码',
  showCode: false,
  type: 'password'
}
</script>

<style lang='less' scoped>

</style>