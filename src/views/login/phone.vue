<template>
  <div class="phone-box">
    <p>未注册的手机号登录成功后将自动注册</p>
    <LoginForm :data="data" />
  </div>
</template>

<script lang='ts' setup>
import { LoginRouterData }  from '../../plugin/types'
name:'Phone'
const data: LoginRouterData = {
  account: '手机号码',
  validation: '验证码',
  showCode: true,
  type: 'text'
}
</script>

<style lang='less' scoped>
.phone-box {
  &>p {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #999b9f;
  }
}
</style>