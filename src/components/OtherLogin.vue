<template>
  <div class="orher-login">
    <!-- 分割线 -->
    <el-divider>
      <p class="other">其他登录方式</p>
    </el-divider>
    <div class="login-mode">
      <div v-show="props.otherShow">
        <img src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico" alt="">
        <span>抖音登录</span>
      </div>
      <div v-show="props.otherShow">
        <img src="https://lf9-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/icon_tt_192.png"
          alt="">
        <span>头条登录</span>
      </div>
      <div>
        <img src="https://s3.bytecdn.cn/ies/static/image/huoshan/logo/favicon.png" alt="">
        <span>火山登录</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps({
  otherShow: {
    type: Boolean,
    default: () => { }
  }
})
</script>

<style lang='less' scoped>
.orher-login {
  font-size: 14px;

  .el-divider--horizontal {
    margin: 40px 0;
  }

  .other {
    font-size: 12px;
    color: #999b9f;
  }

  .login-mode {
    display: flex;
    align-items: center;
    justify-content: space-around;


    &>div {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;

      &>img {
        margin-bottom: 5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #f3f3f3;
      }

    }
  }
}
</style>