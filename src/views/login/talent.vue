<template>
  <div class="talent">
    <div class="talent-left">
      <!-- 商标 -->
      <img class="trademark" src="../../assets/feige.ico" alt="">
      <h1 class="title">达人版</h1>
      <button class="switch" @click="goMerchants">
        <i class='iconfont jiantou_zuoyouqiehuan'></i>
        <p>切换商家版</p>
      </button>
      <span>一站式客服工作台</span>
    </div>
    <div class="talent-right">
      <div class="talent-right-top">
        <div class="top">
          <i class='iconfont xiangzuojiantou'></i>
          <!-- 关闭与最小化图标 -->
          <div>
            <el-tooltip class="box-item" effect="dark" content="最小化" placement="bottom">
              <i class='iconfont suoxiao'></i>
            </el-tooltip>
            <el-tooltip class="box-item" effect="dark" content="关闭" placement="bottom">
              <i class='iconfont guanbi'></i>
            </el-tooltip>
          </div>
        </div>
        <div class="login-switch">
          <router-link class="phone" to="/login/talent/Tphone">手机登录</router-link>
          <span>|</span>
          <router-link to="/login/talent/Temail">邮箱登录</router-link>
        </div>
        <router-view v-slot="{ Component }" include="Email,Phone">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
        <OtherLogin :otherShow="otherShow" />
      </div>
      <div class="agreement">
        <span>登录即代表同意 <span class="user-agreement">用户协议</span>和<span class="privacy">隐私条款</span></span>
        <span class="no-login">无法登陆？</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import router from '@/router'
name: 'Telent'
const otherShow: boolean = false

//切换到达人登录页面
const goMerchants = () => {
  router.push('/login/merchants')
}
</script>

<style lang='less' scoped>
.talent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 625px;
  height: 500px;

  //左侧部分
  .talent-left {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 275px;
    height: 500px;
    background-image: linear-gradient(180deg, #a483ff, #7c40fd);

    .trademark {
      margin-top: 140px;
      width: 70px;
      height: 70px;
    }

    .title {
      margin: 15px 0 25px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }

    .switch {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100px;
      height: 30px;
      border: 1px solid #fff;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 5px;
      color: #fff;

      .iconfont {
        font-size: 15px;
      }
    }

    &>span {
      margin-top: 135px;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .talent-right {

    width: 350px;
    height: 500px;

    .talent-right-top {
      padding: 15px;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .iconfont {
          font-size: 15px;
          color: #999;
        }

        div {
          .iconfont:nth-child(1) {
            margin-right: 10px;
          }

          .iconfont:nth-child(2) {
            width: 12px;
            height: 12px;
            margin-right: 10px;
          }
        }
      }

      .login-switch {
        margin-top: 20px;
        text-align: center;

        .router-link-active {
          color: #2c72fd;
        }

        &>span {
          margin: 0 20px;
          color: #999b9f
        }
      }
    }

    .agreement {
      height: 50px;
      background-color: #f9f9fa;
      font-size: 13px;
      color: #999b9f;
      line-height: 50px;
      text-align: center;


      .user-agreement {
        padding: 0 5px;
        color: #000;
      }

      .privacy {
        margin-right: 20px;
        padding: 0 5px;
        color: #000;
      }

      .no-login {
        color: #000;
      }
    }
  }
}
</style>