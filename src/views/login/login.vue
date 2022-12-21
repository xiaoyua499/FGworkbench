<template>
  <div class="login ">
    <el-card class="box-card">
      <!-- 登录选项 -->
      <div class="login-options" v-if="show">
        <div class="title">
          <h1>飞鸽一站式客服工作台</h1>
          <p>请选择您的登录身份</p>
        </div>
        <div class="identity">
          <!-- 商家 -->
          <div class="merchants" @click="goMerchants">
            <p>我是商家</p>
            <p>自营小店，承接电商咨询</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#xiangshangyuanjiantou-copy"></use>
            </svg>
            <div class="bgcIcons">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#dianpu1"></use>
              </svg>
            </div>
          </div>
          <!-- 达人 -->
          <div class="talent" @click="goTalent">
            <p>我是达人</p>
            <p>达人带货，承接直播咨询</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#darenjiantou-copy-copy"></use>
            </svg>
            <div class="bgcIcons">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#huangguan"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- 各选项登录界面 -->
        <router-view></router-view>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import router from "../../router"

import { ref } from 'vue'

const show = ref<boolean>(true)
//点击跳转商家登录页面
const goMerchants = () => {
  show.value = false
  router.push('login/merchants')
}
//点击跳转达人登录页面
const goTalent = () => {
  show.value = false
  router.push('login/talent')
}
</script>

<style lang='less' scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  /deep/.box-card {
    width: 625px;
    height: 500px;

    .el-card__body {
      padding: 0;
    }

    //登录选项样式
    .login-options {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      width: 625px;
      height: 500px;
      background-image: linear-gradient(180deg, #e5f1ff, #ffffff);

      .title {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        &>h1 {
          font-size: 25px;
          font-weight: 400;
        }

        &>p {
          margin: 20px 0 15px 0;
          color: #9c9d9f;
        }
      }

      .identity {

        //商家样式
        .merchants {
          position: relative;
          margin-bottom: 15px;
          padding: 15px;
          width: 350px;
          height: 135px;
          color: #fff;
          border-radius: 8px;
          background-image: linear-gradient(105deg, #3c76ff, #8eb0ff);

          p:nth-child(1) {
            margin-bottom: 8px;
            font-size: 20px;
          }

          p:nth-child(2) {
            margin-bottom: 8px;
            font-size: 14px;
          }

          .icon {
            width: 20px;
            height: 20px;
            fill: none;
          }

          .bgcIcons {
            position: absolute;
            bottom: -10px;
            right: 20px;

            .icon {
              width: 100px;
              height: 100px;
              fill: #c3d7ff;
            }
          }
        }

        //达人样式
        .talent {
          position: relative;
          padding: 15px;
          width: 350px;
          height: 135px;
          color: #fff;
          border-radius: 8px;
          background-image: linear-gradient(105deg, #8257ff, #ac8eff);

          p:nth-child(1) {
            margin-bottom: 8px;
            font-size: 20px;
          }

          p:nth-child(2) {
            margin-bottom: 8px;
            font-size: 14px;
          }

          .icon {
            width: 20px;
            height: 20px;
            fill: none;
            // background-color: #fff;
          }

          .bgcIcons {
            position: absolute;
            bottom: -15px;
            right: 20px;

            .icon {
              width: 100px;
              height: 100px;
              fill: #cbb8ff;
            }
          }
        }
      }
    }
  }
}
</style>